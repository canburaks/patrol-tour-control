"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mail_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Mail"));
class MailController {
    async send({ request, response, view }) {
        const email = request.input('email');
        const tel = request.input('tel');
        console.log('mail params: ', email, tel);
        const mailObject = await this.sender({
            from: 'info@webmeister.org',
            to: email,
            subject: 'Adonis mail',
        });
        console.log('mail object', mailObject);
        return view.renderRaw(`OK! email:${email} tel:${tel}`);
    }
    async create({}) { }
    async store({}) { }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
    async sender({ from, to, subject }) {
        const mailObject = await Mail_1.default.send(message => {
            message
                .from(from)
                .to(to)
                .subject(subject)
                .htmlView('emails/welcome', {
                user: { fullName: 'Can Burak' },
                url: 'https://your-app.com/verification-url',
            });
        });
        return mailObject;
    }
}
exports.default = MailController;
//# sourceMappingURL=MailController.js.map