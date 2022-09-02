import { NextPage } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'

const login: NextPage = () => {
	const { data: session } = useSession()

	if (session) {
		return (
			<div>
				<h1>Welcome {session.user?.email}</h1>
				{session.user?.image && <img src={session.user.image} />}

				<button onClick={() => signOut()}>Sign out</button>
			</div>
		)
	} else {
		return (
			<div>
				<button onClick={() => signIn()}>Sign in</button>
			</div>
		)
	}
}

export default login
