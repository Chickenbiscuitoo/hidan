import { NextPage } from 'next'

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
	return (
		<div className="card  sm:w-full lg:w-3/5 bg-base-100 shadow-md mb-2">
			<div className="card-body">
				<div className="flex w-full">
					<div className="grid h-16 w-1/5 flex-grow card bg-base-300 rounded-box place-items-center">
						<h2 className="card-title">{holding.symbol}</h2>
					</div>
					<div className="divider divider-horizontal"></div>
					<div className="grid h-16 w-3/5 flex-grow card bg-base-300 rounded-box place-items-center">
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
				</div>
			</div>
		</div>
	)
}

export default HoldingCard
