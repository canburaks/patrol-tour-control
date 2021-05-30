"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrismaController_1 = __importDefault(require("../Controllers/Http/PrismaController"));
class Musteri {
    constructor(F_KODU, MPAROLA) {
        this.TYPE = 'abone';
        this.AUTH = false;
        this.MUSTERILER = [];
        this.PAROLA = MPAROLA;
        this.GIRIS_KODU = F_KODU;
    }
    async authorize() {
        const musteriData = await Musteri.prisma.queryMusteri(this.GIRIS_KODU, this.PAROLA);
        console.log('query from Musteri: ', musteriData);
        if (musteriData) {
            this.AUTH = true;
            this.ID = musteriData.ID;
            this.NAME = musteriData.FIRMA_ADI;
            this.FIRMA_ADI = musteriData.FIRMA_ADI;
            this.BAYI_ADI = musteriData.BAYI;
            return true;
        }
        return false;
    }
    async getMusteriler() {
        const musteriData = await Bayi.prisma.queryBayiler(this.GIRIS_KODU);
        console.log("musteriData of Bayi");
        if (musteriData && musteriData.length > 0) {
            musteriData.forEach(m => this.MUSTERILER.push(m));
            return musteriData;
        }
    }
}
exports.default = Musteri;
Musteri.prisma = new PrismaController_1.default();
//# sourceMappingURL=Musteri.js.map