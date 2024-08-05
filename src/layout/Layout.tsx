import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='lg:h-screen flex flex-col bg-gray-50 lg:overflow-hidden'>
			<header className='bg-white shadow-sm p-4'>
				<div className='container mx-auto'>
					<Link to='/'>
						<h1 className='text-2xl font-bold animate-slide-in-left'>Contacts Application</h1>
					</Link>
				</div>
			</header>
			<main className='pt-14 flex-1'>{children}</main>
			<footer className='bg-white shadow-inner p-4'>
				<div className='container'>
					<p className='text-gray-600'>© 2024 Contacts Application</p>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
