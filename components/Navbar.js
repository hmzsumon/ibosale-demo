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
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative flex justify-between items-center  lg:w-auto lg:static lg:block lg:justify-start'>
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
						<button
							className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
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
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<li className='nav-item'>
								<Link href='/'>
									<a className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
										<IoIosChatboxes className='w-6 h-6' />
										<span className='ml-2'>Chat</span>
									</a>
								</Link>
							</li>
							<li className='nav-item'>
								<Link href='/login'>
									<a className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'>
										<FaUser className='w-5 h-5' />
										<span className='ml-2'>Login</span>
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
