import { useFetchContactQuery, useAddTagsToContactMutation } from '../api/contactsApi';

export const useContactData = (id: string) => {
	const { data, error, isLoading, refetch } = useFetchContactQuery(id);
	const [addTagsToContact, { isLoading: isAdding }] = useAddTagsToContactMutation();

	return { data, error, isLoading, refetch, addTagsToContact, isAdding };
};
