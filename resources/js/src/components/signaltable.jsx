import React from 'react'
import { useState, useRef, useEffect } from 'react'

const SignalTable = ({ mesajlar }) => {
	const order = [
		{ header: 'MESAJ', row: 'MESAJ' },
		{ header: 'BÖLGE', row: 'BOLGE' },
		{ header: 'KULLANICI', row: 'KULLANICI' },
		{ header: 'TARİH', row: 'TARIH' },
		{ header: 'SİNYAL', row: 'MESAJTIPI' },
		{ header: 'KOD', row: 'ALARMKODU' }
	]
	const orderedHeaders = order.map(o => o.header)

	const TableHeader = ({ column }) => (
		<th className="flex items-center pl-6 py-4 font-medium">
			<span>{column}</span>
			<span className="ml-2"></span>
		</th>
	)
	const TableRow = ({ mesaj }) => (
		<tr className="text-xs bg-gray-50">
			<td className="inline-block py-1 px-2">
				<span className="inline-block py-1 px-2 text-white bg-green-500 rounded-full">
					{mesaj[order[0].row]}
				</span>
			</td>
			<td className="flex items-center py-5 px-6 font-medium">
				<p>{mesaj[order[1].row]}</p>
			</td>
			<td className="flex items-center py-5 px-6 font-medium">
				<p>{mesaj[order[2].row]}</p>
			</td>
			<td className="font-medium">
				{mesaj[order[3].row].toLocaleString('tr-TR', {
					weekday: 'long',
					year: 'numeric',
					month: 'long',
					day: '2-digit'
				}) +
					' ' +
					mesaj[order[3].row].toLocaleString('tr-TR', {
						hour: '2-digit',
						minute: '2-digit',
						second: '2-digit'
					})}
			</td>
			<td className="font-medium">{mesaj[order[4].row]}</td>
			<td>{mesaj[order[5].row]}</td>
		</tr>
	)
	return (
		<section className="py-8 relative h-auto">
			<div className="container px-4 mx-auto">
				<div className="pt-6 bg-white shadow rounded">
					<div className="px-6 border-b">
						<div className="flex flex-wrap items-center mb-6">
							<h3 className="text-xl font-bold">Recent Transactions</h3>
							{/*<a
								className="ml-auto flex items-center py-2 px-3 text-xs text-white bg-indigo-500 hover:bg-indigo-600 rounded"
								href="#">
								<span className="mr-1">
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M13 8.33337C12.6 8.33337 12.3333 8.60004 12.3333 9.00004V11.6667C12.3333 12.0667 12.0666 12.3334 11.6666 12.3334H2.33331C1.93331 12.3334 1.66665 12.0667 1.66665 11.6667V9.00004C1.66665 8.60004 1.39998 8.33337 0.99998 8.33337C0.59998 8.33337 0.333313 8.60004 0.333313 9.00004V11.6667C0.333313 12.8 1.19998 13.6667 2.33331 13.6667H11.6666C12.8 13.6667 13.6666 12.8 13.6666 11.6667V9.00004C13.6666 8.60004 13.4 8.33337 13 8.33337ZM4.79998 4.13337L6.33331 2.60004V9.00004C6.33331 9.40004 6.59998 9.66671 6.99998 9.66671C7.39998 9.66671 7.66665 9.40004 7.66665 9.00004V2.60004L9.19998 4.13337C9.46665 4.40004 9.86665 4.40004 10.1333 4.13337C10.4 3.86671 10.4 3.46671 10.1333 3.20004L7.46665 0.533374C7.19998 0.266707 6.79998 0.266707 6.53331 0.533374L3.86665 3.20004C3.59998 3.46671 3.59998 3.86671 3.86665 4.13337C4.13331 4.40004 4.53331 4.40004 4.79998 4.13337Z"
											fill="#AFABF1"></path>
									</svg>
								</span>
								<span>Export</span>
							</a>*/}
						</div>
					</div>
					<div>
						<table className="table-auto w-full">
							<thead>
								<tr className="text-xs text-gray-500 text-left flex">
									{orderedHeaders.map((oh,i) => (
										<TableHeader column={oh} key={`latest-h-${i}`} />
									))}
								</tr>
							</thead>
							<tbody>
								{mesajlar.map(m => (
									<TableRow mesaj={m} key={`latest-r-${m.TARIH}`} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SignalTable
