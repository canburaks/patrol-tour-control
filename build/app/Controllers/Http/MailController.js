"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mail_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Mail"));
class MailController {
    async formHandler({ request, response, view }) {
        const formData = request.all();
        const data = {
            website: request.input('sender'),
            ...formData
        };
        MailController.TARGET.forEach(async (targetMail) => {
            await this.sendLater(data, targetMail);
        });
        return `OK! ${JSON.stringify(data).split(',').join('\n')}`;
    }
    async create({}) { }
    async store({}) { }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
    async sendLater(data, target) {
        const mailObject = await Mail_1.default.sendLater(message => {
            message
                .from(MailController.SENDER)
                .to(target)
                .subject(MailController.SUBJECT)
                .priority('high')
                .htmlView('emails/template', {
                data: { ...data }
            });
        });
        return mailObject;
    }
}
exports.default = MailController;
MailController.SENDER = 'website@filizguvenlik.net';
MailController.TARGET = [
    'info@filizguvenlik.com.tr',
    'info@alarmtakipmerkezi.tk',
    'satis@filizguvenlik.com.tr',
    'canburak@msn.com'
];
MailController.SUBJECT = 'ÖNEMLİ !!! Bir Ziyaretçi form doldurdu.';
//# sourceMappingURL=MailController.js.map