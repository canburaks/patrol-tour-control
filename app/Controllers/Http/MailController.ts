import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

export default class MailController {
	public static SENDER = 'website@filizguvenlik.net'

	public static TARGET = [
		'info@filizguvenlik.com.tr',
		'info@alarmtakipmerkezi.tk',
		'satis@filizguvenlik.com.tr',
		'canburak@msn.com'
	]
	public static SUBJECT = 'ÖNEMLİ !!! Bir Ziyaretçi form doldurdu.'

	public async formHandler({ request, response, view }: HttpContextContract) {
		const formData = request.all()
		const data = {
			website: request.input('sender'),
			...formData
		}
		MailController.TARGET.forEach(async targetMail => {
			await this.sendLater(data, targetMail)
		})
		return `OK! ${JSON.stringify(data).split(',').join('\n')}`
	}

	public async create({}: HttpContextContract) {}

	public async store({}: HttpContextContract) {}

	public async show({}: HttpContextContract) {}

	public async edit({}: HttpContextContract) {}

	public async update({}: HttpContextContract) {}

	public async destroy({}: HttpContextContract) {}

	public async sendLater(data, target) {
		const mailObject = await Mail.sendLater(message => {
			message
				.from(MailController.SENDER)
				.to(target)
				.subject(MailController.SUBJECT)
				.priority('high')
				.htmlView('emails/template', {
					data: { ...data }
				})
		})
		return mailObject
	}
}
