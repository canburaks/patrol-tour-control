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

// FORM ENDPOINT
Route.post('/form-endpoint', async ctx => {
	return new MailController().formHandler(ctx)
})

// TEST FORM
Route.get('/form', async ctx => {
	return ctx.view.render('emails/form')
})

/// APP ROUTING

// LOGIN (POST)
Route.post('/login', async ctx => {
	const GIRIS_KODU = ctx.request.input('username')
	const PAROLA = ctx.request.input('password')
	const ACCOUNT_TYPE = ctx.request.input('accountType')

	// OPERATOR
	if (ACCOUNT_TYPE === 'bayi') {
		const bayi = await new Bayi(GIRIS_KODU, PAROLA).init()
		if (bayi.AUTH) {
			console.log('Successfully logging...')
			ctx.response.cookie(COOKIE_NAME, bayi)
			ctx.session.put(COOKIE_NAME, bayi)
			return {
				data: bayi,
				error: null
			}
		}
		console.log("Error: Credentials doesn't match")
		return {
			error: 'Lütfen giriş kodunuzu veya parolanızı kontrol ediniz.'
		}
	} //ACCOUNT
	else if (ACCOUNT_TYPE === 'abone') {
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
				data: musteri,
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

/* ABONE/Müşteri */
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

function getMesajlar() {}

Route.get('*', async ({ request, response, session, view }) => {
	const sessionValue = session.get(COOKIE_NAME, {})
	const privateUrls = ['/dashboard', '/account', '/operator']

	//return view.render('index', sessionValue)
	return view.render('app')
})
