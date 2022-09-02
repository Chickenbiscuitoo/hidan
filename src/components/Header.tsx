import { NextPage } from 'next'
import { useSession, signOut } from 'next-auth/react'
import { useState } from 'react'

import { BiLogOutCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'

const Header: NextPage = () => {
	const { data: session } = useSession({ required: true })

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl font-bold">
					hidan
				</a>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
					<label className="btn btn-ghost btn-circle avatar">
						<div
							className="w-10 rounded-full"
							onClick={() =>
								setIsMenuOpen((prevState) => !prevState)
							}
						>
							{session?.user?.image && (
								<img src={session?.user?.image} />
							)}
						</div>
					</label>
					{isMenuOpen && (
						<ul className="menu menu-compact absolute mt-3 p-2 shadow bg-base-100 rounded-box w-50 top-10 right-1">
							<li>
								<h5 className="font-semibold inline">
									{session?.user?.name?.split(' ')[0]}
								</h5>
							</li>
							<li>
								<a>
									<FiSettings />
									Settings
								</a>
							</li>
							<li>
								<a onClick={() => signOut()}>
									<BiLogOutCircle />
									Logout
								</a>
							</li>
						</ul>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
