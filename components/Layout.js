import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, bgColor }) => {
	return (
		<div className={`${bgColor}`}>
			<Navbar />
			<div className='md:px-16'>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
