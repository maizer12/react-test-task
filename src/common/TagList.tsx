import React from 'react';
import { Tag } from '../types/Tag.type';

interface TagListProps {
	tags: Tag[];
}

const TagList: React.FC<TagListProps> = ({ tags }) => {
	return (
		<ul className='flex flex-wrap gap-2'>
			{tags.map((obj, index) => (
				<li key={index} className='bg-gray-300 text-gray-900 px-3 rounded-md cursor-pointer hover:bg-gray-400 whitespace-nowrap' title={obj.tag.trim()}>
					{obj.tag.trim()}
				</li>
			))}
		</ul>
	);
};

export default TagList;
