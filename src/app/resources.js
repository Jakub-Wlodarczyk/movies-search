import 'whatwg-fetch';
import { apiKey } from './config';

/**
 * The function fetches movie/s by a title
 * @param {String} title
 * @returns {Promise}
 */
export const getMovie = (title) => {
	return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`).then((response) => {
		const contentType = response.headers.get('content-type');
		if (contentType && contentType.includes('application/json')) {
			return response.json();
		}
		throw new TypeError('Not a JSON');
	})
		.then(json => json)
		.catch(error => error);
};

/**
 * The function fetches the API configuration (used in setting the base_url for images)
 * @returns {Promise}
 */
export const getConfiguration = () => {
	return fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`).then((response) => {
		const contentType = response.headers.get('content-type');
		if (contentType && contentType.includes('application/json')) {
			return response.json();
		}
		throw new TypeError('Not a JSON');
	})
		.then(json => json)
		.catch(error => error);
};
