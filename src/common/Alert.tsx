import React from 'react';

interface AlertProps {
	type: 'positive' | 'negative';
	children: React.ReactNode;
	className?: string;
}

const Alert: React.FC<AlertProps> = ({ type, className, children }) => {
	const baseStyles = 'border-l-4 p-4 rounded-md mb-4 max-w-full animate-fade-in';
	const alertStyles = {
		positive: 'bg-green-100 border-green-400 text-green-700',
		negative: 'bg-red-100 border-red-400 text-red-700',
	};

	return (
		<div className={`${baseStyles} ${alertStyles[type]} ${className || ''}`} role='alert'>
			{children}
		</div>
	);
};

export default Alert;
