export function fetchApi(url, params = {}) {
	return fetch(url, params).then(response=>{
		return response.json()
						.then(json => ({
							status: response.status,
							data: json,
							headers: response.headers
						}));
	}).catch(error => ({error: error.message}));
}

export const regNoNum = /\D/gi;