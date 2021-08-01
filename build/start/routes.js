"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const PrismaController_1 = __importDefault(require("../app/Controllers/Http/PrismaController"));
const MailController_1 = __importDefault(require("../app/Controllers/Http/MailController"));
const Musteri_1 = __importDefault(require("../app/Models/Musteri"));
const Bayi_1 = __importDefault(require("../app/Models/Bayi"));
const COOKIE_NAME = Application_1.default.config.get('session.cookieName');
Route_1.default.get('/form', async (ctx) => {
    return ctx.view.render('emails/form');
});
Route_1.default.post('/form-endpoint', async (ctx) => {
    return new MailController_1.default().formHandler(ctx);
});
Route_1.default.get(`/_operator/:OP_KODU/:F_KODU?/:PAGE?`, async (ctx) => {
    let { request, response, params, session, view } = ctx;
    const OP_KODU = params.OP_KODU;
    const TARGET_PAGE = params.PAGE;
    const FIRMA_KODU = params.F_KODU;
    const PAROLA = session.get('PAROLA');
    const ACCOUNT_TYPE = session.get('ACCOUNT_TYPE');
    const GIRIS_KODU = session.get('GIRIS_KODU');
    console.log('OPERATOR check: ', OP_KODU, GIRIS_KODU, PAROLA, FIRMA_KODU, TARGET_PAGE);
    if (OP_KODU === GIRIS_KODU) {
        const OPERATOR = await new Bayi_1.default(GIRIS_KODU, PAROLA);
        const isAuthorized = await OPERATOR.init();
        const haveMusteriDate = await OPERATOR.getMusteriler();
        if (!FIRMA_KODU) {
            return view.render('operator', { OPERATOR });
        }
        if (FIRMA_KODU && TARGET_PAGE) {
            console.log('Operator is looking a company data');
            if (OPERATOR.MUSTERI_FIRMA_CODES.includes(FIRMA_KODU)) {
                const params = { F_KODU: FIRMA_KODU, PAGE: TARGET_PAGE || 1 };
                const prismaClient = new PrismaController_1.default();
                const currentPageData = await prismaClient.queryMesajlar(params);
                let musteriler;
                musteriler = OPERATOR.MUSTERILER.filter(function (musteri) {
                    if (musteri.F_KODU === FIRMA_KODU) {
                        return true;
                    }
                });
                let currentMusteri = musteriler[0];
                if (currentMusteri) {
                    currentMusteri.MESAJLAR = {};
                    currentMusteri.MESAJLAR[TARGET_PAGE] = currentPageData;
                }
                console.log('parsed MUSTERI data', currentMusteri);
                console.log('final operator data: ', OPERATOR);
                return view.render('operator', {
                    OPERATOR,
                    PAGE: TARGET_PAGE,
                    MUSTERI: currentMusteri
                });
            }
            console.log('Error: this is not client of this OPERATOR.');
            return response.redirect().toPath(`/operator/${OP_KODU}/`);
        }
    }
    else {
    }
    console.log("Error: Session operator code and session operator code doesn't match.");
    return response.redirect().toPath('/logout');
});
Route_1.default.get(`/operator/:OP_KODU/:F_KODU?/:DATE?`, async (ctx) => {
    let { request, response, params, session, view } = ctx;
    const OP_KODU = params.OP_KODU;
    const TARGET_PAGE = params.DATE;
    const DATE = params.DATE;
    const FIRMA_KODU = params.F_KODU;
    const PAROLA = session.get('PAROLA');
    const ACCOUNT_TYPE = session.get('ACCOUNT_TYPE');
    const GIRIS_KODU = session.get('GIRIS_KODU');
    console.log('OPERATOR check: ', OP_KODU, GIRIS_KODU, PAROLA, FIRMA_KODU, TARGET_PAGE);
    if (OP_KODU === GIRIS_KODU) {
        const OPERATOR = await new Bayi_1.default(GIRIS_KODU, PAROLA);
        const isAuthorized = await OPERATOR.init();
        const haveMusteriDate = await OPERATOR.getMusteriler();
        if (!FIRMA_KODU) {
            console.log('No Company');
            return view.render('operator', { OPERATOR });
        }
        if (FIRMA_KODU && TARGET_PAGE) {
            console.log('Operator is looking a company data');
            if (OPERATOR.MUSTERI_FIRMA_CODES.includes(FIRMA_KODU)) {
                console.log("target and current company ID's are matched");
                let SESSION_MUSTERI;
                SESSION_MUSTERI = session.get('MUSTERI');
                const NEW_MUSTERI_OBJECT = new Musteri_1.default(FIRMA_KODU, null);
                if (!SESSION_MUSTERI) {
                    session.put('MUSTERI', NEW_MUSTERI_OBJECT);
                    response.cookie('MUSTERI', NEW_MUSTERI_OBJECT);
                }
                let currentDateMesajlar = await NEW_MUSTERI_OBJECT.getMessagesbyDate({
                    DATE: params.DATE
                });
                SESSION_MUSTERI = session.get('MUSTERI');
                console.log('SE', SESSION_MUSTERI);
                NEW_MUSTERI_OBJECT.MESAJLAR = {
                    ...SESSION_MUSTERI.MESAJLAR,
                    ...NEW_MUSTERI_OBJECT.MESAJLAR
                };
                SESSION_MUSTERI.MESAJLAR[DATE] = currentDateMesajlar;
                session.put('MUSTERI', NEW_MUSTERI_OBJECT);
                response.cookie('MUSTERI', NEW_MUSTERI_OBJECT);
                return view.render('company', {
                    MUSTERI: NEW_MUSTERI_OBJECT,
                    DATE,
                    PAGE: TARGET_PAGE
                });
            }
            console.log('Error: this is not client of this OPERATOR.');
            return response.redirect().toPath(`/operator/${OP_KODU}/`);
        }
    }
    else {
    }
    console.log("Error: Session operator code and session operator code doesn't match.");
    return response.redirect().toPath('/logout');
});
Route_1.default.get('/company/:F_KODU/:DATE?', async (ctx) => {
    let { request, response, params, session, view } = ctx;
    console.log('params', params);
    const TARGET_FIRMA_KODU = params.F_KODU;
    const DATE = params.DATE;
    console.log('company route: ', params.F_KODU, params.DATE);
    const PAROLA = session.get('PAROLA');
    const ACCOUNT_TYPE = session.get('ACCOUNT_TYPE');
    const GIRIS_KODU = session.get('GIRIS_KODU');
    console.log('company route values: ', TARGET_FIRMA_KODU, PAROLA, GIRIS_KODU, ACCOUNT_TYPE);
    if (parseInt(GIRIS_KODU) === parseInt(TARGET_FIRMA_KODU)) {
        console.log("target and current company ID's are matched");
        const SESSION_MUSTERI = session.get('MUSTERI');
        const NEW_MUSTERI_OBJECT = new Musteri_1.default(SESSION_MUSTERI.GIRIS_KODU, SESSION_MUSTERI.PAROLA);
        let currentDateMesajlar = await NEW_MUSTERI_OBJECT.getMessagesbyDate({ DATE });
        NEW_MUSTERI_OBJECT.MESAJLAR = {
            ...SESSION_MUSTERI.MESAJLAR,
            ...NEW_MUSTERI_OBJECT.MESAJLAR
        };
        SESSION_MUSTERI.MESAJLAR[DATE] = currentDateMesajlar;
        session.put('MUSTERI', NEW_MUSTERI_OBJECT);
        response.cookie('MUSTERI', NEW_MUSTERI_OBJECT);
        return view.render('company', { MUSTERI: SESSION_MUSTERI, DATE });
    }
    return response.redirect().toPath('/login');
});
Route_1.default.get('/_company/:F_KODU/:PAGE?', async (ctx) => {
    let { request, response, params, session, view } = ctx;
    const TARGET_FIRMA_KODU = params.F_KODU;
    const PAGE = parseInt(params.PAGE) || 1;
    console.log('company route: ', params.F_KODU, params.PAGE);
    const PAROLA = session.get('PAROLA');
    const ACCOUNT_TYPE = session.get('ACCOUNT_TYPE');
    const GIRIS_KODU = session.get('GIRIS_KODU');
    console.log('company route values: ', TARGET_FIRMA_KODU, PAROLA, GIRIS_KODU, ACCOUNT_TYPE);
    if (parseInt(GIRIS_KODU) === parseInt(TARGET_FIRMA_KODU)) {
        console.log("target and current company ID's are matched");
        const SESSION_MUSTERI = session.get('MUSTERI');
        const NEW_MUSTERI_OBJECT = new Musteri_1.default(SESSION_MUSTERI.GIRIS_KODU, SESSION_MUSTERI.PAROLA);
        let currentPageMesajlar = await NEW_MUSTERI_OBJECT.getMessagesbyPage({ PAGE });
        SESSION_MUSTERI.MESAJLAR[PAGE] = currentPageMesajlar;
        session.put('MUSTERI', SESSION_MUSTERI);
        response.cookie('MUSTERI', SESSION_MUSTERI);
        console.log('company mesajlar', SESSION_MUSTERI);
        return view.render('company', { MUSTERI: SESSION_MUSTERI, PAGE });
    }
    return response.redirect().toPath('/login');
});
Route_1.default.get('/login', async (ctx) => {
    let { request, response, session, view } = ctx;
    let sessionValue = session.get(COOKIE_NAME, {});
    let sessionError = session.get('Error');
    console.log('login error: ', sessionError);
    return view.render('auth/login', { error: sessionError && sessionError });
});
Route_1.default.post('/login', async (ctx) => {
    const GIRIS_KODU = ctx.request.input('accountId');
    const PAROLA = ctx.request.input('password');
    const ACCOUNT_TYPE = ctx.request.input('accountType');
    console.log('Form values: ', GIRIS_KODU, PAROLA, ACCOUNT_TYPE);
    if (!GIRIS_KODU || !PAROLA || !ACCOUNT_TYPE) {
        return ctx.response.redirect().toPath('/login');
    }
    if (ACCOUNT_TYPE === 'bayi') {
        const OPERATOR = await new Bayi_1.default(GIRIS_KODU, PAROLA);
        const isAuthorized = await OPERATOR.init();
        if (isAuthorized) {
            console.log('Successfully logging...', GIRIS_KODU, PAROLA, ACCOUNT_TYPE);
            ctx.session.put('PAROLA', PAROLA);
            ctx.response.cookie('PAROLA', PAROLA);
            ctx.session.put('ACCOUNT_TYPE', ACCOUNT_TYPE);
            ctx.response.cookie('ACCOUNT_TYPE', ACCOUNT_TYPE);
            ctx.session.put('GIRIS_KODU', GIRIS_KODU);
            ctx.response.cookie('GIRIS_KODU', GIRIS_KODU);
            ctx.session.put('OPERATOR', OPERATOR);
            ctx.response.cookie('OPERATOR', OPERATOR);
            return ctx.response.redirect().toPath(`/operator/${OPERATOR.GIRIS_KODU}`);
        }
        let ERROR = 'Lütfen parolanızı ve kullanıcı tipini tekrar kontrol ediniz.';
        return ctx.response.redirect().toPath('/login');
    }
    else if (ACCOUNT_TYPE === 'abone') {
        console.log('Account type is: ', ACCOUNT_TYPE);
        let MUSTERI = new Musteri_1.default(GIRIS_KODU, PAROLA);
        let isAuthorized = await MUSTERI.authorize();
        if (isAuthorized) {
            ctx.session.put('PAROLA', PAROLA);
            ctx.response.cookie('PAROLA', PAROLA);
            ctx.session.put('ACCOUNT_TYPE', ACCOUNT_TYPE);
            ctx.response.cookie('ACCOUNT_TYPE', ACCOUNT_TYPE);
            ctx.session.put('GIRIS_KODU', GIRIS_KODU);
            ctx.response.cookie('GIRIS_KODU', GIRIS_KODU);
            ctx.session.put('MUSTERI', MUSTERI);
            ctx.response.cookie('MUSTERI', MUSTERI);
            console.log('Account is authnticated. Redirecting to: ', `/company/${GIRIS_KODU}`);
            return ctx.response.redirect().toPath(`/company/${GIRIS_KODU}/1`);
        }
        return ctx.response.redirect().toPath('/login');
    }
    let ERROR = 'Başarısız. Lütfen kullanıcı tipini tekrar kontrol ediniz.';
    return ctx.response.redirect().toPath('/login');
});
Route_1.default.get('/logout', async (ctx) => {
    let { request, response, session, view } = ctx;
    session.put(COOKIE_NAME, {});
    session.forget('PAROLA');
    session.forget('GIRIS_KODU');
    session.forget('ACCOUNT_TYPE');
    session.forget('MUSTERI');
    session.forget('OPERATOR');
    return response.redirect().toPath('/');
});
Route_1.default.get('/', async ({ request, response, session, view }) => {
    let sessionValue = session.get(COOKIE_NAME, {});
    return view.render('welcome', sessionValue);
});
//# sourceMappingURL=routes.js.map