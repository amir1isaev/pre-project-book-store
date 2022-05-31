import { FC, ReactNode } from 'react'
import Spinner from '../Spinner'

const Button: FC<IProps> = (p) => {
	const { children, onClick, loading } = p
	return (
		<button
			disabled={loading}
			onClick={onClick}
			className='h-9  disabled:bg-blue-100  items-center justify-center cursor-pointer duration-200 hover:bg-blue-800 px-4 py-2 font-semibold text-sm bg-blue-600 inline-flex text-white rounded-full shadow-sm'
		>
			{loading ? <Spinner /> : children}
		</button>
	)
}

interface IProps {
	children: ReactNode
	loading?: boolean
	onClick?: () => void
}
export default Button
