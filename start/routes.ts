/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/
//import assert from 'assert'
import Application from '@ioc:Adonis/Core/Application'
import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import PrismaController from '../app/Controllers/Http/PrismaController'
import MailController from '../app/Controllers/Http/MailController'
import View from '@ioc:Adonis/Core/View'
import Musteri from '../app/Models/Musteri'
import Bayi from '../app/Models/Bayi'
import { DateTime } from 'luxon'

const COOKIE_NAME = Application.config.get('session.cookieName')

/* ------------ MAIL  -----------------*/
// TEST FORM
Route.get('/form', async ctx => {
	return ctx.view.render('emails/form')
})

// FORM ENDPOINT
Route.post('/form-endpoint', async ctx => {
	return new MailController().formHandler(ctx)
})
/*-------------------------------------*/

// COMPANY AND OPERATOR
/* OPERATOR */
Route.get(`/operator/:OP_KODU/:F_KODU?/:PAGE?`, async ctx => {
	let { request, response, params, session, view } = ctx
	// URL values
	const OP_KODU = params.OP_KODU
	const TARGET_PAGE = params.PAGE
	const FIRMA_KODU = params.F_KODU
	// Session values
	const PAROLA = session.get('PAROLA')
	const ACCOUNT_TYPE = session.get('ACCOUNT_TYPE')
	const GIRIS_KODU = session.get('GIRIS_KODU')
	// CHECK
	console.log('OPERATOR check: ', OP_KODU, GIRIS_KODU, PAROLA, FIRMA_KODU, TARGET_PAGE)
	if (OP_KODU === GIRIS_KODU) {
		const OPERATOR = await new Bayi(GIRIS_KODU, PAROLA)
		const isAuthorized = await OPERATOR.init()
		const haveMusteriDate = await OPERATOR.getMusteriler()
		// RENDER DASHBOARD
		if (!FIRMA_KODU) {
			return view.render('operator', { OPERATOR })
		}
		// CHECK IF LOOKING COMPANY MESAJLAR
		if (FIRMA_KODU && TARGET_PAGE) {
			console.log('Operator is looking a company data')
			// CHECK WHETHER THE COMPANY IS ITS CLIENT
			if (OPERATOR.MUSTERI_FIRMA_CODES.includes(FIRMA_KODU)) {
				const params = { F_KODU: FIRMA_KODU, PAGE: TARGET_PAGE || 1 }
				const prismaClient = new PrismaController()
				const currentPageData = await prismaClient.queryMesajlar(params)
				let musteriler: object[]
				musteriler = OPERATOR.MUSTERILER.filter(function (musteri: object | any) {
					if (musteri.F_KODU === FIRMA_KODU) {
						return true
					}
				})
				let currentMusteri: object | any = musteriler[0]
				if (currentMusteri) {
					currentMusteri.MESAJLAR = {}
					currentMusteri.MESAJLAR[TARGET_PAGE] = currentPageData
				}
				console.log('parsed MUSTERI data', currentMusteri)
				console.log('final operator data: ', OPERATOR)
				return view.render('operator', {
					OPERATOR,
					PAGE: TARGET_PAGE,
					MUSTERI: currentMusteri
				})
			}
			console.log('Error: this is not client of this OPERATOR.')
			return response.redirect().toPath(`/operator/${OP_KODU}/`)
		}
	} else {
	}
	console.log("Error: Session operator code and session operator code doesn't match.")
	return response.redirect().toPath('/logout')
})

/* COMPANY */
/* COMPANY */
Route.get('/company/:F_KODU/:DATE?', async ctx => {
	let { request, response, params, session, view } = ctx
	console.log('params', params)
	// URL values
	const TARGET_FIRMA_KODU = params.F_KODU
	const DATE = params.DATE
	console.log('company route: ', params.F_KODU, params.DATE)
	// Session values
	const PAROLA = session.get('PAROLA')
	const ACCOUNT_TYPE = session.get('ACCOUNT_TYPE')
	const GIRIS_KODU = session.get('GIRIS_KODU')
	console.log('company route values: ', TARGET_FIRMA_KODU, PAROLA, GIRIS_KODU, ACCOUNT_TYPE)
	// musteri Object
	if (parseInt(GIRIS_KODU) === parseInt(TARGET_FIRMA_KODU)) {
		console.log("target and current company ID's are matched")
		// Get MUSTERI FROM SESSION
		const SESSION_MUSTERI = session.get('MUSTERI')
		const NEW_MUSTERI_OBJECT = new Musteri(SESSION_MUSTERI.GIRIS_KODU, SESSION_MUSTERI.PAROLA)
		//console.log('session müşteri: ', SESSION_MUSTERI)
		let currentDateMesajlar = await NEW_MUSTERI_OBJECT.getMessagesbyDate({ DATE })
		SESSION_MUSTERI.MESAJLAR[DATE] = currentDateMesajlar
		//const UPDATED_MUSTERI = { ...SESSION_MUSTERI, ...NEW_MUSTERI_OBJECT }
		session.put('MUSTERI', SESSION_MUSTERI)
		response.cookie('MUSTERI', SESSION_MUSTERI)
		//console.log('company mesajlar', SESSION_MUSTERI)
		return view.render('company', { MUSTERI: SESSION_MUSTERI, DATE })
	}
	return response.redirect().toPath('/login')
})

Route.get('/_company/:F_KODU/:PAGE?', async ctx => {
	let { request, response, params, session, view } = ctx
	// URL values
	const TARGET_FIRMA_KODU = params.F_KODU
	const PAGE = parseInt(params.PAGE) || 1
	console.log('company route: ', params.F_KODU, params.PAGE)
	// Session values
	const PAROLA = session.get('PAROLA')
	const ACCOUNT_TYPE = session.get('ACCOUNT_TYPE')
	const GIRIS_KODU = session.get('GIRIS_KODU')
	console.log('company route values: ', TARGET_FIRMA_KODU, PAROLA, GIRIS_KODU, ACCOUNT_TYPE)
	// musteri Object
	if (parseInt(GIRIS_KODU) === parseInt(TARGET_FIRMA_KODU)) {
		console.log("target and current company ID's are matched")
		// Get MUSTERI FROM SESSION
		const SESSION_MUSTERI = session.get('MUSTERI')
		const NEW_MUSTERI_OBJECT = new Musteri(SESSION_MUSTERI.GIRIS_KODU, SESSION_MUSTERI.PAROLA)
		//console.log('session müşteri: ', SESSION_MUSTERI)
		let currentPageMesajlar = await NEW_MUSTERI_OBJECT.getMessagesbyPage({ PAGE })
		SESSION_MUSTERI.MESAJLAR[PAGE] = currentPageMesajlar
		//const UPDATED_MUSTERI = { ...SESSION_MUSTERI, ...NEW_MUSTERI_OBJECT }
		session.put('MUSTERI', SESSION_MUSTERI)
		response.cookie('MUSTERI', SESSION_MUSTERI)
		console.log('company mesajlar', SESSION_MUSTERI)
		return view.render('company', { MUSTERI: SESSION_MUSTERI, PAGE })
	}
	return response.redirect().toPath('/login')
})

/* LOGIN */
Route.get('/login', async ctx => {
	let { request, response, session, view } = ctx
	let sessionValue = session.get(COOKIE_NAME, {})
	let sessionError = session.get('Error')
	console.log('login error: ', sessionError)
	//console.log('Login route session value: ', sessionError)
	return view.render('auth/login', { error: sessionError && sessionError })
})

Route.post('/login', async ctx => {
	const GIRIS_KODU = ctx.request.input('accountId')
	const PAROLA = ctx.request.input('password')
	const ACCOUNT_TYPE = ctx.request.input('accountType')
	console.log('Form values: ', GIRIS_KODU, PAROLA, ACCOUNT_TYPE)
	if (!GIRIS_KODU || !PAROLA || !ACCOUNT_TYPE) {
		return ctx.response.redirect().toPath('/login')
	}
	// OPERATOR
	if (ACCOUNT_TYPE === 'bayi') {
		const OPERATOR = await new Bayi(GIRIS_KODU, PAROLA)
		const isAuthorized = await OPERATOR.init()
		if (isAuthorized) {
			console.log('Successfully logging...', GIRIS_KODU, PAROLA, ACCOUNT_TYPE)
			ctx.session.put('PAROLA', PAROLA)
			ctx.response.cookie('PAROLA', PAROLA)
			ctx.session.put('ACCOUNT_TYPE', ACCOUNT_TYPE)
			ctx.response.cookie('ACCOUNT_TYPE', ACCOUNT_TYPE)
			ctx.session.put('GIRIS_KODU', GIRIS_KODU)
			ctx.response.cookie('GIRIS_KODU', GIRIS_KODU)
			ctx.session.put('OPERATOR', OPERATOR)
			ctx.response.cookie('OPERATOR', OPERATOR)
			return ctx.response.redirect().toPath(`/operator/${OPERATOR.GIRIS_KODU}`)
		}
		let ERROR = 'Lütfen parolanızı ve kullanıcı tipini tekrar kontrol ediniz.'
		//console.log("Error: Credentials doesn't match")
		//ctx.session.put('Error', ERROR)
		return ctx.response.redirect().toPath('/login')
	}
	//ACCOUNT
	else if (ACCOUNT_TYPE === 'abone') {
		console.log('Account type is: ', ACCOUNT_TYPE)
		let MUSTERI = new Musteri(GIRIS_KODU, PAROLA)
		let isAuthorized = await MUSTERI.authorize()
		if (isAuthorized) {
			ctx.session.put('PAROLA', PAROLA)
			ctx.response.cookie('PAROLA', PAROLA)
			ctx.session.put('ACCOUNT_TYPE', ACCOUNT_TYPE)
			ctx.response.cookie('ACCOUNT_TYPE', ACCOUNT_TYPE)
			ctx.session.put('GIRIS_KODU', GIRIS_KODU)
			ctx.response.cookie('GIRIS_KODU', GIRIS_KODU)
			ctx.session.put('MUSTERI', MUSTERI)
			ctx.response.cookie('MUSTERI', MUSTERI)

			console.log('Account is authnticated. Redirecting to: ', `/company/${GIRIS_KODU}`)
			return ctx.response.redirect().toPath(`/company/${GIRIS_KODU}/1`)
		}
		return ctx.response.redirect().toPath('/login')
	}
	let ERROR = 'Başarısız. Lütfen kullanıcı tipini tekrar kontrol ediniz.'
	//console.log('accountType neither abone nor bayi')
	return ctx.response.redirect().toPath('/login')
})

/* LOGIN */
Route.get('/logout', async ctx => {
	let { request, response, session, view } = ctx
	session.put(COOKIE_NAME, {})
	session.forget('PAROLA')
	session.forget('GIRIS_KODU')
	session.forget('ACCOUNT_TYPE')
	session.forget('MUSTERI')
	session.forget('OPERATOR')

	return response.redirect().toPath('/')
})
Route.get('/', async ({ request, response, session, view }) => {
	let sessionValue = session.get(COOKIE_NAME, {})
	//return view.render('index', sessionValue)
	return view.render('welcome', sessionValue)
})
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/
//import assert from 'assert'

// LOGIN (POST)

/*
// ABONE/Müşteri
Route.get('/account/:F_KODU/:PAGE?', async ({ params, request, response, view, session }) => {
	let cookieValue = request.cookie(COOKIE_NAME)
	const sessionValue = session.get(COOKIE_NAME, {})

	const URL_PARAMS = params.F_KODU
	const PAGE = params.PAGE || 1
	//console.log('params page:', PAGE)
	//console.log('account route params: route params:', URL_PARAMS, 'sessionValue:', sessionValue)
	// IF NOT AUTHORIZED
	if (!sessionValue.auth) {
		session.put(COOKIE_NAME, { ...sessionValue, error: 'Lütfen giriş yapınız.' })
		return response.redirect().toPath('/login')
	}
	// IF ACCOUNT IS BAYİ
	if (sessionValue.accountType === 'bayi') {
		const allowedFirmaCodes = sessionValue.MUSTERILER.map(m => m.F_KODU)
		//console.log('allowed firma codes', allowedFirmaCodes)
		// IF NOT CURRENT URL IS BAYI'S MUSTERI
		if (!allowedFirmaCodes.includes(URL_PARAMS)) {
			return response.redirect().toPath('/dashboard')
		}
		// IF CURRENT URL IS BAYI'S MUSTERI
		if (allowedFirmaCodes.includes(URL_PARAMS)) {
			const MESAJLAR = await new PrismaController().queryMesajlarByMuster(URL_PARAMS, PAGE)
			const CURRENT_MUSTERI = sessionValue.MUSTERILER.filter(m => m.F_KODU === URL_PARAMS)[0]
			const updatedSessionValue = {
				...sessionValue,
				F_KODU: CURRENT_MUSTERI.F_KODU,
				FIRMA_ADI: CURRENT_MUSTERI.FIRMA_ADI,
				PAGE,
				MESAJLAR
			}
			//console.log('updated session values: ', updatedSessionValue)
			return view.render('account', updatedSessionValue)
		}
	}

	// IF ACCOUNT IS MUSTERI/ABONE
	if (sessionValue.accountType === 'abone') {
		// IF URL IS NOT CURRENT USER'S ACCOUNT PAGE
		if (sessionValue.F_KODU !== URL_PARAMS) {
			return response.redirect().toPath(`/accounts/${sessionValue.F_KODU}`)
		}
		if (sessionValue.F_KODU === URL_PARAMS) {
			const MESAJLAR = await new PrismaController().queryMesajlarByMuster(URL_PARAMS, PAGE)
			const updatedSessionValue = { ...sessionValue, PAGE, MESAJLAR }
			//console.log('updated session values: ', updatedSessionValue)
			return view.render('account', updatedSessionValue)
		}
	}

	// AUTHORIZED
	else if (sessionValue.auth) {
		return view.render('dashboard', sessionValue)
	}
	return `Viewing post with id ${params.F_KODU}`
})


// LOGOUT
Route.get('/logout', async ctx => {
	let { request, response, session, view } = ctx
	const sessionValue = ctx.session.put(COOKIE_NAME, {})
	const cookieValue = ctx.response.cookie(COOKIE_NAME, {})
	return response.redirect().toPath('/')
})

Route.get('/', async ({ request, response, session, view }) => {
	const sessionValue = session.get(COOKIE_NAME, {})
	//console.log('landing page server session', sessionValue)
	//return view.render('index', sessionValue)
	return view.render('app')
})

// ABONE/Müşteri //
Route.get('/resources/:TYPE/:ID/:OPTION/:PAGE?', async ctx => {
	const { params, request, response, view, session } = ctx
	const sessionValue = session.get(COOKIE_NAME, {})

	// IF NOT AUTHORIZED
	if (!sessionValue.AUTH) {
		session.put(COOKIE_NAME, { ...sessionValue, error: 'Lütfen giriş yapınız.' })
		return {
			error: 'Not authorized'
		}
	}
	// IF TARGET RESOURCE IS ABONE RESOURCE
	if (params.TYPE === ('abone' || 'account')) {
		const TARGET_FIRMA_KODU = params.ID
		const OPTION = params.OPTION
		const PAGE = params.PAGE || 1

		// IF ACCOUNT IS BAYİ
		if (sessionValue.TYPE === 'bayi') {
			// Check if querying account number is in BAYI's MUSTERI_FIRMA_CODES
			let hasBayiPermissionToView = sessionValue.MUSTERI_FIRMA_CODES.includes(
				TARGET_FIRMA_KODU
			)
			// NO PERMISSION
			if (!hasBayiPermissionToView) {
				console.log('Bayi has no permission to view target account: ', TARGET_FIRMA_KODU)
				return response.redirect().toPath(`/operator/${sessionValue.GIRIS_KODU}`)
			} // HAVE PERMISSION
			else if (hasBayiPermissionToView) {
				console.log('Starting to query mesajlar of FIRMA_KODU: ', TARGET_FIRMA_KODU)
				const mesajlar = await new PrismaController().queryMesajlar({ FIRMA_KODU, PAGE })
				console.log('The query response: ', mesajlar)
				return {
					data: mesajlar,
					error: null
				}
			}
		}
		// IF ACCOUNT IS ABONE
		if (sessionValue.TYPE === ('abone' || 'account')) {
			console.log(
				'Abone Mesajlar requested for ',
				TARGET_FIRMA_KODU,
				sessionValue.GIRIS_KODU,
				sessionValue.TYPE
			)
			// IF NOT CORRECT ABONE
			if (sessionValue.GIRIS_KODU !== TARGET_FIRMA_KODU) {
				return response.redirect().toPath(`/`)
			}
			// IF CORRECT ABONE
			else if (sessionValue.GIRIS_KODU === TARGET_FIRMA_KODU) {
				const mesajlar = await new PrismaController().queryMesajlar(params)
				console.log('Requested mesajlar arrived: ', mesajlar)
				return {
					data: mesajlar,
					error: null
				}
			}
		}
	}
})

*/
