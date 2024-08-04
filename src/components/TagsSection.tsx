import React, { useState } from 'react';
import TagList from '../common/TagList';
import { useAddTagsToContactMutation } from '../api/contactsApi';
import Button from '../common/Button';
import { Tag } from '../types/Tag.type';
import Alert from '../common/Alert';

interface TagsSectionProps {
	contactId: string;
	tags: Tag[];
	refetch: () => void;
}

const TagsSection: React.FC<TagsSectionProps> = ({ contactId, tags, refetch }) => {
	const [newTag, setNewTag] = useState('');
	const [showAlert, setShowAlert] = useState(false);
	const [addTagsToContact, { isLoading: isAdding }] = useAddTagsToContactMutation();

	const handleAddTag = async () => {
		if (newTag.trim() !== '') {
			try {
				setShowAlert(false);
				await addTagsToContact({ id: contactId, tags: [...tags.map(e => e.tag), newTag.trim()] });
				setNewTag('');
				refetch();
			} catch (error) {
				console.error('Failed to add tag', error);
			}
		} else {
			setShowAlert(true);
		}
	};

	return (
		<div>
			<h4 className='mb-3 text-base'>Tags</h4>
			<TagList tags={tags} />
			{showAlert && (
				<Alert type='negative' className='mt-4 mb-0'>
					Please enter a tag before adding.
				</Alert>
			)}
			<div className='mt-4'>
				<input type='text' placeholder='Add new Tag' className='w-full p-3 border rounded-lg text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-500 mt-2' value={newTag} onChange={e => setNewTag(e.target.value)} />
				<Button className='mt-4 w-full' onClick={handleAddTag} disabled={isAdding}>
					{isAdding ? 'Loading...' : 'Add Tag'}
				</Button>
			</div>
		</div>
	);
};

export default TagsSection;
