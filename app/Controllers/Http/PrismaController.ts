/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient } from '../../../prisma/client'
import Application from '@ioc:Adonis/Core/Application'
import Bayi from '../../Models/Bayi'
import Musteri from '../../Models/Musteri'
import { DateTime } from 'luxon'

const COOKIE_NAME = Application.config.get('session.cookieName')
export const prisma = new PrismaClient()

export default class PrismaController {
	constructor() {
		PrismaController.client = prisma
	}
	public static client

	public static BATCH_SIZE = 25

	public async index(ctx: HttpContextContract) {}

	public async authBayi({ request, response, view, session }: HttpContextContract) {
		const accountId = request.input('accountId')
		const password = request.input('password')
		const accountType = request.input('accountType')

		const formData = {
			// Database'de aboneler F_KODU ile, bayiler OP_KODU ile giriş yapıyor.
			OP_KODU: accountId,
			MPAROLA: password
		}
		console.log('bayi formData: ', formData)

		// QUERY
		const operatorData = await this.queryOperators(formData.OP_KODU, formData.MPAROLA)
		console.log('query result: ', operatorData)
		// FAIL
		if (!operatorData) {
			return view.render('auth/login', {
				error: 'Kullanıcı adınız ya da parolanız yanlış.',
				accountId,
				accountType
			})
		}

		// QUERY BAYILER
		const bayilerData = await this.queryBayiler(formData.OP_KODU)
		// SUCCESS
		const NAME = operatorData.OP_ADI
			? operatorData.OP_ADI
			: bayilerData?.ADI
			? bayilerData?.ADI
			: null

		const authorizedOperatorData = {
			auth: true,
			data: new Date(),
			accountType: 'bayi',
			NAME: NAME,
			ADI: bayilerData?.ADI,
			KODU: bayilerData?.KODU,
			BAYI: bayilerData?.ID,
			...operatorData
		}
		console.log('authorizedOperatorData: ', authorizedOperatorData)
		const sessionValue = session.put(COOKIE_NAME, authorizedOperatorData)

		// Query Bayi Musterileri
		const bayiMusterileri = await this.queryMusteriByBayi(parseInt(authorizedOperatorData.BAYI))
		authorizedOperatorData.MUSTERILER = bayiMusterileri

		console.log('query musteriByBayi: ', '\n\n', bayiMusterileri)
		//console.log('sessionValue', sessionValue)
		response.cookie(COOKIE_NAME, authorizedOperatorData)
		return response.redirect().toPath('/dashboard')
	}

	public async authMusteri({ request, response, view, session }: HttpContextContract) {
		const accountId = request.input('accountId')
		const password = request.input('password')
		const accountType = request.input('accountType')

		const formData = {
			// Database'de aboneler F_KODU ile, bayiler OP_KODU ile giriş yapıyor.
			F_KODU: accountId,
			WEBPAROLA: password
		}
		console.log('abone formData: ', formData)

		// QUERY
		const musteriData = await this.queryMusteri(formData.F_KODU, formData.WEBPAROLA)
		console.log('musteri query result: ', musteriData)
		// FAIL
		if (!musteriData) {
			return view.render('auth/login', {
				error: 'Kullanıcı adınız ya da parolanız yanlış.',
				accountId,
				accountType
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
			...musteriData
		}
		const sessionValue = session.put(COOKIE_NAME, authorizedMusteriData)
		//console.log('sessionValue', sessionValue)
		response.cookie(COOKIE_NAME, authorizedMusteriData)
		return response.redirect().toPath(`/account/${authorizedMusteriData.F_KODU}`)
	}

	public async dashboard({ request, response, view, session }: HttpContextContract) {
		const sessionValue = session.get(COOKIE_NAME)

		return view.render('dashboard', sessionValue)
	}

	static addDateFiltering({ START, END }) {
		if (START && END) {
			return {
				AND: [
					{
						TARIH: { lte: END }
					},
					{
						TARIH: { gte: START }
					}
				]
			}
		}
		if (!START && END) {
			return { TARIH: { lte: END } }
		}
		if (!START && !END) {
			return { TARIH: { lte: new Date() } }
		}
	}

	public async queryMesajlar(params) {
		const F_KODU = params.F_KODU || params.FIRMA_KODU
		const PAGE = params.PAGE || 1
		//const START = params.START || null
		//const END = params.END || new Date()
		const SKIP = (PAGE - 1) * PrismaController.BATCH_SIZE

		// Date arrangement
		//const DATE_FILTER = PrismaController.addDateFiltering({ START, END })
		// Filtering
		const FILTER = {
			F_KODU: F_KODU,
			OR: [{ ALARMKODU: 'E120' }, { ALARMKODU: 'E130' }]
			//...DATE_FILTER
		}

		return await PrismaController.client.mesajlar.findMany({
			where: FILTER,
			select: {
				ALARMKODU: true,
				BOLGE: true,
				KULLANICI: true,
				MESAJTIPI: true,
				MESAJ: true,
				TARIH: true
			},
			orderBy: { TARIH: 'desc' },
			take: PrismaController.BATCH_SIZE,
			skip: SKIP
		})
	}

	public async queryLatestMessageByMuster(F_KODU: string) {
		return await PrismaController.client.mesajlar.findMany({
			where: {
				F_KODU: F_KODU,
				OR: [{ ALARMKODU: 'E120' }, { ALARMKODU: 'E130' }]
			},
			select: {
				ALARMKODU: true,
				BOLGE: true,
				KULLANICI: true,
				MESAJTIPI: true,
				MESAJ: true,
				TARIH: true
			},
			orderBy: { TARIH: 'desc' },
			take: 5
		})
	}
	public async queryOperators(OP_KODU, MPAROLA) {
		return await PrismaController.client.operators.findFirst({
			where: {
				OP_KODU: OP_KODU,
				MPAROLA: MPAROLA
			},
			select: {
				ID: true,
				OP_KODU: true,
				OP_ADI: true,
				BAYIID: true,
				MPAROLA: true,
				TIP: true
			}
		})
	}
	public async queryBayiler(OP_KODU) {
		return await PrismaController.client.bayiler.findFirst({
			where: {
				KODU: OP_KODU
			},
			select: {
				ID: true,
				ADI: true,
				KODU: true
			}
		})
	}
	public async queryMusteri(F_KODU, WEBPAROLA) {
		return await PrismaController.client.musteri.findFirst({
			where: {
				F_KODU: F_KODU,
				WEBPAROLA: WEBPAROLA
			},
			select: {
				ID: true,
				F_KODU: true,
				FIRMA_ADI: true,
				WEBPAROLA: true,
				BAYI: true
			}
		})
	}
	public async queryMusteriWithoutPassword(F_KODU) {
		return await PrismaController.client.musteri.findFirst({
			where: {
				F_KODU: F_KODU
			},
			select: {
				ID: true,
				F_KODU: true,
				FIRMA_ADI: true,
				BAYI: true
			}
		})
	}
	public async queryMusteriByBayi(BAYI: number) {
		return await PrismaController.client.musteri.findMany({
			where: {
				BAYI
			},
			select: {
				ID: true,
				F_KODU: true,
				FIRMA_ADI: true,
				BAYI: true
			}
		})
	}

	public async disconnect(outerFunction) {
		outerFunction()
			.catch(e => {
				throw e
			})
			.finally(async () => await PrismaController.client.$disconnect())
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

/*
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PrismaClient } from '../../../prisma/client'
import Application from '@ioc:Adonis/Core/Application'

const COOKIE_NAME = Application.config.get('session.cookieName')
export const prisma = new PrismaClient()

export default class PrismaController {
	constructor() {
		PrismaController.client = prisma
	}
	public static client

	public async index(ctx: HttpContextContract) {}

	public async authBayi({ request, response, view, session }: HttpContextContract) {
		const accountId = request.input('accountId')
		const password = request.input('password')
		const accountType = request.input('accountType')

		const formData = {
			// Database'de aboneler F_KODU ile, bayiler OP_KODU ile giriş yapıyor.
			OP_KODU: accountId,
			MPAROLA: password
		}
		console.log('bayi formData: ', formData)

		// QUERY
		const operatorData = await this.queryOperators(formData.OP_KODU, formData.MPAROLA)
		console.log('query result: ', operatorData)
		// FAIL
		if (!operatorData) {
			return view.render('auth/login', {
				error: 'Kullanıcı adınız ya da parolanız yanlış.',
				accountId,
				accountType
			})
		}

		// QUERY BAYILER
		const bayilerData = await this.queryBayiler(formData.OP_KODU)
		// SUCCESS
		const NAME = operatorData.OP_ADI
			? operatorData.OP_ADI
			: bayilerData?.ADI
			? bayilerData?.ADI
			: null

		const authorizedOperatorData = {
			auth: true,
			data: new Date(),
			accountType: 'bayi',
			NAME: NAME,
			ADI: bayilerData?.ADI,
			KODU: bayilerData?.KODU,
			BAYI: bayilerData?.ID,
			...operatorData
		}
		console.log('authorizedOperatorData: ', authorizedOperatorData)
		const sessionValue = session.put(COOKIE_NAME, authorizedOperatorData)

		// Query Bayi Musterileri
		const bayiMusterileri = await this.queryMusteriByBayi(parseInt(authorizedOperatorData.BAYI))
		authorizedOperatorData.MUSTERILER = bayiMusterileri

		console.log('query musteriByBayi: ', '\n\n', bayiMusterileri)
		//console.log('sessionValue', sessionValue)
		response.cookie(COOKIE_NAME, authorizedOperatorData)
		return response.redirect().toPath('/dashboard')
	}

	public async authMusteri({ request, response, view, session }: HttpContextContract) {
		const accountId = request.input('accountId')
		const password = request.input('password')
		const accountType = request.input('accountType')

		const formData = {
			// Database'de aboneler F_KODU ile, bayiler OP_KODU ile giriş yapıyor.
			F_KODU: accountId,
			WEBPAROLA: password
		}
		console.log('abone formData: ', formData)

		// QUERY
		const musteriData = await this.queryMusteri(formData.F_KODU, formData.WEBPAROLA)
		console.log('musteri query result: ', musteriData)
		// FAIL
		if (!musteriData) {
			return view.render('auth/login', {
				error: 'Kullanıcı adınız ya da parolanız yanlış.',
				accountId,
				accountType
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
			...musteriData
		}
		const sessionValue = session.put(COOKIE_NAME, authorizedMusteriData)
		//console.log('sessionValue', sessionValue)
		response.cookie(COOKIE_NAME, authorizedMusteriData)
		return response.redirect().toPath(`/account/${authorizedMusteriData.F_KODU}`)
	}

	public async dashboard({ request, response, view, session }: HttpContextContract) {
		const sessionValue = session.get(COOKIE_NAME)

		return view.render('dashboard', sessionValue)
	}

	public async queryMesajlarByMuster(F_KODU: string, PAGE: number) {
		const TAKE = 100
		const SKIP = (PAGE - 1) * TAKE

		return await PrismaController.client.mesajlar.findMany({
			where: {
				F_KODU: F_KODU,
				OR: [{ ALARMKODU: 'E120' }, { ALARMKODU: 'E130' }]
			},
			select: {
				ALARMKODU: true,
				BOLGE: true,
				KULLANICI: true,
				MESAJTIPI: true,
				MESAJ: true,
				TARIH: true
			},
			orderBy: { TARIH: 'desc' },
			take: TAKE,
			skip: SKIP
		})
	}

	public async queryOperators(OP_KODU, MPAROLA) {
		return await PrismaController.client.operators.findFirst({
			where: {
				OP_KODU: OP_KODU,
				MPAROLA: MPAROLA
			},
			select: {
				ID: true,
				OP_KODU: true,
				OP_ADI: true,
				BAYIID: true,
				MPAROLA: true,
				TIP: true
			}
		})
	}
	public async queryBayiler(OP_KODU) {
		return await PrismaController.client.bayiler.findFirst({
			where: {
				KODU: OP_KODU
			},
			select: {
				ID: true,
				ADI: true,
				KODU: true
			}
		})
	}
	public async queryMusteri(F_KODU, WEBPAROLA) {
		return await PrismaController.client.musteri.findFirst({
			where: {
				F_KODU: F_KODU,
				WEBPAROLA: WEBPAROLA
			},
			select: {
				ID: true,
				F_KODU: true,
				FIRMA_ADI: true,
				WEBPAROLA: true,
				BAYI: true
			}
		})
	}
	public async queryMusteriByBayi(BAYI: number) {
		return await PrismaController.client.musteri.findMany({
			where: {
				BAYI
			},
			select: {
				ID: true,
				F_KODU: true,
				FIRMA_ADI: true,
				BAYI: true
			}
		})
	}

	public async disconnect(outerFunction) {
		outerFunction()
			.catch(e => {
				throw e
			})
			.finally(async () => await PrismaController.client.$disconnect())
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
*/
