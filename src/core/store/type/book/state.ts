import { Filter } from 'core/interfaces'
import { Book, Category } from 'core/models'

interface IBookState {
	books: Book[]
	cart: Book[]
	categories: Category[]
	balance: number
	filter: Filter
}

export default IBookState
