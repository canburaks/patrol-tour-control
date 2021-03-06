import React from 'react'
import { useState, useMemo, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { useMutation } from 'react-query'
import axios from 'axios'

const LoginForm = props => {
	let history = useHistory()
	const [username, setUsername] = useState(null)
	const [password, setPassword] = useState(null)
	const [accountType, setAccountType] = useState(null)
	const [error, setError] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const setBayiAccount = () => setAccountType('bayi')
	const setAboneAccount = () => setAccountType('abone')

	const formData = {
		username, //actually user id
		password,
		accountType
	}

	const mutation = useMutation(newAuthUser => axios.post('/login', newAuthUser))
	console.log('mutation: ', mutation)

	const Redirect = ({ path, state }) => <Redirect to={{ path, state }} />

	function handleSuccess(data) {
		const sessionValue = data.data
		console.log('session value', sessionValue)
		localStorage.setItem('GIRIS_KODU', sessionValue.GIRIS_KODU)
		localStorage.setItem('PAROLA', sessionValue.PAROLA)
		localStorage.setItem('DATA', JSON.stringify(sessionValue))

		if (sessionValue.TYPE === 'bayi') {
			return (
				<Redirect
					to={{ path: `/operator/${sessionValue.GIRIS_KODU}/`, state: sessionValue }}
				/>
			)
		} else if (sessionValue.TYPE === 'abone') {
			return (
				<Redirect
					to={{
						path: `/account/${sessionValue.GIRIS_KODU}/signal/1`,
						state: sessionValue
					}}
				/>
			)
		}
	}
	/*
	useEffect(() => {
		if (mutation.data) {
			if (mutation.data.data.AUTH === true) {
				console.log('mutation data', mutation.data.data)
				handleSuccess(mutation.data.data)
			}
		}
		;() => handleSuccess()
	}, [mutation])
	*/

	return (
		<form
			action="/login"
			onSubmit={e => {
				e.preventDefault()
				mutation.mutate(formData)
			}}>
			<div className="flex flex-wrap mx-2">
				<div className="mb-4 w-full  px-2">
					<input
						className="w-full p-4 text-xs bg-gray-50 outline-none rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent duration-500 transition-all"
						type="text"
						required
						placeholder="Kullan??c?? numaran??z"
						onChange={e => setUsername(e.target.value)}
					/>
				</div>
			</div>
			<div className="mb-4 w-full  px-2">
				<input
					className="w-full p-4 text-xs bg-gray-50 outline-none rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent duration-500 transition-all"
					type={showPassword ? 'text' : 'password'}
					required
					placeholder="Parolan??z"
					onChange={e => setPassword(e.target.value)}
				/>
			</div>
			<div className="mb-4 text-sm">
				<span className="mr-4 font-semibold">Hesap </span>
				<label className="mr-4">
					<input
						className="mr-1"
						type="radio"
						id="abone"
						name="accountType"
						onChange={setAboneAccount}
					/>
					<span>Kullan??c??</span>
				</label>
				<label>
					<input
						className="mr-1"
						type="radio"
						id="bayi"
						name="accountType"
						required
						value="bayi"
						onChange={setBayiAccount}
					/>
					<span>Bayi</span>
				</label>
			</div>
			<div className="text-center">
				{mutation.isLoading ? (
					'Checking'
				) : (
					<>
						{mutation.isError ? (
							<div>An error occurred: {mutation.error.message}</div>
						) : null}

						{mutation.isSuccess && mutation.data.data
							? handleSuccess(mutation.data.data)
							: 'Bir hata olu??tu. L??tfen parolan??z?? ve hesap tipini kontrol ediniz.'}
						<button
							className="mb-2 w-full py-4 bg-purple-600 hover:bg-purple-700 rounded text-sm font-bold text-gray-50"
							type="submit">
							{mutation.isLoading ? 'G??nderiliyor' : 'Giri?? yap??n'}
						</button>
					</>
				)}
				<span className="text-gray-400 text-xs">
					Hesab??n??za eri??emiyor musunuz? Hemen
					<a className="text-purple-600 hover:underline" href="#">
						bizi aray??n
					</a>
				</span>
			</div>
		</form>
	)
}

export default LoginForm
