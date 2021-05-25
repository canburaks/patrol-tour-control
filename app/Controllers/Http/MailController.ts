import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class MailController {
	public async send({ request, response, view }: HttpContextContract) {
		const email = request.input('email')
		const tel = request.input('tel')
		console.log('mail params: ', email, tel)
		const mailObject = await this.sender({
			from: 'info@webmeister.org',
			to: email,
			subject: 'Adonis mail',
		})
		console.log('mail object', mailObject)
		return view.renderRaw(`OK! email:${email} tel:${tel}`)
	}

	public async create({}: HttpContextContract) {}

	public async store({}: HttpContextContract) {}

	public async show({}: HttpContextContract) {}

	public async edit({}: HttpContextContract) {}

	public async update({}: HttpContextContract) {}

	public async destroy({}: HttpContextContract) {}

	public async sender({ from, to, subject }) {
		const mailObject = await Mail.send(message => {
			message
				.from(from)
				.to(to)
				.subject(subject)
				.htmlView('emails/welcome', {
					user: { fullName: 'Can Burak' },
					url: 'https://your-app.com/verification-url',
				})
		})
		return mailObject
	}
}
