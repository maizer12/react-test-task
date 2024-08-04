import React from 'react';
import TagList from '../common/TagList'; // Убедитесь, что путь к TagList верный
import { Contact } from '../types/Contact.type';
import { CircleX } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContactCardProps {
	resource: Contact;
	onDelete: (id: string) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ resource, onDelete }) => {
	const { avatar_url, fields, tags } = resource;
	const firstName = fields['first name']?.[0]?.value || 'First Name';
	const lastName = fields['last name']?.[0]?.value || 'Last Name';
	const email = fields.email?.[0]?.value || 'email@email.com';

	const deleteCard = (e: React.MouseEvent) => {
		e.preventDefault();
		const userConfirmed = window.confirm('Are you sure you want to delete this card?');

		if (userConfirmed) {
			onDelete(resource.id);
		}
	};

	return (
		<Link to={`/contact/${resource.id}`} className='flex items-start p-4 bg-gray-100 rounded-md shadow-sm mb-4 max-w-full w-full'>
			<img src={avatar_url || '/path/to/default/avatar.png'} className='w-16 h-16 rounded-full object-cover' alt={`${firstName} ${lastName}'s avatar`} />
			<div className='flex-grow ml-4 max-w-full w-full block'>
				<h4 className='text-base'>{`${firstName} ${lastName}`}</h4>
				<p className='text-base text-gray-600 mb-4 overflow-hidden whitespace-nowrap overflow-ellipsis w-full'>{email}</p>
				<TagList tags={tags} />
			</div>
			<button className='ml-4 text-gray-600 hover:text-gray-800 focus:outline-none' onClick={deleteCard}>
				<CircleX />
			</button>
		</Link>
	);
};

export default ContactCard;
