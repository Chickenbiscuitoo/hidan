import { NextPage } from 'next'
import { useSession, signIn } from 'next-auth/react'
import { useRouter, NextRouter } from 'next/router'
import { useEffect } from 'react'

import { AiFillGithub } from 'react-icons/ai'

const login: NextPage = () => {
	const { data: session } = useSession()

	const router: NextRouter = useRouter()

	useEffect(() => {
		if (session) {
			router.push('/')
		}
	}, [session?.user?.id])

	return (
		<div className="mx-10">
			<main>
				<div className="hero min-h-screen ">
					<div className="hero-content text-center">
						<div className="max-w-md">
							<h1 className="text-5xl font-bold text-accent">
								hidan
							</h1>
							<h2 className="mt-2">╰(*°▽°*)╯</h2>
							<p className="py-6">
								Track your overall portfolio performance in
								one place. You can track your stocks,
								crypto, ETF (not NFT) investments. Open
								source and free forever.
							</p>
							<button
								onClick={() => {
									signIn('google')
								}}
								className="btn btn-accent"
							>
								Sign In with Google
							</button>
						</div>
					</div>
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

export default login
