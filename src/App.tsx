import Layout from 'containers/Layout'
import { FC } from 'react'
import AppRoutes from 'routes'

const App: FC<IProps> = () => {
	return (
		<Layout>
			<AppRoutes />
		</Layout>
	)
}

interface IProps {}
export default App
