import { NextPage } from 'next'
import { useState } from 'react'
import PieChart from './PieChart'

import useHidanStore from '../store'

const PortfolioPie: NextPage = () => {
	const { currentHoldings } = useHidanStore()

	const [portfolioHoldings, setPortfolioHolding] = useState({
		labels: currentHoldings.map((holding) => {
			return holding.symbol
		}),
		datasets: [
			{
				label: 'Portfolio Value',
				data: currentHoldings.map((holding) => holding.value),
				backgroundColor: ['#4e4e94'],
				borderColor: '#9CA3DB',
				borderWidth: 5,
			},
		],
	})

	return (
		<div className="card sm:w-full lg:w-3/5 bg-base-100 shadow-md mb-5 hover:shadow-xl transition-shadow duration-200">
			<div className="card-body items-center justify-center justify-items-center px-1">
				<div className="sm:w-full lg:w-3/5">
					<PieChart chartData={portfolioHoldings} />
				</div>
			</div>
		</div>
	)
}

export default PortfolioPie
