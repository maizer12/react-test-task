import React from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';

const HomePage: React.FC = () => {
	return (
		<div className='container h-full'>
			<div className='grid grid-cols-6 gap-10  container relative h-full'>
				<ContactForm />
				<ContactList />
			</div>
		</div>
	);
};

export default HomePage;
