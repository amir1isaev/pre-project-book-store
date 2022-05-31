import { IBookState } from '../type/book'

const bookState: IBookState = {
	books: [],
	cart: [],
	categories: [],
	balance: 15000,
	filter: {
		sortPrice: 'ASC',
	},
}
export default bookState
