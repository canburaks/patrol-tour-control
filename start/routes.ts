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
import Application from '@ioc:Adonis/Core/Application'
import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import PrismaController from '../app/Controllers/Http/PrismaController'

const COOKIE_NAME = Application.config.get('session.cookieName')

Route.get('/', async ({ request, response, session, view }) => {
	return view.render('index')
})

Route.get('/dashboard', async ({ request, response, view, session }) => {
	let cookieValue = request.cookie(COOKIE_NAME)
	const sessionValue = session.get(COOKIE_NAME, {})
	console.log('Dashboard route session value: ', sessionValue)

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
	let { request, auth, response, session, view } = ctx
	const sessionValue = session.get(COOKIE_NAME, {})
	console.log('Login route session value: ', sessionValue)
	return view.render('auth/login', { error: sessionValue.error && sessionValue.error })
})

Route.post('/login', async ctx => {
	if (ctx.request.input('accountType') === 'bayi') {
		return new PrismaController().authBayi(ctx)
	} else if (ctx.request.input('accountType') === 'abone') {
		return new PrismaController().authAbone(ctx)
	}
	console.log('accountType neither abone nor bayi')
	return ctx.view.render('auth/login')
})

/* LOGIN */
Route.get('/logout', async ctx => {
	let { request, auth, response, session, view } = ctx
	const sessionValue = session.put(COOKIE_NAME, {})
	return response.redirect().toPath('/')
})
