import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import useHidanStore from '../store'

import { AiFillGithub } from 'react-icons/ai'

import Header from '../components/Header'
import PortfolioChart from '../components/PortfolioChart'
import HoldingCard from '../components/HoldingCard'

const Home: NextPage = () => {
	useSession({ required: true })
	const { currentHoldings, historyHoldings } = useHidanStore()

	return (
		<div className="mx-10">
			<Head>
				<title>HIDAN</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<Header />
			</header>

			<main className="min-h-screen flex-1 flex flex-col   justify-items-center my-8 p-8">
				<div className="flex flex-col items-center justify-center justify-items-center">
					<PortfolioChart />
				</div>
				<div className="flex flex-col items-center justify-center justify-items-center">
					{currentHoldings.map((holding) => {
						const hisHolding = historyHoldings.find(
							(hol) => hol.name === holding.symbol
						)

						return (
							<HoldingCard
								holding={holding}
								historyHolding={hisHolding}
								key={holding.symbol}
							/>
						)
					})}
				</div>
			</main>

			<footer className="flex flex-row p-4 border-t-2 justify-center">
				<a
					href="https://github.com/Chickenbiscuitoo"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-row items-center p-2 gap-2"
				>
					Created by Chickenbiscuitoo
					<span className="">
						<AiFillGithub />
					</span>
				</a>
			</footer>
		</div>
	)
}

export default Home
