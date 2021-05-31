"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const PrismaController_1 = __importDefault(require("../app/Controllers/Http/PrismaController"));
const MailController_1 = __importDefault(require("../app/Controllers/Http/MailController"));
const Bayi_1 = __importDefault(require("../app/Models/Bayi"));
const Musteri_1 = __importDefault(require("../app/Models/Musteri"));
const COOKIE_NAME = Application_1.default.config.get('session.cookieName');
Route_1.default.get('/login', async ({ response, session, request, view }) => {
    return response.redirect().toPath('/');
});
Route_1.default.post('/login', async (ctx) => {
    const GIRIS_KODU = ctx.request.input('username');
    const PAROLA = ctx.request.input('password');
    const ACCOUNT_TYPE = ctx.request.input('accountType');
    if (ACCOUNT_TYPE === 'bayi') {
        const bayi = new Bayi_1.default(GIRIS_KODU, PAROLA);
        const isAuthorized = await bayi.authorize();
        if (isAuthorized) {
            const bayiData = await bayi.getBayiData();
            const bayiMusteriler = await bayi.getMusteriler();
            console.log('ctx bayi', bayi);
            ctx.response.cookie(COOKIE_NAME, bayi);
            ctx.session.put(COOKIE_NAME, bayi);
            return {
                ...bayi,
                error: null
            };
        }
        else
            return {
                error: 'Lütfen giriş kodunuzu veya parolanızı kontrol ediniz.'
            };
    }
    else if (ACCOUNT_TYPE === 'abone') {
        const musteri = new Musteri_1.default(GIRIS_KODU, PAROLA);
        const isAuthorized = await musteri.authorize();
        if (isAuthorized) {
            console.log('ctx musteri', musteri);
            ctx.session.put(COOKIE_NAME, {});
            ctx.response.cookie(COOKIE_NAME, musteri);
            ctx.session.put(COOKIE_NAME, musteri);
            return {
                ...musteri,
                error: null
            };
        }
        return {
            error: 'Lütfen giriş kodunuzu veya parolanızı kontrol ediniz.'
        };
    }
    return ctx.view.render('app');
});
Route_1.default.get('/logout', async (ctx) => {
    let { request, response, session, view } = ctx;
    const sessionValue = ctx.session.put(COOKIE_NAME, {});
    return response.redirect().toPath('/');
});
Route_1.default.get('/form', async (ctx) => {
    return ctx.view.render('emails/form');
});
Route_1.default.post('/form-endpoint', async (ctx) => {
    return new MailController_1.default().formHandler(ctx);
});
Route_1.default.get('/', async ({ request, response, session, view }) => {
    const sessionValue = session.get(COOKIE_NAME, {});
    console.log("landing page server session", sessionValue);
    return view.render('app');
});
Route_1.default.get('/account/:F_KODU/:PAGE?', async ({ params, request, response, view, session }) => {
    let cookieValue = request.cookie(COOKIE_NAME);
    const sessionValue = session.get(COOKIE_NAME, {});
    const URL_PARAMS = params.F_KODU;
    const PAGE = params.PAGE || 1;
    if (!sessionValue.AUTH) {
        session.put(COOKIE_NAME, { ...sessionValue, error: 'Lütfen giriş yapınız.' });
        return response.redirect().toPath('/login');
    }
    if (sessionValue.accountType === 'bayi') {
        const allowedFirmaCodes = sessionValue.MUSTERILER.map(m => m.F_KODU);
        if (!allowedFirmaCodes.includes(URL_PARAMS)) {
            return response.redirect().toPath('/dashboard');
        }
        if (allowedFirmaCodes.includes(URL_PARAMS)) {
            const MESAJLAR = await new PrismaController_1.default().queryMesajlarByMuster(URL_PARAMS, PAGE);
            const CURRENT_MUSTERI = sessionValue.MUSTERILER.filter(m => m.F_KODU === URL_PARAMS)[0];
            const updatedSessionValue = {
                ...sessionValue,
                F_KODU: CURRENT_MUSTERI.F_KODU,
                FIRMA_ADI: CURRENT_MUSTERI.FIRMA_ADI,
                PAGE,
                MESAJLAR
            };
            return view.render('account', updatedSessionValue);
        }
    }
    if (sessionValue.accountType === 'abone') {
        if (sessionValue.F_KODU !== URL_PARAMS) {
            return response.redirect().toPath(`/accounts/${sessionValue.F_KODU}`);
        }
        if (sessionValue.F_KODU === URL_PARAMS) {
            const MESAJLAR = await new PrismaController_1.default().queryMesajlarByMuster(URL_PARAMS, PAGE);
            const updatedSessionValue = { ...sessionValue, PAGE, MESAJLAR };
            return view.render('account', updatedSessionValue);
        }
    }
    else if (sessionValue.AUTH) {
        return view.render('dashboard', sessionValue);
    }
    return `Viewing post with id ${params.F_KODU}`;
});
Route_1.default.get('*', async ({ request, response, session, view }) => {
    const sessionValue = session.get(COOKIE_NAME, {});
    const privateUrls = ["/dashboard", "/account", "/operator"];
    return view.render('app');
});
//# sourceMappingURL=routes.js.map