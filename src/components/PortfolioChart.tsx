import { NextPage } from 'next'
import { useState } from 'react'
import LineChart from './LineChart'

import { getMonth } from 'date-fns'
import { parseISO } from 'date-fns'

import useHidanStore from '../store'

const PortfolioChart: NextPage = () => {
	const { historyPortfolioValue } = useHidanStore()

	const [portfolioHistory, setPortfolioHistory] = useState({
		labels: historyPortfolioValue.map((data) => {
			const months = [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			]
			const monthNumber = getMonth(parseISO(data.date))
			return months[monthNumber + 1]
		}),
		datasets: [
			{
				label: 'Portfolio Value',
				data: historyPortfolioValue.map((data) => data.value),
				backgroundColor: ['#4e4e94'],
				borderColor: '#4e4e94',
				borderWidth: 2,
			},
		],
	})

	return (
		<div className="w-full">
			<div className="sm:w-full lg:w-3/5">
				<LineChart chartData={portfolioHistory} />
			</div>
		</div>
	)
}

export default PortfolioChart
