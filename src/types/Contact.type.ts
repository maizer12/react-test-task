import { Tag } from './Tag.type';

interface Field {
	modifier: string;
	value: string;
}

export interface Fields {
	'first name': Field[];
	'last name': Field[];
	email: Field[];
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Contact {
	avatar_url: string;
	children: never[];
	company_last_contacted: { in: never | null; out: any | null };
	contexts: Array<{ [key: string]: unknown }>;
	created: string;
	creator: string;
	creator_id: string;
	employers_info: any[];
	fields: Fields;
	id: string;
	is_editable: boolean;
	is_important: boolean;
	last_contacted: {
		ts: string | null;
		type: string | null;
		null: string | null;
		object_id: string | null;
		user_id: string | null;
		deleted: boolean | null;
	};
	last_contacted_user: string | null;
	lc: any | null;
	notice: string | null;
	object_type: 'contact';
	owner_id: string | null;
	privacy: { read: any | null; edit: any | null };
	record_type: 'person';
	reminder: any | null;
	reminders: any[];
	stages_info: any[];
	tags: Tag[];
	updated: string;
	updater: string | null;
}
