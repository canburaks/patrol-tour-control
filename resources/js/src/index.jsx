import React from 'react'
import { useState } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import LoginForm from './forms/login'
import LandingPage from './landingpage'
import Operator from './operator'
import Account from './account'

const App = props => {
	console.log('app props', props)
	const ACCOUNT_DATA = JSON.parse(localStorage.getItem('DATA'))
	console.log('landing page auth data', ACCOUNT_DATA)
	return (
		<>
			<Navbar />
			<main className="relative m-0 p-0 justify-start flex items-stretch h-auto">
				<Switch>
					<Route path="/operator/:girisKodu">
						<Operator />
					</Route>
					<Route path="/account/:FIRMA_KODU/signals/:PAGE">
						<Account />
					</Route>
					<Route path="/account/:FIRMA_KODU">
						<Account />
					</Route>
					<Route path="/">
						<LandingPage />
					</Route>
					<Route path="*">
						<Redirect to="/" />
					</Route>
				</Switch>
			</main>
			<Footer />
		</>
	)
}

export default App
