import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'core/store'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
