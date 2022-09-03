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
			return `${months[monthNumber + 1]} ${data.date.slice(0, 4)}`
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
		<div className="card sm:w-full lg:w-3/5 bg-base-100 shadow-md mb-5 hover:shadow-xl transition-shadow duration-200">
			<div className="card-body items-center justify-center justify-items-center px-1">
				<div className="sm:w-full lg:w-3/5">
					<LineChart chartData={portfolioHistory} />
				</div>
			</div>
		</div>
	)
}

export default PortfolioChart
