import React from 'react';
import { useParams } from 'react-router-dom';
import { useContactData } from '../hooks/useContactData';
import TagsSection from '../components/TagsSection';
import LoadingSpinner from '../common/LoadingSpinner';
import Alert from '../common/Alert';
import FullContact from '../components/FullContact';

const ContactPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const { data, error, isLoading, refetch } = useContactData(id || '');

	if (isLoading) return <LoadingSpinner className='h-full' />;
	if (error)
		return (
			<Alert type='negative' className='m-8'>
				Error fetching contact details.
			</Alert>
		);
	if (!data) return null;

	const contact = data.resources[0];
	if (!contact)
		return (
			<Alert type='negative' className='m-8'>
				Error fetching contact details.
			</Alert>
		);
	const { avatar_url, fields, tags } = contact;
	const firstName = fields['first name']?.[0]?.value || '';
	const lastName = fields['last name']?.[0]?.value || '';
	const email = fields.email?.[0]?.value || '';

	return (
		<div className='max-w-[460px] px-4 w-full mx-auto animate-fade-in'>
			<FullContact avatarUrl={avatar_url || '/path/to/default/avatar.png'} firstName={firstName} lastName={lastName} email={email} />
			<TagsSection contactId={contact.id} tags={tags} refetch={refetch} />
		</div>
	);
};

export default ContactPage;
