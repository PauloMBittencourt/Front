import type { RequestHandler } from '@sveltejs/kit';
export const get: RequestHandler = async ({ locals }) => {
	return {
		body: {
			user: locals.session.data.user
		}
	};
};
export const post: RequestHandler = async (event) => {
	// let body = {
	//     periodo: params.periodo,
	//     proposta: params.proposta,
	//     produto: params.produto
	// };

	let body = {};

	let header = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	};

	await fetch('https://localhost:porta/onboarding', header)
		.then((response) => response.json())
		.then((retorno) => {
			if (!retorno || retorno.length == 0) {
				return {
					status: 404,
					body: {
						mensagem: 'Nenhum dado encontrado',
						statusCode: 404
					}
				};
			}
			return {
				status: 200,
				body: retorno
			};
		})
		.catch((erro) => {
			return {
				status: 500,
				body: {
					mensagem: 'Erro não conhecido',
					statusCode: 500,
					erro
				}
			};
		});
};
