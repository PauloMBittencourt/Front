import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ locals }) => {
	if (locals.session.data.user) {
		return {
			headers: { Location: '/' },
			status: 302
		};
	}
	return {
		body: {
			user: locals.session.data.user
		}
	};
};

export const post: RequestHandler = async ({ request, locals }) => {
	const login = await request.json();
	const body: string =
		'grant_type=password&username=' + login.matricula + '&password=' + login.password;
	const res = await fetch('https://sandbox.banese.b.br/seac/api/token/jwt', {
		method: 'POST',
		headers: {
			'Content-Type': 'text/plain'
		},
		body: body
	});

	if (res.status === 200) {
		const ret = await res.json();
		await locals.session.set({
			user: {
				matricula: ret.matricula,
				token: ret.access_token
			}
		});
		const hoje = new Date();
		const expirar = new Date();
		expirar.setDate(hoje.getDate() + (ret.expires_in + 1) / 60 / 60 / 24);
		locals.session.data.expires = expirar;
		return {
			status: 200,
			headers: { Location: '/' },
			body: {
				user: locals.session.data.user
			}
		};
	} else {
		const ret = await res.json();
		return {
			status: res.status,
			body: ret
		};
	}
};
