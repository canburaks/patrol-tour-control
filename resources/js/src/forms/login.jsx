import React from 'react'
import { useState, useMemo, useEffect } from 'react'
import { useMutation } from 'react-query'
import { Redirect, useHistory } from 'react-router-dom'
import axios from 'axios'

const LoginForm = props => {
	let history = useHistory()
	const [username, setUsername] = useState(null)
	const [password, setPassword] = useState(null)
	const [accountType, setAccountType] = useState(null)
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

	function handleSuccess(sessionValue) {
		console.log('session value', sessionValue)
		localStorage.setItem('GIRIS_KODU', sessionValue.GIRIS_KODU)
		localStorage.setItem('PAROLA', sessionValue.PAROLA)
		localStorage.setItem('DATA', JSON.stringify(sessionValue))

		history.push('/dashboard')
	}

	const RedirectDashboard = ({ state }) => (
		<Redirect to={{ pathname: '/dashboard', state: state }} />
	)

	useEffect(() => {
		if (mutation.data) {
			if (mutation.data.data.AUTH === true) {
				console.log('mutation data', mutation.data.data)
				handleSuccess(mutation.data.data)
			}
		}
		;() => handleSuccess()
	},[mutation])
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
						className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
						type="text"
						required
						placeholder="Kullanıcı numaranız"
						onChange={e => setUsername(e.target.value)}
					/>
				</div>
			</div>
				<div className="mb-4 w-full  px-2">
					<input
						className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
						type={showPassword ? 'text' : 'password'}
						required
						placeholder="Parolanız"
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
						checked=""
						onChange={setAboneAccount}
						value="abone"
					/>
					<span>Kullanıcı</span>
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

						{mutation.isSuccess ? 'Başarılı' : null}
						<button
							className="mb-2 w-full py-4 bg-purple-600 hover:bg-purple-700 rounded text-sm font-bold text-gray-50"
							type="submit">
							{mutation.isLoading ? 'Gönderiliyor' : 'Giriş yapın'}
						</button>
					</>
				)}
				<span className="text-gray-400 text-xs">
					Hesabınıza erişemiyor musunuz? Hemen
					<a className="text-purple-600 hover:underline" href="#">
						bizi arayın
					</a>
				</span>
			</div>
		</form>
	)
}

export default LoginForm
