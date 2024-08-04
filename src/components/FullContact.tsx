import React from 'react';

interface FullContactProps {
	avatarUrl: string;
	firstName: string;
	lastName: string;
	email: string;
}

const FullContact: React.FC<FullContactProps> = ({ avatarUrl, firstName, lastName, email }) => (
	<div className='flex items-center gap-4 mb-7'>
		<img src={avatarUrl} className='w-20 h-20 rounded-full object-cover' alt={`${firstName} ${lastName}'s avatar`} />
		<div>
			<h4 className='text-base'>{`${firstName} ${lastName}`}</h4>
			<p className='text-base text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis'>{email}</p>
		</div>
	</div>
);

export default FullContact;
