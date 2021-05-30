"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const PrismaController_1 = __importDefault(require("../app/Controllers/Http/PrismaController"));
const MailController_1 = __importDefault(require("../app/Controllers/Http/MailController"));
const COOKIE_NAME = Application_1.default.config.get('session.cookieName');
Route_1.default.get('/', async ({ request, response, session, view }) => {
    const sessionValue = session.get(COOKIE_NAME, {});
    return view.render('index', sessionValue);
});
Route_1.default.get('/account/:F_KODU/:PAGE?', async ({ params, request, response, view, session }) => {
    let cookieValue = request.cookie(COOKIE_NAME);
    const sessionValue = session.get(COOKIE_NAME, {});
    const URL_PARAMS = params.F_KODU;
    const PAGE = params.PAGE || 1;
    if (!sessionValue.auth) {
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
    else if (sessionValue.auth) {
        return view.render('dashboard', sessionValue);
    }
    return `Viewing post with id ${params.F_KODU}`;
});
Route_1.default.get('/dashboard', async ({ request, response, view, session }) => {
    let cookieValue = request.cookie(COOKIE_NAME);
    const sessionValue = session.get(COOKIE_NAME, {});
    if (!sessionValue.auth) {
        session.put(COOKIE_NAME, { ...sessionValue, error: 'Tekrar giriş yapmanız gerekli' });
        return response.redirect().toPath('/login');
    }
    else if (sessionValue.auth) {
        return view.render('dashboard', sessionValue);
    }
});
Route_1.default.get('/login', async (ctx) => {
    let { request, response, session, view } = ctx;
    const sessionValue = session.get(COOKIE_NAME, {});
    if (sessionValue.auth) {
        return response.redirect().toPath('/dashboard');
    }
    return view.render('auth/login', { error: sessionValue.error && sessionValue.error });
});
Route_1.default.post('/login', async (ctx) => {
    if (ctx.request.input('accountType') === 'bayi') {
        return new PrismaController_1.default().authBayi(ctx);
    }
    else if (ctx.request.input('accountType') === 'abone') {
        return new PrismaController_1.default().authMusteri(ctx);
    }
    return ctx.view.render('auth/login');
});
Route_1.default.get('/logout', async (ctx) => {
    let { request, response, session, view } = ctx;
    const sessionValue = session.put(COOKIE_NAME, {});
    return response.redirect().toPath('/');
});
Route_1.default.get('/form', async (ctx) => {
    return ctx.view.render('emails/form');
});
Route_1.default.post('/form-endpoint', async (ctx) => {
    return new MailController_1.default().formHandler(ctx);
});
//# sourceMappingURL=routes.js.map