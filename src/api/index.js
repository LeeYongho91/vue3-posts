import axios from 'axios';

function create(baseURL, options) {
  Object.assign({baseURL}, options)
	const instance = axios.create({
		baseURL: 'https://some-domain.com/api/',
		...options,
	});
	return instance;
}

export const posts = create()
