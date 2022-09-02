import { NextPage } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'
import { RiLogoutCircleLine } from 'react-icons/ri'

const Header: NextPage = () => {
	const { data: session } = useSession({ required: true })

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">hidan</a>
			</div>
			<div className="flex-none">
				<div className="">
					<label className="btn btn-ghost btn-circle">
						<div className="text-3xl">
							<RiLogoutCircleLine />
						</div>
					</label>
				</div>
				<div
					className="dropdown dropdown-end"
					onClick={() =>
						setIsMenuOpen((prevState: boolean) => !prevState)
					}
				>
					<label className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							{session?.user?.image && (
								<img src={session?.user?.image} />
							)}
						</div>
					</label>
					{isMenuOpen && (
						<ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							<li>
								<a className="justify-between">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
