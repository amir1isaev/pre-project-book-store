import { Filter } from 'core/interfaces'
import { Book, Category } from 'core/models'
import { BookAction, EBookAction } from '../type/book'

export const getBooks = (payload: Book[]): BookAction => ({
	type: EBookAction.GET_BOOKS,
	payload,
})

export const getSagaBooks = (): BookAction => ({
	type: EBookAction.SAGA_GET_BOOKS,
})

export const getBooksCategories = (payload: Category[]): BookAction => ({
	type: EBookAction.GET_BOOKS_CATEGORIES,
	payload,
})

export const getSagaBooksCategories = (): BookAction => ({
	type: EBookAction.SAGA_GET_BOOKS_CATEGORIES,
})

export const addBookToCart = (payload: Book): BookAction => ({
	type: EBookAction.ADD_BOOK_TO_CART,
	payload,
})

export const removeBookFromCart = (payload: string): BookAction => ({
	type: EBookAction.REMOVE_BOOK_FROM_CART,
	payload,
})

export const destroyBookFromCart = (payload: number): BookAction => ({
	type: EBookAction.DESTROY_BOOK_FROM_CART,
	payload,
})

export const changeBalance = (payload: number): BookAction => ({
	type: EBookAction.CHANGE_BALANCE,
	payload,
})

export const changeFilter = (payload: Filter | {}): BookAction => ({
	type: EBookAction.CHANGE_FILTER,
	payload,
})

export const clearCart = (): BookAction => ({
	type: EBookAction.CLEAR_CART,
})
export const sagaGetBooksFilter = (): BookAction => ({
	type: EBookAction.SAGA_GET_BOOKS_FILTER,
})
