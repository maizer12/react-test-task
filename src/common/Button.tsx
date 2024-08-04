import React, { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
	return (
		<button className={`px-6 py-3 border rounded-lg text-lg font-semibold ${className}`} {...props}>
			{children}
		</button>
	);
};

export default Button;
