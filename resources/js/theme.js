const themify = {
	switchToDarkMode: function () {
		document.documentElement.classList.add('dark')
		document.documentElement.dataset.theme = 'dark'
		localStorage.theme = 'dark'
	},
	switchToLightMode: function () {
		document.documentElement.classList.remove('dark')
		localStorage.theme = 'light'
		document.documentElement.dataset.theme = 'light'
	},
	switchToDarkModeByUserPreference: function () {
		document.documentElement.classList.add('dark')
	},
	prefersDarkModeByOS: function () {
		// if theme is not setted and user prefers dark mode by OS return true
		return window.matchMedia('(prefers-color-scheme: dark)').matches
	},
	isDarkModeRendered: function () {
		return localStorage.theme === 'dark' || document.documentElement.className.includes('dark')
	},
	initialize: function () {
		// first: check if localStorage has selcted theme
		let selectedTheme = localStorage.theme
		console.log('selectedTheme', selectedTheme)
		// if user hasn't choose any theme check OS level preference
		if (!selectedTheme) {
			// if user prefers dark mode by OS, set dark mode by class appending
			if (this.prefersDarkModeByOS()) {
				console.log('user prefer dark mode by OS level')
				this.switchToDarkModeByUserPreference()
			}
		}
		// if user has chose light mode before
		else if (selectedTheme === 'light') this.switchToLightMode()
		// if user has chose dark mode before
		else if (selectedTheme === 'dark') this.switchToDarkMode()

		window.addEventListener('load', function () {
			let toggle = document.getElementById('toggle')
			if (toggle) {
				toggle.value = themify.isDarkModeRendered() ? 'on' : 'off'
				window.setTimeout(function () {
					toggle.addEventListener('change', themify.switch)
				}, 500)
			}
		})
	},
	switch: function (e) {
		console.log('switch value', e.target.value)
		// check if dark mode rendered then switch to light mode
		if (themify.isDarkModeRendered()) {
			themify.switchToLightMode()
			e.target.checked = false
		}
		// else switch to dark mode
		else {
			themify.switchToDarkMode()
			e.target.checked = true
		}
	},
}
themify.initialize()
export default themify
/*
window.themeSwitch = function themeSwitch() {
	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
	console.log('themeSwitch function --> localStorage.theme', localStorage.theme)
	console.log(
		'themeSwitch function --> documentElement.classList',
		document.documentElement.classList
	)

	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark')
		localStorage.theme = 'dark'
	} else {
		console.log('changing to Light')
		document.documentElement.classList.remove('dark')
		localStorage.theme = 'light'
	}

	// Whenever the user explicitly chooses light mode

	// Whenever the user explicitly chooses dark mode

	// Whenever the user explicitly chooses to respect the OS preference
	localStorage.removeItem('theme')
}
*/
