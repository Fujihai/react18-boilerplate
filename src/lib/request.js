import axios from 'axios';

export const request = axios.create({ baseURL: '' });

function authRequestInterceptor(config) {
	// const token = storage.getToken();
	// if (token) {
	//   config.headers.authorization = `${token}`;
	// }
	return config;
}

request.interceptors.request.use(authRequestInterceptor);

request.interceptors.response.use(
	(response) => response.data,
	(error) => {
		const { data, status } =
			/** @type {import('axios').AxiosResponse} */ error.response;

		const message = data?.message || error?.error;

		// eslint-disable-next-line no-console
		console.error('Response error: ', message);

		if (status === 401) {
			// redirect to login page
		}

		if (status === 404) {
			// redirect to 404 page
		}

		return Promise.reject(error);
	}
);
