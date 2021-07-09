import PrismaController from '../Controllers/Http/PrismaController'
import Env from '@ioc:Adonis/Core/Env'
import assert from 'assert'

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
	public GIRIS_KODU: string
	public MESAJLAR = []
	public LATEST_MESAJLAR = []

	constructor(F_KODU, MPAROLA) {
		this.PAROLA = MPAROLA
		this.GIRIS_KODU = F_KODU
	}

	public async authorize() {
		const musteriData = await Musteri.prisma.queryMusteri(
			this.GIRIS_KODU.toString(),
			this.PAROLA
		)
		console.log('query from Musteri: ', musteriData)
		// IF PASSWORD IS CORRECT
		if (musteriData) {
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
	public async getMessagesbyPage(page: number) {
		const mesajData = await Musteri.prisma.queryMesajlarByMuster(this.FIRMA_KODU, page)
		assert(
			mesajData,
			`Mesaj/sinyal data for FIRMA_KODU:${this.FIRMA_KODU}--PAGE:${page} is null/undefined`
		)
		assert(
			mesajData.length > 0,
			`There are no mesaj/sinyal for FIRMA_KODU:${this.FIRMA_KODU}--PAGE:${page}`
		)
		this.MESAJLAR = mesajData
		return true
	}
}
