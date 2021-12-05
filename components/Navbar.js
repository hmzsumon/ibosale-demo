import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosChatboxes } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';

export default function Navbar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-green-500'>
				<div className='container flex flex-wrap items-center justify-between px-4 mx-auto'>
					<div className='relative flex items-center justify-between w-full lg:w-auto lg:static lg:block lg:justify-start'>
						<Link href='/'>
							<a className='flex items-center'>
								<Image
									src='/images/logo.png'
									alt='logo'
									width={150}
									height={40}
								/>
							</a>
						</Link>
						<Link href='/post'>
							<a className='flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75'>
								<button className='px-4 py-3 ml-2 font-bold text-gray-700 bg-yellow-400 rounded-md md:hidden'>
									Post Your Add
								</button>
							</a>
						</Link>
						<button
							className='block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<AiOutlineMenu className='w-8 h-8' />
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center' +
							(navbarOpen ? ' flex' : ' hidden')
						}
						id='example-navbar-danger'
					>
						<ul className='flex flex-col list-none lg:flex-row lg:ml-auto lg:items-center'>
							<li className='nav-item'>
								<Link href='/'>
									<a className='flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75'>
										<IoIosChatboxes className='w-6 h-6' />
										<span className='ml-2'>Chat</span>
									</a>
								</Link>
							</li>
							<li className='nav-item'>
								<Link href='/login'>
									<a className='flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75'>
										<FaUser className='w-5 h-5' />
										<span className='ml-2'>Login</span>
									</a>
								</Link>
							</li>
							<li className='nav-item'>
								<Link href='/post'>
									<a className='flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75'>
										<button className='hidden px-4 py-3 ml-2 font-bold text-gray-700 bg-yellow-400 rounded-md md:block'>
											Post Your Add
										</button>
									</a>
								</Link>
							</li>

							<li className='nav-item'>
								<Link href='/post/new_ad'>
									<a className='flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75'>
										<button className='hidden px-4 py-3 ml-2 font-bold text-gray-700 bg-red-400 rounded-md md:block'>
											Post Your Add
										</button>
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
