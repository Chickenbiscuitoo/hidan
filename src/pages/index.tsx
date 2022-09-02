import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession } from 'next-auth/react'

import { AiFillGithub } from 'react-icons/ai'

import Header from '../components/Header'

const Home: NextPage = () => {
	useSession({ required: true })

	return (
		<div className="mx-10">
			<Head>
				<title>HIDAN</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<Header />
			</header>

			<main className="min-h-screen flex-1 items-center my-8 p-8">
				<div>hidan app</div>
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
