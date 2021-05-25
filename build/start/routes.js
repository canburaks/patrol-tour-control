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
    return view.render('index');
});
Route_1.default.get('/dashboard', async ({ request, response, view, session }) => {
    let cookieValue = request.cookie(COOKIE_NAME);
    const sessionValue = session.get(COOKIE_NAME, {});
    console.log('Dashboard route session value: ', sessionValue);
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
    console.log('Login route session value: ', sessionValue);
    return view.render('auth/login', { error: sessionValue.error && sessionValue.error });
});
Route_1.default.post('/login', async (ctx) => {
    if (ctx.request.input('accountType') === 'bayi') {
        return new PrismaController_1.default().authBayi(ctx);
    }
    else if (ctx.request.input('accountType') === 'abone') {
        return new PrismaController_1.default().authAbone(ctx);
    }
    console.log('accountType neither abone nor bayi');
    return ctx.view.render('auth/login');
});
Route_1.default.get('/logout', async (ctx) => {
    let { request, response, session, view } = ctx;
    const sessionValue = session.put(COOKIE_NAME, {});
    return response.redirect().toPath('/');
});
Route_1.default.post('/mail', async (ctx) => {
    new MailController_1.default().send(ctx);
});
Route_1.default.get('/mail', async (ctx) => {
    return ctx.view.render('emails/form');
});
//# sourceMappingURL=routes.js.map