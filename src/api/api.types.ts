import { Contact, Fields } from '../types/Contact.type';

export interface ContactResponse {
	resources: Contact[];
}

export interface ContactsResponse extends ContactResponse {
	meta: {
		page: number;
		pages: number;
		per_page: number;
		total: number;
	};
}

interface Privacy {
	edit: string | null;
	read: string | null;
}

export interface CreateContactParams {
	fields: Fields;
	owner_id: string | null;
	privacy: Privacy;
	record_type: string;
}
