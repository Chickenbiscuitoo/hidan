const CardForm = () => {
	return (
		<div className="card sm:w-full lg:w-3/5 bg-base-100 shadow-md mb-2 hover:shadow-xl transition-shadow duration-200 cursor-pointer">
			<div className="card-body">
				<div className="flex w-full">
					<div className="grid h-16 w-1/5 flex-grow card bg-base-300 rounded-box place-items-center">
						<h2 className="card-title">jou</h2>
					</div>
					<div className="divider divider-horizontal"></div>
					<div className="grid h-16 w-2/5 flex-grow card bg-base-300 rounded-box place-items-center">
						<span className="inline text-lg">
							<h2 className="inline font-bold">jou</h2>
							<h2 className="inline"> 123</h2>
						</span>
					</div>
					<div className="divider divider-horizontal"></div>
					<div className="grid h-16 w-1/5 flex-grow card bg-base-300 rounded-box place-items-center">
						<h2 className="card-title">123</h2>
					</div>
					<div className="divider divider-horizontal"></div>
					<div className="grid h-16 w-3/12 flex-grow card rounded-box place-items-center">
						<span className="text-xl flex items-center text-center">
							<h2 className="font-extrabold">jou</h2>
							<h2 className="font-bold">123</h2>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardForm
