import React from 'react'
import { useState } from 'react'
import { Route, Link, useHistory } from 'react-router-dom'

const Navbar = props => {
	let history = useHistory();
	const [isOpen, setOpen] = useState(false)
	const ACCOUNT_DATA = JSON.parse(localStorage.getItem("DATA"))
	function signOut(){
		localStorage.removeItem("DATA");
		localStorage.removeItem("GIRIS_KODU");
		localStorage.removeItem("PAROLA");
		setTimeout(function(){history.push("/")}, 500)
	}
	return (
<section className="w-full px-8 text-gray-700 bg-white ">
    <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
            <Link to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">filizgüvenlik<span className="text-indigo-600">.</span></span>
            </Link>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                <Link to="/" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Anasayfa</Link>
				{ACCOUNT_DATA?.TYPE === "bayi" && <Link to="/dashboard" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Panel</Link>}
				{ACCOUNT_DATA?.TYPE === "abone" && <Link to="/account/{{ F_KODU }}" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Panel</Link>}
                {/*<Link to="/form" className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">Mail test</Link>*/}
            </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
			{ACCOUNT_DATA?.AUTH === true &&
				<button href="/logout" onClick={signOut} className="text-teal-600 px-8 py-2 border-teal-600 font-medium leading-6 border-2 rounded-lg transition ease-out duration-300 hover:text-blueGray-100 hover:bg-teal-600">
					Çıkış yap
				</button>
			}
        </div>
    </div>
</section>

	)
}

export default Navbar
