import PrismaController, { prisma } from '../Controllers/Http/PrismaController'
import Env from '@ioc:Adonis/Core/Env'
import assert from 'assert'
import { DateTime } from 'luxon'

export default class Musteri {
	public static prisma = new PrismaController()
	public TYPE = 'abone'
	public AUTH: boolean = false
	public PAROLA: string
	public ID: number
	public FIRMA_KODU: string
	public FIRMA_ADI: string
	public BAYI_ID: number // table BAYI
	public NAME: string
	public GIRIS_KODU
	public MESAJLAR = {}
	public LATEST_MESAJLAR = []

	constructor(F_KODU, MPAROLA: any) {
		this.PAROLA = MPAROLA
		this.GIRIS_KODU = F_KODU
	}

	public async authorize() {
		const musteriData = await Musteri.prisma.queryMusteri(this.GIRIS_KODU, this.PAROLA)
		// IF PASSWORD IS CORRECT
		if (musteriData) {
			//console.log('Musteri/Company is authenticated', musteriData)
			this.AUTH = true
			this.ID = musteriData.ID
			this.NAME = musteriData.FIRMA_ADI
			this.FIRMA_ADI = musteriData.FIRMA_ADI
			this.BAYI_ID = musteriData.BAYI
			return true
		}
		return false
	}
	public async getLatestMessages() {
		const mesajData = await Musteri.prisma.queryLatestMessageByMuster(this.FIRMA_KODU)
		assert(mesajData, `Latest mesajData for FIRMA_KODU:${this.FIRMA_KODU} is null/undefined`)
		assert(
			mesajData.length > 0,
			`There are no latest mesajData for FIRMA_KODU:${this.FIRMA_KODU}`
		)
		this.LATEST_MESAJLAR = mesajData
		return true
	}
	public async getMessagesbyPage(params) {
		const mesajData = await Musteri.prisma.queryMesajlar(params)
		//console.log('mesajdata', mesajData)
		assert(
			mesajData,
			`Mesaj/sinyal data for FIRMA_KODU:${this.FIRMA_KODU}--PAGE:${params.PAGE} is null/undefined`
		)
		assert(
			mesajData.length > 0,
			`There are no mesaj/sinyal for FIRMA_KODU:${this.FIRMA_KODU}--PAGE:${params.PAGE}`
		)
		this.MESAJLAR[params.PAGE] = mesajData
		return mesajData
	}
	public async getMessagesbyDate(params) {
		this.authorize()
		let now
		let today
		let tomorrow
		let START
		let END
		if (params.DATE.length === 8) {
			today = DateTime.fromObject({
				hour: 0,
				day: params.DATE.slice(0, 2),
				month: params.DATE.slice(2, 4),
				year: params.DATE.slice(4, 8)
			})
			tomorrow = today.plus({ days: 1 })
			START = today.toSQLDate()
			END = tomorrow.toSQLDate()
		}
		if (!params.DATE || params.DATE.length !== 8) {
			now = DateTime.now()
			today = DateTime.fromObject({
				hour: 0,
				day: now.day,
				month: now.month,
				year: now.year
			})
			tomorrow = today.plus({ days: 1 })
			START = today.toSQLDate()
			END = tomorrow.toSQLDate()
		}
		const raw = `SELECT ALARMKODU, BOLGE, KULLANICI, MESAJTIPI, MESAJ, TARIH FROM mesajlar WHERE  ALARMKODU="E120" AND F_KODU = "${this.GIRIS_KODU}" AND TARIH BETWEEN "${START}" AND "${END} LIMIT = 5";`
		//console.log('raw', raw)
		//console.log('START END', START, END)
		let rawMesajData = await prisma.$queryRaw(raw)
		let mesajData = rawMesajData.map(r => ({
			...r,
			HOUR: new Date(r.TARIH).toLocaleString('tr-TR', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			}),
			DATE: new Date(r.TARIH).toLocaleString('tr-TR', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: '2-digit'
			})
		}))
		//.slice(0, 3)

		//const mesajData = await prisma.$queryRaw`SELECT * FROM mesajlar WHERE F_KODU = 4132 AND TARIH BETWEEN "2021-06-29" AND "2021-06-30"  LIMIT 5;`
		this.MESAJLAR[START] = mesajData
		console.log('mesajdata', mesajData)
		console.log('mesajlar', this.MESAJLAR)

		//console.log(
		//	'raw: ',
		//	`SELECT BOLGE, MESAJ, TARIH FROM mesajlar WHERE F_KODU = "${this.GIRIS_KODU}" AND TARIH BETWEEN "${START}" "${END}";`
		//)
		return mesajData
	}
	public generateRawQuery(F_KODU, START, END) {
		const SELECT = 'SELECT BOLGE, MESAJ, TARIH FROM mesajlar '
		const WHERE = `WHERE F_KODU = ${F_KODU} AND TARIH BETWEEN "${START}" "${END}";`
		return SELECT + WHERE
	}
}
