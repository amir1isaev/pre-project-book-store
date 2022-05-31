import { FC, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

const RouterProvider: FC<IProps> = ({ children }) => {
	return <BrowserRouter>{children}</BrowserRouter>
}

interface IProps {
	children: ReactNode
}
export default RouterProvider
