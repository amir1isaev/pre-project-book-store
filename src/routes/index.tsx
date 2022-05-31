import Home from 'pages/Home'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRoutes: FC<IProps> = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	)
}

interface IProps {}
export default AppRoutes
