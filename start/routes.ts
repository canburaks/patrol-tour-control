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
import assert from 'assert'
import Application from '@ioc:Adonis/Core/Application'
import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import PrismaController from '../app/Controllers/Http/PrismaController'
import MailController from '../app/Controllers/Http/MailController'
import View from '@ioc:Adonis/Core/View'

const COOKIE_NAME = Application.config.get('session.cookieName')

Route.get('/', async ({ request, response, session, view }) => {
	const sessionValue = session.get(COOKIE_NAME, {})
	return view.render('index', sessionValue)
})

/* ABONE/Müşteri */
Route.get('/account/:F_KODU/:PAGE?', async ({ params, request, response, view, session }) => {
	let cookieValue = request.cookie(COOKIE_NAME)
	const sessionValue = session.get(COOKIE_NAME, {})

	const URL_PARAMS = params.F_KODU
	const PAGE = params.PAGE || 1
	console.log('params page:', PAGE)
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
			const MESAJLAR = await new PrismaController().queryMesajlarByMuster(URL_PARAMS)
			const CURRENT_MUSTERI = sessionValue.MUSTERILER.filter(m => m.F_KODU === URL_PARAMS)[0]
			const updatedSessionValue = {
				...sessionValue,
				F_KODU: CURRENT_MUSTERI.F_KODU,
				FIRMA_ADI: CURRENT_MUSTERI.FIRMA_ADI,
				PAGE,
				MESAJLAR
			}
			console.log('updated session values: ', updatedSessionValue)
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
			const MESAJLAR = await new PrismaController().queryMesajlarByMuster(URL_PARAMS)
			const updatedSessionValue = { ...sessionValue, PAGE, MESAJLAR }
			console.log('updated session values: ', updatedSessionValue)
			return view.render('account', updatedSessionValue)
		}
	}

	// AUTHORIZED
	else if (sessionValue.auth) {
		return view.render('dashboard', sessionValue)
	}
	return `Viewing post with id ${params.F_KODU}`
})

/* BAYİ */
Route.get('/dashboard', async ({ request, response, view, session }) => {
	let cookieValue = request.cookie(COOKIE_NAME)
	const sessionValue = session.get(COOKIE_NAME, {})

	// NOT AUTHORIZED
	if (!sessionValue.auth) {
		session.put(COOKIE_NAME, { ...sessionValue, error: 'Tekrar giriş yapmanız gerekli' })
		return response.redirect().toPath('/login')
	}
	// AUTHORIZED
	else if (sessionValue.auth) {
		return view.render('dashboard', sessionValue)
	}
})

/* LOGIN */
Route.get('/login', async ctx => {
	let { request, response, session, view } = ctx
	const sessionValue = session.get(COOKIE_NAME, {})
	if (sessionValue.auth) {
		return response.redirect().toPath('/dashboard')
	}
	//console.log('Login route session value: ', sessionValue)
	return view.render('auth/login', { error: sessionValue.error && sessionValue.error })
})

Route.post('/login', async ctx => {
	if (ctx.request.input('accountType') === 'bayi') {
		return new PrismaController().authBayi(ctx)
	} else if (ctx.request.input('accountType') === 'abone') {
		return new PrismaController().authMusteri(ctx)
	}
	console.log('accountType neither abone nor bayi')
	return ctx.view.render('auth/login')
})

/* LOGIN */
Route.get('/logout', async ctx => {
	let { request, response, session, view } = ctx
	const sessionValue = session.put(COOKIE_NAME, {})
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
