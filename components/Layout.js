import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='bg-gray-200'>
			<Navbar />
			<div className='md:px-16'>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
