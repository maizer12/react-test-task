import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchContactQuery, useAddTagsToContactMutation } from '../api/contactsApi';
import TagList from '../common/TagList';
import Button from '../common/Button';
import LoadingSpinner from '../common/LoadingSpinner';
import Alert from '../common/Alert';

const ContactPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const { data, error, isLoading, refetch } = useFetchContactQuery(id || '');
	const [addTagsToContact, { isLoading: isAdding }] = useAddTagsToContactMutation();

	const [newTag, setNewTag] = useState('test');
	const contact = data?.resources[0];

	if (isLoading) return <LoadingSpinner className='h-full' />;

	if (error)
		return (
			<Alert type='negative' className='m-8'>
				Error fetching contact details.
			</Alert>
		);

	if (!contact) return null;

	const { avatar_url, fields, tags } = contact;
	const firstName = fields['first name']?.[0]?.value || '';
	const lastName = fields['last name']?.[0]?.value || '';
	const email = fields.email?.[0]?.value || '';

	console.log(isAdding);

	const handleAddTag = async () => {
		if (newTag.trim() !== '') {
			try {
				await addTagsToContact({ id: contact.id, tags: [...tags.map(e => e.tag), newTag.trim()] });
				setNewTag('');
				refetch();
			} catch (error) {
				console.error('Failed to add tag', error);
			}
		}
	};

	return (
		<div className='max-w-[460px] px-4 w-full mx-auto'>
			<div className='flex items-center gap-4 mb-7'>
				<img src={avatar_url || '/path/to/default/avatar.png'} className='w-20 h-20 rounded-full object-cover' alt={`${firstName} ${lastName}'s avatar`} />
				<div>
					<h4 className='text-base'>{`${firstName} ${lastName}`}</h4>
					<p className='text-base text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis'>{email}</p>
				</div>
			</div>
			<h4 className='mb-3 text-base'>Tags</h4>
			<TagList tags={tags} />
			<input type='text' placeholder='Add new Tag' className='w-full p-3 border rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-500 mt-9' value={newTag} onChange={e => setNewTag(e.target.value)} />
			<Button className='mt-4 w-full' onClick={handleAddTag}>
				Add Tag
			</Button>
		</div>
	);
};

export default ContactPage;
