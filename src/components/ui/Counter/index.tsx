import { useActions, useTypedSelector } from 'core/hooks'
import { FC } from 'react'

const Counter: FC<IProps> = (p) => {
	const { name, className } = p

	const actions = useActions()
	const cart = useTypedSelector((state) => state.books.cart)
	const count = cart.filter((item) => item.name === name).length

	const plusHandler = () => {
		const item = cart.find((item) => item.name === name)
		if (!item) return
		actions.addBookToCart(item)
	}
	const minusHandler = () => {
		const index = cart.findIndex((item) => item.name === name)
		actions.destroyBookFromCart(index)
	}

	return (
		<div className={['rounded-full  h-9 inline-flex items-center bg-white border border-zinc-100', className].join(' ')}>
			<div onClick={minusHandler} className='p-2 group cursor-pointer'>
				<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						className='fill-gray-400 group-hover:fill-black'
						d='M5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11Z'
						fill='black'
					/>
				</svg>
			</div>
			<span className='font-semibold'>{count}</span>
			<div onClick={plusHandler} className='p-2 group cursor-pointer'>
				<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						className='fill-gray-400 group-hover:fill-black'
						d='M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z'
						fill='black'
					/>
				</svg>
			</div>
		</div>
	)
}

interface IProps {
	name: string
	className?: string
}
export default Counter
