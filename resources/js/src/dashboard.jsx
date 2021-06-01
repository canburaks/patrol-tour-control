import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Link } from 'react-router-dom'
import Datatable from './components/datatable'
import SignalTable from './components/signaltable'
import { Grid, html } from 'gridjs'
import 'gridjs/dist/theme/mermaid.css'
import { _ } from 'gridjs-react'
import { useMutation } from 'react-query'
import axios from 'axios'

const Dashboard = props => {
	const ACCOUNT_DATA = JSON.parse(localStorage.getItem('DATA'))
	const gridRef = useRef(null)
	console.log('dashboard props', props, ACCOUNT_DATA)

	function listBayiMusterisi() {
		if (ACCOUNT_DATA.TYPE === 'bayi') {
			const MUSTERILER = ACCOUNT_DATA.MUSTERILER
			const records = MUSTERILER.map(musteri => [
				musteri.FIRMA_ADI,
				musteri.F_KODU,
				musteri.BAYI,
				_(
					<a
						title="Abonenizin sinyallerini görmek için tıklayınız."
						href={`/account/${musteri.F_KODU}/signals`}
						className={`inline-block ml-2 py-1 px-2 bg-green-400 hover:bg-green-600 duration-500 transition-all ease-out  transit text-white text-xs rounded-full`}>
						Sinyaller
					</a>
				)
				//`/account/${musteri.F_KODU}/signals`
			])
			const linkClass =
				'inline-block ml-2 py-1 px-2 bg-green-500 text-white text-xs rounded-full'
			console.log('gridjs', records)
			new Grid({
				columns: ['Firma', 'Firma No', 'Bayi no', 'Bağlantı'],
				data: [...records]
			}).render(gridRef.current)
		}
	}

	function listLatestMesajlar() {
		if (ACCOUNT_DATA.TYPE === 'abone') {
			const latestMesajlar = ACCOUNT_DATA.LATEST_MESAJLAR
			const records = latestMesajlar.map(m => [
				m.MESAJ,
				m.BOLGE,
				m.KULLANICI,
				new Date(m.TARIH).toLocaleString('tr-TR', {
					weekday: 'long',
					year: 'numeric',
					month: 'long',
					day: '2-digit'
				}),
				new Date(m.TARIH).toLocaleString('tr-TR', {
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit'
				}),
				m.MESAJTIPI,
				m.ALARMKODU
			])

			console.log('gridjs LATEST_MESAJLAR', latestMesajlar)
			new Grid({
				columns: ['Mesaj', 'Bölge', 'Kullanıcı', 'Tarih', 'Saat', 'Sinyal', 'Kod'],
				data: [...records]
			}).render(gridRef.current)
		}
	}

	function signOut() {
		localStorage.removeItem('PAROLA')
		localStorage.removeItem('GIRIS_KODU')
		localStorage.removeItem('DATA')
		window.setTimeout(function () {
			window.history.pushState('/')
		}, 500)
	}

	useEffect(() => {
		if (gridRef && gridRef.current) {
			if (ACCOUNT_DATA && ACCOUNT_DATA.TYPE === 'bayi') {
				listBayiMusterisi()
			} else if (ACCOUNT_DATA && ACCOUNT_DATA.TYPE === 'abone') {
				listLatestMesajlar()
			}
		}
	}, [gridRef])

	return (
		<div className="w-full h-auto">
			<div className="mx-4 sm:mx-16 md:mx-24 h-auto">
				<div className="container px-4 mx-auto h-auto">
					<section className="py-8 px-6">
						<div className="flex flex-wrap items-center">
							<div className="w-full lg:w-auto flex items-center mb-4 lg:mb-0">
								<h2 className="text-2xl font-bold">{ACCOUNT_DATA.NAME}</h2>
							</div>
						</div>
					</section>
					{ACCOUNT_DATA.TYPE === 'bayi' && (
						<section className="py-8">
							<div className="container px-4 mx-auto">
								<div className="flex flex-wrap -m-4">
									<div className="w-full p-4">
										<div className="p-6 mb-8 bg-white shadow rounded">
											<div className="flex mb-3 items-center justify-between">
												<h3 className="text-gray-500">
													Toplam abone sayısı
												</h3>
											</div>
											<div className="flex items-center mb-3">
												<span className="text-4xl font-bold">2 Abone</span>
											</div>
											<div className="relative w-full h-1 mb-2 bg-gray-50 rounded">
												<div className="absolute top-0 left-0 w-4/6 h-full bg-purple-500 rounded"></div>
											</div>
											<p className="text-xs text-gray-200">Bugüne kadar</p>
										</div>
									</div>
								</div>
							</div>
						</section>
					)}

					<section className="py-8 h-auto">
						<h3 className="text-xl font-bold ml-2">
							{ACCOUNT_DATA.TYPE === 'abone' ? 'En yeni sinyaller' : 'Aboneleriniz'}
						</h3>

						<section id="wrapper" ref={gridRef}></section>
					</section>
				</div>
				<div className="container px-4 mx-auto"></div>
			</div>
		</div>
	)
}

export default Dashboard
