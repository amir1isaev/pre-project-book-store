import { store, persistor } from 'core/store'
import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const ReduxProvider: FC<IProps> = ({ children }) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>{children}</PersistGate>
		</Provider>
	)
}

interface IProps {
	children: ReactNode
}
export default ReduxProvider
