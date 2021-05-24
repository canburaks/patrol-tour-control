import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'

export default class Auth {
	public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
		const cookie = request.cookie(Application.config.get('session.cookieName'))
		console.log('auth middleware', cookie)
		if (!cookie || !cookie.accountId) {
			response.unauthorized({ error: 'Must be logged in' })
			return
		}

		await next()
	}
}
