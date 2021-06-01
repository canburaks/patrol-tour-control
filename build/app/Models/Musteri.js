"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrismaController_1 = __importDefault(require("../Controllers/Http/PrismaController"));
const assert_1 = __importDefault(require("assert"));
class Musteri {
    constructor(F_KODU, MPAROLA) {
        this.TYPE = 'abone';
        this.AUTH = false;
        this.MESAJLAR = [];
        this.LATEST_MESAJLAR = [];
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
            this.BAYI_ID = musteriData.BAYI;
            return true;
        }
        return false;
    }
    async getLatestMessages() {
        const mesajData = await Musteri.prisma.queryLatestMessageByMuster(this.FIRMA_KODU);
        assert_1.default(mesajData, `Latest mesajData for FIRMA_KODU:${this.FIRMA_KODU} is null/undefined`);
        assert_1.default(mesajData.length > 0, `There are no latest mesajData for FIRMA_KODU:${this.FIRMA_KODU}`);
        this.LATEST_MESAJLAR = mesajData;
        return true;
    }
    async getMessagesbyPage(page) {
        const mesajData = await Musteri.prisma.queryMesajlarByMuster(this.FIRMA_KODU, page);
        assert_1.default(mesajData, `Mesaj/sinyal data for FIRMA_KODU:${this.FIRMA_KODU}--PAGE:${page} is null/undefined`);
        assert_1.default(mesajData.length > 0, `There are no mesaj/sinyal for FIRMA_KODU:${this.FIRMA_KODU}--PAGE:${page}`);
        this.MESAJLAR = mesajData;
        return true;
    }
}
exports.default = Musteri;
Musteri.prisma = new PrismaController_1.default();
//# sourceMappingURL=Musteri.js.map