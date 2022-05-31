import { EBookAction } from 'core/store/type/book'
import { takeEvery } from 'redux-saga/effects'

import getBooks from './books'
import getBooksCategoires from './books.categories'
import getBooksFilter from './books.filter'

function* bookWatcher() {
	yield takeEvery(EBookAction.SAGA_GET_BOOKS, getBooks)
	yield takeEvery(EBookAction.SAGA_GET_BOOKS_CATEGORIES, getBooksCategoires)
	yield takeEvery(EBookAction.SAGA_GET_BOOKS_FILTER, getBooksFilter)
}

export default bookWatcher
