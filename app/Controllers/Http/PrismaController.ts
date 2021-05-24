import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient } from '@prisma/client'
import Application from '@ioc:Adonis/Core/Application'

const COOKIE_NAME = Application.config.get('session.cookieName')
const prisma = new PrismaClient()

export default class PrismaController {
	public async index(ctx: HttpContextContract) {}

	public async fresh(ctx: HttpContextContract) {
		const COOKIE_NAME = Application.config.get('session.cookieName')

		const newuser = {
			userId: null,
			password: null,
			accountType: null,
		}

		ctx.response.cookie(COOKIE_NAME, newuser)
		console.log('cookie', ctx.request.cookie(COOKIE_NAME))
		return ctx.view.render('auth/login')
	}

	public async authBayi({ request, response, view, session }: HttpContextContract) {
		const accountId = request.input('accountId')
		const password = request.input('password')
		const accountType = request.input('accountType')

		const formData = {
			// Database'de aboneler F_KODU ile, bayiler OP_KODU ile giriş yapıyor.
			OP_KODU: accountId,
			MPAROLA: password,
		}
		console.log('bayi formData: ', formData)

		// QUERY
		const operatorData = await new PrismaController().queryOperators(
			formData.OP_KODU,
			formData.MPAROLA
		)
		console.log('query result: ', operatorData)
		// FAIL
		if (!operatorData) {
			return view.render('auth/login', {
				error: 'Kullanıcı adınız ya da parolanız yanlış.',
				accountId,
				accountType,
			})
		}

		// QUERY BAYILER
		const bayilerData = await new PrismaController().queryBayiler(formData.OP_KODU)
		// SUCCESS
		const NAME = operatorData.OP_ADI
			? operatorData.OP_ADI
			: bayilerData.ADI
			? bayilerData.ADI
			: null

		const authorizedOperatorData = {
			auth: true,
			data: new Date(),
			accountType: 'bayi',
			NAME: NAME,
			ADI: bayilerData?.ADI,
			KODU: bayilerData?.KODU,
			...operatorData,
		}
		const sessionValue = session.put(COOKIE_NAME, authorizedOperatorData)
		//console.log('sessionValue', sessionValue)
		response.cookie(COOKIE_NAME, authorizedOperatorData)
		return response.redirect().toPath('/dashboard')
	}

	public async authAbone({ request, response, view, session }: HttpContextContract) {
		const accountId = request.input('accountId')
		const password = request.input('password')
		const accountType = request.input('accountType')

		const formData = {
			// Database'de aboneler F_KODU ile, bayiler OP_KODU ile giriş yapıyor.
			F_KODU: accountId,
			WEBPAROLA: password,
		}
		console.log('abone formData: ', formData)

		// QUERY
		const musteriData = await new PrismaController().queryMusteri(
			formData.F_KODU,
			formData.WEBPAROLA
		)
		console.log('musteri query result: ', musteriData)
		// FAIL
		if (!musteriData) {
			return view.render('auth/login', {
				error: 'Kullanıcı adınız ya da parolanız yanlış.',
				accountId,
				accountType,
			})
		}

		// QUERY BAYILER
		// SUCCESS
		const NAME = musteriData.FIRMA_ADI ? musteriData.FIRMA_ADI : null
		const authorizedMusteriData = {
			auth: true,
			data: new Date(),
			accountType: accountType,
			NAME: NAME,
			...musteriData,
		}
		const sessionValue = session.put(COOKIE_NAME, authorizedMusteriData)
		//console.log('sessionValue', sessionValue)
		response.cookie(COOKIE_NAME, authorizedMusteriData)
		return response.redirect().toPath('/dashboard')
	}

	public async dashboard({ request, response, view, session }: HttpContextContract) {
		const sessionValue = session.get(COOKIE_NAME)
	}

	public async edit({}: HttpContextContract) {}

	public async update({}: HttpContextContract) {}

	public async destroy({}: HttpContextContract) {}

	public async queryOperators(OP_KODU, MPAROLA) {
		return await prisma.operators.findFirst({
			where: {
				OP_KODU: OP_KODU,
				MPAROLA: MPAROLA,
			},
			select: {
				ID: true,
				OP_KODU: true,
				OP_ADI: true,
				BAYIID: true,
				MPAROLA: true,
				TIP: true,
			},
		})
	}
	public async queryBayiler(OP_KODU) {
		return await prisma.bayiler.findFirst({
			where: {
				KODU: OP_KODU,
			},
			select: {
				ID: true,
				ADI: true,
				KODU: true,
			},
		})
	}
	public async queryMusteri(F_KODU, WEBPAROLA) {
		return await prisma.musteri.findFirst({
			where: {
				F_KODU: F_KODU,
				WEBPAROLA: WEBPAROLA,
			},
			select: {
				ID: true,
				F_KODU: true,
				FIRMA_ADI: true,
				WEBPAROLA: true,
				BAYI: true,
			},
		})
	}
	public async disconnect(outerFunction) {
		outerFunction()
			.catch(e => {
				throw e
			})
			.finally(async () => await prisma.$disconnect())
	}

	// eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
	hasCredentials(request) {
		const existingUser = request.cookie('user', [])
		if (existingUser.username && existingUser.password) {
			return true
		}
		return false
	}
}
