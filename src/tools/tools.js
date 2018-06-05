const urlApp = 'https://api.coinmarketcap.com/v1';

export function fetchApi(url, params = {}) {
	return fetch(`${urlApp}${url}`, params).then(response=>{
		return response.json()
						.then(json => ({
							status: response.status,
							data: json,
							headers: response.headers
						}));
	}).catch(error => ({error: error.message}));
}

export const regNoNum = /[^\d^\.]/gi;