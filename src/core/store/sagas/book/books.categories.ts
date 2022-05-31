import { call, put } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import { apiRoutes } from 'core/routes'
import { axiosResponse } from '../axiosResponce'
import { BookActions } from 'core/store/actions'

function* getBooksCategoires() {
	const url = apiRoutes.bookAPIRoutes.categories()

	try {
		const res: AxiosResponse = yield call(axiosResponse, 'GET', url, {})
		if (res.status === 200) {
			yield put(BookActions.getBooksCategories(res.data))
		}
	} catch (error) {
		console.log('[ERROR]', error)
	}
}

export default getBooksCategoires
