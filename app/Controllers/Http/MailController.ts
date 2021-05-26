import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

export default class MailController {
	public static SENDER = Env.get('SMTP_USERNAME')
	public static TARGET = 'info@filizguvenlik.com.tr'
	public static SUBJECT = 'ÖNEMLİ !!! Bir Ziyaretçi form doldurdu.'

	public async formHandler({ request, response, view }: HttpContextContract) {
		const formData = request.all()
		const data = {
			website: request.input('sender'),
			...formData,
		}
		this.sendLater(data)
		return `OK! ${JSON.stringify(data).split(',').join('\n')}`
	}

	public async create({}: HttpContextContract) {}

	public async store({}: HttpContextContract) {}

	public async show({}: HttpContextContract) {}

	public async edit({}: HttpContextContract) {}

	public async update({}: HttpContextContract) {}

	public async destroy({}: HttpContextContract) {}

	public async sendLater(data) {
		const mailObject = await Mail.sendLater(message => {
			message
				.from(MailController.SENDER)
				.to(MailController.TARGET)
				.subject(MailController.SUBJECT)
				.priority('high')
				.htmlView('emails/template', {
					data: { ...data },
				})
		})
		return mailObject
	}
}
