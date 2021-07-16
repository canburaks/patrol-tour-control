import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Link, useLocation, useParams } from 'react-router-dom'
import Datatable from './components/datatable'
import SignalTable from './components/signaltable'
import { Grid, html } from 'gridjs'
import 'gridjs/dist/theme/mermaid.css'
import { _ } from 'gridjs-react'
import { useMutation, useQuery } from 'react-query'
import axios from 'axios'

function useMesajlar(FIRMA_KODU, PAGE = 1) {
	const URL = `/resource/account/${FIRMA_KODU}/signals/${PAGE}`
	return useQuery('MESAJLAR', async () => {
		const { data } = await axios.get(URL)
		return data
	})
}

const Account = props => {
	const params = useParams()
	console.log('Account page params: ', params)
	const { status, data, error, isFetching } = useMesajlar(params.FIRMA_KODU, params.PAGE)
	const gridRef = useRef(null)
	console.log('status', status, data, error)

	return <div class="min-h-9/10"></div>
}

export default Account
