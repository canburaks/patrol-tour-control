import React from 'react'
import { useState } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import LoginForm from './forms/login'
import LandingPage from './landingpage'
import Dashboard from './dashboard'

const App = props => {
	console.log('app props', props)
	const ACCOUNT_DATA = JSON.parse(localStorage.getItem("DATA"))
	console.log("landing page auth data", ACCOUNT_DATA)
	return (
		<>
			<Navbar />
				<Switch>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route path="/">
						<LandingPage />
					</Route>
					<Route path="*">
						<Redirect to="/" />
					</Route>
				</Switch>
			<Footer />
		</>
	)
}

export default App
