import { Filter } from 'core/interfaces'
import { Book, Category } from 'core/models'
import EBookAction from './types'

interface IGetBooks {
	type: EBookAction.GET_BOOKS
	payload: Book[]
}

interface IGetSagaBooks {
	type: EBookAction.SAGA_GET_BOOKS
}

interface IGetBooksCategories {
	type: EBookAction.GET_BOOKS_CATEGORIES
	payload: Category[]
}

interface IGetSagaBooksCategories {
	type: EBookAction.SAGA_GET_BOOKS_CATEGORIES
}

interface IAddBooktoCart {
	type: EBookAction.ADD_BOOK_TO_CART
	payload: Book
}
interface IRemoveBookFromCart {
	type: EBookAction.REMOVE_BOOK_FROM_CART
	payload: string
}

interface IDestroyBookFromCart {
	type: EBookAction.DESTROY_BOOK_FROM_CART
	payload: number
}

interface IChangeBalance {
	type: EBookAction.CHANGE_BALANCE
	payload: number
}
interface IClearCart {
	type: EBookAction.CLEAR_CART
}

interface IChangeFilter {
	type: EBookAction.CHANGE_FILTER
	payload: Filter | {}
}

interface ISagaGetBooksFilter {
	type: EBookAction.SAGA_GET_BOOKS_FILTER
}

export type {
	IGetBooks,
	IClearCart,
	IChangeBalance,
	IAddBooktoCart,
	IRemoveBookFromCart,
	IGetSagaBooks,
	IGetBooksCategories,
	IGetSagaBooksCategories,
	IChangeFilter,
	ISagaGetBooksFilter,
	IDestroyBookFromCart,
}
