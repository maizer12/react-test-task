import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreateContactMutation, useFetchContactsQuery } from '../api/contactsApi';
import InputField from '../common/InputField';
import Button from '../common/Button';

type FormData = {
	firstName: string;
	lastName: string;
	email: string;
};

const ContactForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		mode: 'onChange',
	});
	const [createContact] = useCreateContactMutation();
	const [submissionError, setSubmissionError] = useState<string | null>(null);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const { refetch } = useFetchContactsQuery();

	const onSubmit: SubmitHandler<FormData> = async data => {
		setSubmissionError(null);
		setIsSubmitted(false);
		try {
			await createContact({
				fields: {
					'first name': [{ modifier: '', value: data.firstName }],
					'last name': [{ modifier: '', value: data.lastName }],
					email: [{ modifier: '', value: data.email }],
				},
				owner_id: null,
				privacy: { edit: null, read: null },
				record_type: 'person',
			}).unwrap();
			setIsSubmitted(true);
			refetch();
			reset();
		} catch (error) {
			setSubmissionError('Error creating contact. Please try again.');
			console.error('Error creating contact:', error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='contact-form col-span-2 w-full sticky top-14 h-fit'>
			<h2 className='form-title text-2xl mb-4'>Create Contact</h2>
			{submissionError && <div className='error-message text-red-500 mb-2'>{submissionError}</div>}
			{isSubmitted && <div className='success-message text-green-500 mb-2'>Contact successfully created!</div>}
			<InputField id='firstName' label='First Name' type='text' register={register('firstName', { required: 'First name is required' })} error={errors.firstName?.message} />
			<InputField id='lastName' label='Last Name' type='text' register={register('lastName', { required: 'Last name is required' })} error={errors.lastName?.message} />
			<InputField
				id='email'
				label='Email'
				type='email'
				register={register('email', {
					required: 'Email is required',
					pattern: {
						value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
						message: 'Invalid email address',
					},
				})}
				error={errors.email?.message}
			/>
			<Button type='submit' className='mt-5 w-full'>
				Add Contact
			</Button>
		</form>
	);
};

export default ContactForm;
