import React from 'react';

interface IProps {
	className?: string;
}

const LoadingSpinner: React.FC<IProps> = ({ className }) => {
	return (
		<div className={'flex justify-center items-center animate-fade-in ' + className}>
			<div className='w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin'></div>
		</div>
	);
};

export default LoadingSpinner;
