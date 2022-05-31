import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BookActions } from 'core/store/actions'
import { AppDispatch } from 'core/store'

const useActions = () => {
	const dispatch = useDispatch<AppDispatch>()
	return bindActionCreators({ ...BookActions }, dispatch)
}

export default useActions
