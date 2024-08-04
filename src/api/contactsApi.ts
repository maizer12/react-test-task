import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContactsResponse, ContactResponse, CreateContactParams } from './api.types';

const API_BASE_URL = '/api/v1';

export const contactsApi = createApi({
	reducerPath: 'contactsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: API_BASE_URL,
		prepareHeaders: headers => {
			headers.set('Authorization', 'Bearer VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn');
			return headers;
		},
	}),
	endpoints: builder => ({
		fetchContacts: builder.query<ContactsResponse, void>({
			query: () => '/contacts?sort=created:desc',
		}),
		fetchContact: builder.query<ContactResponse, string>({
			query: id => `/contact/${id}`,
		}),
		createContact: builder.mutation<ContactResponse, Partial<CreateContactParams>>({
			query: contact => ({
				url: '/contact',
				method: 'POST',
				body: contact,
				headers: {
					'Content-Type': 'application/json',
				},
			}),
		}),
		deleteContact: builder.mutation<void, string>({
			query: id => ({
				url: `/contact/${id}`,
				method: 'DELETE',
			}),
		}),
		addTagsToContact: builder.mutation<void, { id: string; tags: string[] }>({
			query: ({ id, tags }) => ({
				url: `/contacts/${id}/tags`,
				method: 'PUT',
				body: { tags },
				headers: {
					'Content-Type': 'application/json',
				},
			}),
		}),
	}),
});

export const { useFetchContactsQuery, useFetchContactQuery, useCreateContactMutation, useDeleteContactMutation, useAddTagsToContactMutation } = contactsApi;
