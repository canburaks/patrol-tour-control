import PrismaController from '../Controllers/Http/PrismaController'
import Env from '@ioc:Adonis/Core/Env'

export default class Musteri {
	public static prisma = new PrismaController()
	public TYPE = 'abone'
	public AUTH = false
	public PAROLA
	public ID
	public FIRMA_KODU
	public FIRMA_ADI
	public BAYI_ID
	public NAME
	public GIRIS_KODU

	constructor(F_KODU, MPAROLA) {
		this.PAROLA = MPAROLA
		this.GIRIS_KODU = F_KODU
	}

	public async authorize() {
		const musteriData = await Musteri.prisma.queryMusteri(this.GIRIS_KODU, this.PAROLA)
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

}