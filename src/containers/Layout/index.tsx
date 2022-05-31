import Footer from 'components/layout/Footer'
import Header from 'components/layout/Header'
import Main from 'components/layout/Main'
import Modal from 'components/modal/Modal'
import Provider from 'containers/Provider'
import { FC, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Layout: FC<IProps> = ({ children }) => {
	return (
		<Provider>
			<ToastContainer
				position='top-right'
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Modal />
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Provider>
	)
}

interface IProps {
	children: ReactNode
}
export default Layout
