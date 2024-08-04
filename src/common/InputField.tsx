import { UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps {
	id: string;
	label: string;
	type: string;
	register: UseFormRegisterReturn;
	error?: string;
	className?: string;
}

const InputField = ({ id, label, type, register, error, className = '' }: InputFieldProps) => {
	return (
		<div className='form-group mb-2'>
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} {...register} className={`form-input border block w-full mt-2 p-3 rounded-lg ${className} ${error ? 'border-red-500' : ''}`} />
			{error && <p className='text-red-500 mt-1'>{error}</p>}
		</div>
	);
};

export default InputField;
