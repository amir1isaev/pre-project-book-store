import { bookState } from 'core/store/state'
import { IBookState, BookAction, EBookAction } from 'core/store/type/book'
import {
	getBooks,
	getBooksCategories,
	changeFilter,
	addBookToCart,
	changeBalance,
	removeBookFromCart,
	clearCart,
	destroyBookFromCart,
} from './slices'

const bookReducer = (state = bookState, action: BookAction): IBookState => {
	switch (action.type) {
		case EBookAction.GET_BOOKS:
			return getBooks(state, action.payload)

		case EBookAction.GET_BOOKS_CATEGORIES:
			return getBooksCategories(state, action.payload)

		case EBookAction.ADD_BOOK_TO_CART:
			return addBookToCart(state, action.payload)

		case EBookAction.REMOVE_BOOK_FROM_CART:
			return removeBookFromCart(state, action.payload)

		case EBookAction.CHANGE_BALANCE:
			return changeBalance(state, action.payload)

		case EBookAction.CLEAR_CART:
			return clearCart(state)

		case EBookAction.CHANGE_FILTER:
			return changeFilter(state, action.payload)

		case EBookAction.DESTROY_BOOK_FROM_CART:
			return destroyBookFromCart(state, action.payload)

		default:
			return state
	}
}

export default bookReducer
