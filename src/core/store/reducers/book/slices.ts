import { Filter } from 'core/interfaces'
import { Book, Category } from 'core/models'
import { IBookState } from 'core/store/type/book'

const getBooks = (state: IBookState, payload: Book[]) => {
	return {
		...state,
		books: payload,
	}
}

const getBooksCategories = (state: IBookState, payload: Category[]) => {
	return {
		...state,
		categories: payload,
	}
}

const addBookToCart = (state: IBookState, payload: Book) => {
	return {
		...state,
		cart: [...state.cart, payload],
	}
}

const clearCart = (state: IBookState) => {
	return {
		...state,
		cart: [],
	}
}

const removeBookFromCart = (state: IBookState, payload: string) => {
	return {
		...state,
		cart: state.cart.filter((item) => item.name !== payload),
	}
}

const destroyBookFromCart = (state: IBookState, payload: number) => {
	var arr = JSON.parse(JSON.stringify(state.cart))
	arr.splice(payload, payload === 0 ? payload + 1 : payload)

	return {
		...state,
		cart: arr,
	}
}

const changeBalance = (state: IBookState, payload: number) => {
	return {
		...state,
		balance: payload,
	}
}

const changeFilter = (state: IBookState, payload: Filter | {}) => {
	return {
		...state,
		filter: payload,
	}
}

export { getBooks, clearCart, destroyBookFromCart, changeFilter, getBooksCategories, changeBalance, addBookToCart, removeBookFromCart }
