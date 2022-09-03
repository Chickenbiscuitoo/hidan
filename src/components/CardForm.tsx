import { NextPage } from 'next'
import { AiOutlineClose } from 'react-icons/ai'

interface CardFormProps {
	closeForm: () => any
}

const CardForm: NextPage<CardFormProps> = ({ closeForm }) => {
	return (
		<div className="card sm:w-full lg:w-3/5 bg-base-100 shadow-md mb-2 hover:shadow-xl transition-shadow duration-200 cursor-pointer">
			<div className="card-body mt-2 relative">
				<div className="flex w-full">
					<div className="grid h-16 w-1/5 flex-grow card bg-base-300 rounded-box place-items-center">
						<input
							type="text"
							placeholder="Symbol"
							className="input bg-base-300 w-full h-full max-w-xs border-transparent card-title"
						/>
					</div>
					<div className="divider divider-horizontal"></div>
					<div className="grid h-16 w-1/5 flex-grow card bg-base-300 rounded-box place-items-center">
						<input
							type="text"
							placeholder="Amouth"
							className="input bg-base-300 w-full h-full max-w-xs border-transparent card-title inline"
						/>
					</div>
					<h3 className="card-title mx-2 font-extrabold">@</h3>
					<div className="grid h-16 w-1/5 flex-grow card bg-base-300 rounded-box place-items-center">
						<input
							type="text"
							placeholder="Price"
							className="input bg-base-300 w-full h-full max-w-xs border-transparent card-title inline"
						/>
					</div>

					<div className="divider divider-horizontal"></div>
					<div className="grid h-16 w-2/5 flex-grow card rounded-box place-items-center">
						<input
							type="date"
							className="input bg-base-300 w-full h-full max-w-xs border-transparent card-title inline"
						/>
					</div>
				</div>
			</div>
			<div className="w-full flex place-content-center">
				<button className="btn btn-outline btn-success w-10/12 mb-5">
					Submit
				</button>
			</div>
			<AiOutlineClose
				className="w-5 h-5 absolute top-3 right-3 hover:text-error transition duration-200"
				onClick={closeForm}
			/>
		</div>
	)
}

export default CardForm
