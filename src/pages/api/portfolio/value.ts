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
		// const requestsArray = holdings.map((holding) =>
		// 	axios.request({
		// 		method: 'GET',
		// 		url: 'https://www.alphavantage.co/query',
		// 		params: {
		// 			apikey: process.env.ALPHA_VANTAGE_API_KEY,
		// 			function: 'TIME_SERIES_DAILY',
		// 			symbol: holding,
		// 			outputsize: 'compact',
		// 			datatype: 'json',
		// 			interval: '60min',
		// 		},
		// 	})
		// )

		// const responses = await Promise.all(requestsArray)

		// const results = responses.map((response) => ({
		// 	[response.data['Meta Data']['2. Symbol']]:
		// 		response.data['Time Series (Daily)'],
		// }))

		const results = [
			{
				INTC: {
					'2022-09-16': {
						'1. open': '28.7000',
						'2. high': '29.3200',
						'3. low': '28.4200',
						'4. close': '29.2400',
						'5. volume': '72747992',
					},
					'2022-09-15': {
						'1. open': '29.1500',
						'2. high': '29.4100',
						'3. low': '28.7100',
						'4. close': '28.8400',
						'5. volume': '39919105',
					},
					'2022-09-14': {
						'1. open': '29.5500',
						'2. high': '29.7650',
						'3. low': '29.0100',
						'4. close': '29.1800',
						'5. volume': '40767169',
					},
				},
			},
			{
				AAPL: {
					'2022-09-16': {
						'1. open': '151.2100',
						'2. high': '151.3500',
						'3. low': '148.3700',
						'4. close': '150.7000',
						'5. volume': '162278841',
					},
					'2022-09-15': {
						'1. open': '154.6500',
						'2. high': '155.2400',
						'3. low': '151.3800',
						'4. close': '152.3700',
						'5. volume': '90481110',
					},
					'2022-09-14': {
						'1. open': '154.7850',
						'2. high': '157.1000',
						'3. low': '153.6106',
						'4. close': '155.3100',
						'5. volume': '87965409',
					},
				},
			},
			{
				TSLA: {
					'2022-09-16': {
						'1. open': '299.6050',
						'2. high': '303.7100',
						'3. low': '295.6005',
						'4. close': '303.3500',
						'5. volume': '87087786',
					},
					'2022-09-15': {
						'1. open': '301.8250',
						'2. high': '309.1200',
						'3. low': '300.7247',
						'4. close': '303.7500',
						'5. volume': '64795523',
					},
					'2022-09-14': {
						'1. open': '292.2400',
						'2. high': '306.0000',
						'3. low': '291.6400',
						'4. close': '302.6100',
						'5. volume': '72628653',
					},
				},
			},
		]

		const prices = results.map((result) => {
			const symbol = Object.keys(result)[0]
			const price =
				Object.values(result)[0][
					Object.keys(Object.values(result)[0])[0] || '0'
				]['4. close']

			return {
				[symbol || 'X']: price,
			}
		})

		return res.status(200).json(prices)
	} catch (error) {
		let message = 'Unknown Error'

		if (error instanceof Error) message = error.message
		else message = String(error)

		return res.status(500).json({ message })
	}
}

export default value
