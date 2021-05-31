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
        this.PAROLA = MPAROLA;
        this.GIRIS_KODU = OP_KODU;
    }
    async authorize() {
        const operatorData = await Bayi.prisma.queryOperators(this.GIRIS_KODU, this.PAROLA);
        console.log('query from bayi: ', operatorData);
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
        console.log('query bayi from bayi: ', bayilerData);
        this.BAYI_ADI = bayilerData.ADI;
        this.NAME = bayilerData.ADI;
        if (bayilerData)
            return true;
        return false;
    }
    async getMusteriler() {
        const musteriData = await Bayi.prisma.queryMusteriByBayi(parseInt(this.BAYI_ID));
        console.log("musteriData of Bayi", musteriData);
        if (musteriData && musteriData.length > 0) {
            this.MUSTERILER = musteriData;
            return musteriData;
        }
    }
}
exports.default = Bayi;
Bayi.prisma = new PrismaController_1.default();
//# sourceMappingURL=Bayi.js.map