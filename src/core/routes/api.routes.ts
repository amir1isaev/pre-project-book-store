import { serverURI } from 'core/config'

export const bookAPIRoutes = {
	index: () => `${serverURI}/books`,
	categories: () => `${serverURI}/books/categories`,
}
