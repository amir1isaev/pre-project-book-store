import { FC, ReactNode } from 'react'
import ReduxProvider from './ReduxProvider'
import RouterProvider from './RouterProvider'
import StartAppProvider from './StartAppProvider'

const Provider: FC<IProps> = ({ children }) => {
	return (
		<RouterProvider>
			<ReduxProvider>
				<StartAppProvider>{children} </StartAppProvider>
			</ReduxProvider>
		</RouterProvider>
	)
}

interface IProps {
	children: ReactNode
}
export default Provider
