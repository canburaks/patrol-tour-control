"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrismaController_1 = __importStar(require("../Controllers/Http/PrismaController"));
const assert_1 = __importDefault(require("assert"));
const luxon_1 = require("luxon");
class Musteri {
    constructor(F_KODU, MPAROLA) {
        this.TYPE = 'abone';
        this.AUTH = false;
        this.MESAJLAR = {};
        this.LATEST_MESAJLAR = [];
        this.PAROLA = MPAROLA;
        this.GIRIS_KODU = F_KODU;
    }
    async authorize() {
        const musteriData = await Musteri.prisma.queryMusteri(this.GIRIS_KODU, this.PAROLA);
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
    async authorizeWithoutPassword() {
        const musteriData = await Musteri.prisma.queryMusteriWithoutPassword(this.GIRIS_KODU);
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
    async getMessagesbyPage(params) {
        const mesajData = await Musteri.prisma.queryMesajlar(params);
        assert_1.default(mesajData, `Mesaj/sinyal data for FIRMA_KODU:${this.FIRMA_KODU}--PAGE:${params.PAGE} is null/undefined`);
        assert_1.default(mesajData.length > 0, `There are no mesaj/sinyal for FIRMA_KODU:${this.FIRMA_KODU}--PAGE:${params.PAGE}`);
        this.MESAJLAR[params.PAGE] = mesajData;
        return mesajData;
    }
    async getMessagesbyDate(params) {
        this.authorize();
        let now;
        let today;
        let tomorrow;
        let START;
        let END;
        if (params.DATE.length === 8) {
            today = luxon_1.DateTime.fromObject({
                hour: 0,
                day: params.DATE.slice(0, 2),
                month: params.DATE.slice(2, 4),
                year: params.DATE.slice(4, 8)
            });
            tomorrow = today.plus({ days: 1 });
            START = today.toSQLDate();
            END = tomorrow.toSQLDate();
        }
        if (!params.DATE || params.DATE.length !== 8) {
            now = luxon_1.DateTime.now();
            today = luxon_1.DateTime.fromObject({
                hour: 0,
                day: now.day,
                month: now.month,
                year: now.year
            });
            tomorrow = today.plus({ days: 1 });
            START = today.toSQLDate();
            END = tomorrow.toSQLDate();
        }
        const raw = `SELECT ALARMKODU, BOLGE, KULLANICI, MESAJTIPI, MESAJ, TARIH FROM mesajlar WHERE  ALARMKODU="E120" AND F_KODU = "${this.GIRIS_KODU}" AND TARIH BETWEEN "${START}" AND "${END} LIMIT = 5";`;
        let rawMesajData = await PrismaController_1.prisma.$queryRaw(raw);
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
        }));
        this.MESAJLAR[START] = mesajData;
        console.log('mesajdata', mesajData);
        console.log('mesajlar', this.MESAJLAR);
        return mesajData;
    }
    generateRawQuery(F_KODU, START, END) {
        const SELECT = 'SELECT BOLGE, MESAJ, TARIH FROM mesajlar ';
        const WHERE = `WHERE F_KODU = ${F_KODU} AND TARIH BETWEEN "${START}" "${END}";`;
        return SELECT + WHERE;
    }
}
exports.default = Musteri;
Musteri.prisma = new PrismaController_1.default();
//# sourceMappingURL=Musteri.js.map