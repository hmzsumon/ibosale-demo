import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='flex items-center justify-around h-auto py-4 mt-10 border-t-2 border-green-500'>
			<div>
				<p className=''>All rights reserved. IBO.sale</p>
			</div>
			<div>
				<Link href='/'>
					<a>
						<Image src='/images/logo.png' alt='logo' width={150} height={40} />
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
