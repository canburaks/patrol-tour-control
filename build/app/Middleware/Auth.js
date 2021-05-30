"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
class Auth {
    async handle({ request, response }, next) {
        const cookie = request.cookie(Application_1.default.config.get('session.cookieName'));
        console.log('auth middleware', cookie);
        if (!cookie || !cookie.accountId) {
            response.unauthorized({ error: 'Must be logged in' });
            return;
        }
        await next();
    }
}
exports.default = Auth;
//# sourceMappingURL=Auth.js.map