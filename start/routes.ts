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
import Bayi from '../app/Models/Bayi'
import Musteri from '../app/Models/Musteri'

const COOKIE_NAME = Application.config.get('session.cookieName')

Route.get('/login', async ({ response, session, request, view }) => {
	return response.redirect().toPath('/')
})

Route.post('/login', async ctx => {
	const GIRIS_KODU = ctx.request.input('username')
	const PAROLA = ctx.request.input('password')
	const ACCOUNT_TYPE = ctx.request.input('accountType')

	if (ACCOUNT_TYPE === 'bayi') {
		const bayi = new Bayi(GIRIS_KODU, PAROLA)
		const isAuthorized = await bayi.authorize()
		if (isAuthorized) {
			console.log('Searching authorized bayi data')
			const bayiData = await bayi.getBayiData()
			const bayiMusteriler = await bayi.getMusteriler()
			ctx.response.cookie(COOKIE_NAME, bayi)
			ctx.session.put(COOKIE_NAME, bayi)
			return {
				...bayi,
				error: null
			}
		} else
			return {
				error: 'Lütfen giriş kodunuzu veya parolanızı kontrol ediniz.'
			}
	} else if (ACCOUNT_TYPE === 'abone') {
		const musteri = new Musteri(GIRIS_KODU, PAROLA)
		const isAuthorized = await musteri.authorize()
		if (isAuthorized) {
			console.log(`Searching the latest signals for müsteri with F_KODU:${GIRIS_KODU}`)
			await musteri.getLatestMessages()
			console.log('ctx musteri', musteri)
			ctx.session.put(COOKIE_NAME, {})
			ctx.response.cookie(COOKIE_NAME, musteri)
			ctx.session.put(COOKIE_NAME, musteri)
			return {
				...musteri,
				error: null
			}
		}
		return {
			error: 'Lütfen giriş kodunuzu veya parolanızı kontrol ediniz.'
		}
	}
	//console.log('accountType neither abone nor bayi')
	return ctx.view.render('app')
})

/* LOGOUT */
Route.get('/logout', async ctx => {
	let { request, response, session, view } = ctx
	const sessionValue = ctx.session.put(COOKIE_NAME, {})
	return response.redirect().toPath('/')
})

// TEST FORM
Route.get('/form', async ctx => {
	return ctx.view.render('emails/form')
})

// FORM ENDPOINT
Route.post('/form-endpoint', async ctx => {
	return new MailController().formHandler(ctx)
})

Route.get('/', async ({ request, response, session, view }) => {
	const sessionValue = session.get(COOKIE_NAME, {})
	//console.log('landing page server session', sessionValue)
	//return view.render('index', sessionValue)
	return view.render('app')
})

/* ABONE/Müşteri */
Route.get('/account/:F_KODU/:PAGE?', async ({ params, request, response, view, session }) => {
	let cookieValue = request.cookie(COOKIE_NAME)
	const sessionValue = session.get(COOKIE_NAME, {})

	const URL_PARAMS = params.F_KODU
	const PAGE = params.PAGE || 1
	//console.log('params page:', PAGE)
	//console.log('account route params: route params:', URL_PARAMS, 'sessionValue:', sessionValue)
	// IF NOT AUTHORIZED
	if (!sessionValue.AUTH) {
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
	else if (sessionValue.AUTH) {
		return view.render('dashboard', sessionValue)
	}
	return `Viewing post with id ${params.F_KODU}`
})

Route.get('*', async ({ request, response, session, view }) => {
	const sessionValue = session.get(COOKIE_NAME, {})
	const privateUrls = ['/dashboard', '/account', '/operator']

	//return view.render('index', sessionValue)
	return view.render('app')
})
