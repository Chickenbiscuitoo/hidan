import { NextPage } from 'next'

interface HoldingCardProps {
	holding: {
		name: string
		symbol: string
		amount: number
		price: number
	}
}

const HoldingCard: NextPage<HoldingCardProps> = ({ holding }) => {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<div className="card-body">
				<div className="flex w-full">
					<div className="grid h-16 flex-grow card bg-base-300 rounded-box place-items-center">
						content
					</div>
					<div className="divider divider-horizontal"></div>
					<div className="grid h-16 flex-grow card bg-base-300 rounded-box place-items-center">
						content
					</div>
				</div>
			</div>
		</div>
	)
}

export default HoldingCard
