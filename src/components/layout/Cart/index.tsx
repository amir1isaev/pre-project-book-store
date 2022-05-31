import { useTypedSelector } from 'core/hooks'
import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'

const Cart: FC<IProps> = () => {
	const cart = useTypedSelector((state) => state.books.cart)
	const count = cart.length
	const [searchParams, setSearchParams] = useSearchParams()

	const openCartModal = () => {
		setSearchParams('modal=cart')
	}
	return (
		<div
			onClick={openCartModal}
			className='h-11 relative 
		w-11 duration-200 cursor-pointer
		 border border-transparent hover:border-slate-200
		 rounded-lg flex hover:bg-gray-100 items-center justify-center'
		>
			<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M8.5 19C9.32843 19 10 19.6716 10 20.5C10 21.3284 9.32843 22 8.5 22C7.67157 22 7 21.3284 7 20.5C7 19.6716 7.67157 19 8.5 19ZM17.5 19C18.3284 19 19 19.6716 19 20.5C19 21.3284 18.3284 22 17.5 22C16.6716 22 16 21.3284 16 20.5C16 19.6716 16.6716 19 17.5 19ZM3 2H5C5.4556 2 5.84831 2.30684 5.96506 2.73774L5.98837 2.84794L6.4733 6H21C21.5998 6 22.0549 6.52068 21.9951 7.10035L21.9762 7.21693L20.3242 14.6508C20.0325 15.9637 18.9059 16.9143 17.5779 16.9945L17.3957 17H8.71584C7.29435 17 6.07697 16.0044 5.78265 14.6299L5.75072 14.4562L4.14208 4H3C2.44772 4 2 3.55228 2 3C2 2.48716 2.38604 2.06449 2.88338 2.00673L3 2H5H3ZM19.7534 8H6.781L7.72747 14.1521C7.79674 14.6024 8.15973 14.9438 8.60337 14.9937L8.71584 15H17.3957C17.8253 15 18.2021 14.7265 18.3402 14.3285L18.3718 14.2169L19.7534 8Z'
					fill='black'
				/>
			</svg>
			{count !== 0 && (
				<div
					className='px-1 
			absolute rounded-full h-5 
			-top-1 -right-1 text-xs flex items-center justify-center bg-blue-600 text-white'
				>
					{count > 99 ? '+99' : count}
				</div>
			)}
		</div>
	)
}

interface IProps {}
export default Cart
