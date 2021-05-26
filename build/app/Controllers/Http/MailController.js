"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mail_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Mail"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
class MailController {
    async formHandler({ request, response, view }) {
        const formData = request.all();
        const data = {
            website: request.input('sender'),
            ...formData,
        };
        this.sendLater(data);
        return `OK! ${JSON.stringify(data).split(',').join('\n')}`;
    }
    async create({}) { }
    async store({}) { }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
    async sendLater(data) {
        const mailObject = await Mail_1.default.sendLater(message => {
            message
                .from(MailController.SENDER)
                .to(MailController.TARGET)
                .subject(MailController.SUBJECT)
                .priority('high')
                .htmlView('emails/template', {
                data: { ...data },
            });
        });
        return mailObject;
    }
}
exports.default = MailController;
MailController.SENDER = Env_1.default.get('SMTP_USERNAME');
MailController.TARGET = 'info@filizguvenlik.com.tr';
MailController.SUBJECT = 'ÖNEMLİ !!! Bir Ziyaretçi form doldurdu.';
//# sourceMappingURL=MailController.js.map