"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const COOKIE_NAME = Application_1.default.config.get('session.cookieName');
const prisma = new client_1.PrismaClient();
class PrismaController {
    constructor() {
        PrismaController.client = prisma;
    }
    async index(ctx) { }
    async authBayi({ request, response, view, session }) {
        const accountId = request.input('accountId');
        const password = request.input('password');
        const accountType = request.input('accountType');
        const formData = {
            OP_KODU: accountId,
            MPAROLA: password
        };
        console.log('bayi formData: ', formData);
        const operatorData = await this.queryOperators(formData.OP_KODU, formData.MPAROLA);
        console.log('query result: ', operatorData);
        if (!operatorData) {
            return view.render('auth/login', {
                error: 'Kullanıcı adınız ya da parolanız yanlış.',
                accountId,
                accountType
            });
        }
        const bayilerData = await this.queryBayiler(formData.OP_KODU);
        const NAME = operatorData.OP_ADI
            ? operatorData.OP_ADI
            : bayilerData?.ADI
                ? bayilerData?.ADI
                : null;
        const authorizedOperatorData = {
            auth: true,
            data: new Date(),
            accountType: 'bayi',
            NAME: NAME,
            ADI: bayilerData?.ADI,
            KODU: bayilerData?.KODU,
            BAYI: bayilerData?.ID,
            ...operatorData
        };
        console.log('authorizedOperatorData: ', authorizedOperatorData);
        const sessionValue = session.put(COOKIE_NAME, authorizedOperatorData);
        const bayiMusterileri = await this.queryMusteriByBayi(parseInt(authorizedOperatorData.BAYI));
        authorizedOperatorData.MUSTERILER = bayiMusterileri;
        console.log('query musteriByBayi: ', '\n\n', bayiMusterileri);
        response.cookie(COOKIE_NAME, authorizedOperatorData);
        return response.redirect().toPath('/dashboard');
    }
    async authMusteri({ request, response, view, session }) {
        const accountId = request.input('accountId');
        const password = request.input('password');
        const accountType = request.input('accountType');
        const formData = {
            F_KODU: accountId,
            WEBPAROLA: password
        };
        console.log('abone formData: ', formData);
        const musteriData = await this.queryMusteri(formData.F_KODU, formData.WEBPAROLA);
        console.log('musteri query result: ', musteriData);
        if (!musteriData) {
            return view.render('auth/login', {
                error: 'Kullanıcı adınız ya da parolanız yanlış.',
                accountId,
                accountType
            });
        }
        const NAME = musteriData.FIRMA_ADI ? musteriData.FIRMA_ADI : null;
        const authorizedMusteriData = {
            auth: true,
            data: new Date(),
            accountType: accountType,
            NAME: NAME,
            ...musteriData
        };
        const sessionValue = session.put(COOKIE_NAME, authorizedMusteriData);
        response.cookie(COOKIE_NAME, authorizedMusteriData);
        return response.redirect().toPath(`/account/${authorizedMusteriData.F_KODU}`);
    }
    async dashboard({ request, response, view, session }) {
        const sessionValue = session.get(COOKIE_NAME);
        return view.render('dashboard', sessionValue);
    }
    async queryMesajlarByMuster(F_KODU, PAGE) {
        const TAKE = 100;
        const SKIP = (PAGE - 1) * TAKE;
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
        });
    }
    async queryOperators(OP_KODU, MPAROLA) {
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
        });
    }
    async queryBayiler(OP_KODU) {
        return await PrismaController.client.bayiler.findFirst({
            where: {
                KODU: OP_KODU
            },
            select: {
                ID: true,
                ADI: true,
                KODU: true
            }
        });
    }
    async queryMusteri(F_KODU, WEBPAROLA) {
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
        });
    }
    async queryMusteriByBayi(BAYI) {
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
        });
    }
    async disconnect(outerFunction) {
        outerFunction()
            .catch(e => {
            throw e;
        })
            .finally(async () => await PrismaController.client.$disconnect());
    }
    hasCredentials(request) {
        const existingUser = request.cookie('user', []);
        if (existingUser.username && existingUser.password) {
            return true;
        }
        return false;
    }
}
exports.default = PrismaController;
//# sourceMappingURL=PrismaController.js.map