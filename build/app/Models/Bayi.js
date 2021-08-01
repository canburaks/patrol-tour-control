"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrismaController_1 = __importDefault(require("../Controllers/Http/PrismaController"));
class Bayi {
    constructor(OP_KODU, MPAROLA) {
        this.TYPE = 'bayi';
        this.AUTH = false;
        this.MUSTERILER = [];
        this.MUSTERI_FIRMA_CODES = [];
        this.PAROLA = MPAROLA;
        this.GIRIS_KODU = OP_KODU;
    }
    async init() {
        let isAuthorized = await this.authorize();
        if (!isAuthorized) {
            return false;
        }
        if (isAuthorized) {
            let bayiData = await this.getBayiData();
            if (!bayiData) {
                console.log('Error: There is no BAYI data with GIRIS KODU: ', this.GIRIS_KODU);
                return false;
            }
            let musteriData = await this.getMusteriler();
            if (!musteriData) {
                console.log('Error: No Musteri data of BAYI with GIRIS KODU: ', this.GIRIS_KODU);
                return false;
            }
            return this;
        }
    }
    async authorize() {
        const operatorData = await Bayi.prisma.queryOperators(this.GIRIS_KODU, this.PAROLA);
        if (operatorData) {
            this.AUTH = true;
            this.ID = operatorData?.ID;
            this.BAYI_ID = operatorData?.BAYIID;
            return true;
        }
        return false;
    }
    async getBayiData() {
        const bayilerData = await Bayi.prisma.queryBayiler(this.GIRIS_KODU);
        this.BAYI_ADI = bayilerData.ADI;
        this.NAME = bayilerData.ADI;
        if (bayilerData)
            return true;
        return false;
    }
    async getMusteriler() {
        const musteriData = await Bayi.prisma.queryMusteriByBayi(parseInt(this.BAYI_ID));
        if (musteriData && musteriData.length > 0) {
            this.MUSTERILER = musteriData;
            this.MUSTERI_FIRMA_CODES = musteriData.map(m => m.F_KODU);
            return true;
        }
        return false;
    }
    async hasMusteriLikeThis(FIRMA_KODU) {
        if (this.MUSTERI_FIRMA_CODES.length > 0) {
            if (this.MUSTERI_FIRMA_CODES.includes(FIRMA_KODU)) {
                return true;
            }
            return false;
        }
        return false;
    }
}
exports.default = Bayi;
Bayi.prisma = new PrismaController_1.default();
//# sourceMappingURL=Bayi.js.map