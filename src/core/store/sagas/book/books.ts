import { call, put, select } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import { apiRoutes } from 'core/routes'
import { axiosResponse } from '../axiosResponce'
import { BookActions } from 'core/store/actions'
import { RootState } from 'core/store'

function* getBooks() {
	const url = apiRoutes.bookAPIRoutes.index()
	const getFilter = (state: RootState) => state.books.filter
	const filter: ReturnType<typeof getFilter> = yield select(getFilter)

	try {
		const res: AxiosResponse = yield call(axiosResponse, 'POST', url, {
			filters: filter,
		})
		if (res.status === 200) {
			yield put(BookActions.getBooks(res.data))
		}
	} catch (error) {
		console.log('[ERROR]', error)
	}
}

export default getBooks
