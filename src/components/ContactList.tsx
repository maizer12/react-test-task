import React from 'react';
import { useDeleteContactMutation, useFetchContactsQuery } from '../api/contactsApi';
import ContactCard from './ContactCard';
import LoadingSpinner from '../common/LoadingSpinner';
import Alert from '../common/Alert';

const ContactList: React.FC = () => {
	const { data, error, isLoading, refetch } = useFetchContactsQuery();
	const [deleteContact] = useDeleteContactMutation();

	if (isLoading) return <LoadingSpinner className='h-[400px] col-span-4' />;
	if (error)
		return (
			<Alert type='negative' className='w-full max-w-full flex-1 col-span-4 h-fit'>
				Error loading contacts.
			</Alert>
		);

	const handleDelete = async (id: string) => {
		try {
			await deleteContact(id).unwrap();
			console.log('Contact deleted successfully');
			refetch();
		} catch (error) {
			console.error('Error when deleting contact:', error);
		}
	};

	return (
		<section className='w-full max-w-full flex-1 col-span-4 max-h-full overflow-y-auto pr-2 custom-scrollbar'>
			<h2 className='text-2xl mb-4'>Contacts</h2>
			<div>
				{data?.resources.map(resource => (
					<ContactCard resource={resource} onDelete={handleDelete} key={resource.id} />
				))}
			</div>
		</section>
	);
};

export default ContactList;
