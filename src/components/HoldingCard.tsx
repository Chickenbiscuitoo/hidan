import { NextPage } from 'next'

import { AiOutlineArrowUp } from 'react-icons/ai'
import { AiOutlineArrowDown } from 'react-icons/ai'

interface HoldingCardProps {
	holding: {
		name: string
		symbol: string
		amount: number
		price: number
		value: number
	}
}

const HoldingCard: NextPage<HoldingCardProps> = ({ holding }) => {
	const profit = holding.value - holding.amount * holding.price
	const profitPercentage = (
		(profit / (holding.amount * holding.price)) *
		100
	).toFixed(2)

	const profitColor = () => {
		if (profit === 0) {
			return 'bg-gray-500'
		} else if (profit > 0) {
			return 'bg-success'
		} else {
			return 'bg-error'
		}
	}

	const profitSymbol = () => {
		if (profit === 0) {
			return ''
		} else if (profit > 0) {
			return <AiOutlineArrowUp />
		} else {
			return <AiOutlineArrowDown />
		}
	}

	return (
		<div className="card  sm:w-full lg:w-3/5 bg-base-100 shadow-md mb-2">
			<div className="card-body">
				<div className="flex w-full">
					<div className="grid h-16 w-1/5 flex-grow card bg-base-300 rounded-box place-items-center">
						<h2 className="card-title">{holding.symbol}</h2>
					</div>
					<div className="divider divider-horizontal"></div>
					<div className="grid h-16 w-2/5 flex-grow card bg-base-300 rounded-box place-items-center">
						<span className="inline text-lg">
							<h2 className="inline font-bold">
								{holding.amount}
							</h2>
							<h2 className="inline"> @{holding.price}$</h2>
						</span>
					</div>
					<div className="divider divider-horizontal"></div>
					<div className="grid h-16 w-1/5 flex-grow card bg-base-300 rounded-box place-items-center">
						<h2 className="card-title">{holding.value}$</h2>
					</div>
					<div className="divider divider-horizontal"></div>
					<div
						className={`grid h-16 w-3/12 flex-grow card ${profitColor()} rounded-box place-items-center`}
					>
						<span className="text-xl flex items-center text-center">
							<h2 className="font-extrabold">
								{profitSymbol()}
							</h2>
							<h2 className="font-bold">
								{profitPercentage}%
							</h2>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HoldingCard
