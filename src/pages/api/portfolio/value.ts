import { NextApiRequest, NextApiResponse } from 'next'
import { getServerAuthSession } from '../../../server/common/get-server-auth-session'
import { prisma } from '../../../server/db/client'
import axios from 'axios'

const value = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getServerAuthSession({ req, res })

	const { method } = req

	if (method !== 'GET') {
		return res.status(400).json({ message: 'Only GET method allowed' })
	} else if (!session) {
		res.send({
			error: 'You must be signed in to view the protected content on this page.',
		})
	}

	// MOCK DATA
	// TODO: GET REAL DATA FROM DB
	const holdings = ['INTC', 'AAPL', 'TSLA']

	try {
		const requestsArray = holdings.map((holding) =>
			axios.request({
				method: 'GET',
				url: 'https://www.alphavantage.co/query',
				params: {
					apikey: process.env.ALPHA_VANTAGE_API_KEY,
					function: 'TIME_SERIES_DAILY',
					symbol: holding,
					outputsize: 'compact',
					datatype: 'json',
					interval: '60min',
				},
			})
		)

		const responses = await Promise.all(requestsArray)

		const results = responses.map((response) => ({
			[response.data['Meta Data']['2. Symbol']]:
				response.data['Time Series (Daily)'],
		}))

		let today = new Date().toISOString().slice(0, 10)

		return res.status(200).json(results)
	} catch (error) {
		let message = 'Unknown Error'

		if (error instanceof Error) message = error.message
		else message = String(error)

		return res.status(500).json({ message })
	}
}

export default value
