import PrismaController from '../Controllers/Http/PrismaController'
import Env from '@ioc:Adonis/Core/Env'

export default class Bayi {
	public static prisma = new PrismaController()
	public TYPE = 'bayi'
	public AUTH = false
	public PAROLA
	public ID
	public BAYI_ADI
	public BAYI_ID
	public NAME
	public GIRIS_KODU
	public MUSTERILER = []

	constructor(OP_KODU, MPAROLA) {
		this.PAROLA = MPAROLA
		this.GIRIS_KODU = OP_KODU
	}

	public async authorize() {
		const operatorData = await Bayi.prisma.queryOperators(this.GIRIS_KODU, this.PAROLA)
		console.log('query from bayi: ', operatorData)
		// IF PASSWORD IS CORRECT
		if (operatorData) {
			this.AUTH = true
			this.ID = operatorData?.ID
			this.BAYI_ID = operatorData?.BAYIID
			return true
		}
		return false
	}

	public async getBayiData(){
		const bayilerData = await Bayi.prisma.queryBayiler(this.GIRIS_KODU)
		console.log('query bayi from bayi: ', bayilerData)
		this.BAYI_ADI = bayilerData.ADI
		this.NAME = bayilerData.ADI
		if (bayilerData) return true
		return false
	}

	public async getMusteriler(){
		const musteriData = await Bayi.prisma.queryMusteriByBayi(parseInt(this.BAYI_ID))
		console.log("musteriData of Bayi", musteriData)
		if (musteriData && musteriData.length > 0){
			musteriData.forEach(m =>  this.MUSTERILER.push(m))
			return musteriData
		}
	}
}
