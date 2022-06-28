import { handleSession } from 'svelte-kit-cookie-session';
import type { GetSession } from '@sveltejs/kit';

export const handle = handleSession(
	{
		secret: 'SOME_COMPLEX_SECRET_AT_LEAST_32_CHARS'
	},
	async ({ event, resolve }) => {
		return resolve(event);
	}
);

export const getSession: GetSession = ({ locals }) => locals.session.data;
