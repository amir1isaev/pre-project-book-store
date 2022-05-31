import {
	IGetSagaBooks,
	IGetBooks,
	IChangeBalance,
	IAddBooktoCart,
	IRemoveBookFromCart,
	IGetBooksCategories,
	IGetSagaBooksCategories,
	IClearCart,
	IChangeFilter,
	ISagaGetBooksFilter,
	IDestroyBookFromCart,
} from './actions'
export { default as EBookAction } from './types'
export type { default as IBookState } from './state'

export type BookAction =
	| IGetBooks
	| IChangeBalance
	| ISagaGetBooksFilter
	| IDestroyBookFromCart
	| IClearCart
	| IChangeFilter
	| IRemoveBookFromCart
	| IAddBooktoCart
	| IGetSagaBooks
	| IGetBooksCategories
	| IGetSagaBooksCategories
