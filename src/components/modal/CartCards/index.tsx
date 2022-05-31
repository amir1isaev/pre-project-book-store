import { useTypedSelector } from 'core/hooks'
import { uniqueCart } from 'core/utils'
import { FC } from 'react'
import CartCard from '../CartCard'

const CartCards: FC<IProps> = () => {
	const cart = useTypedSelector((state) => state.books.cart)
	return (
		<div className='flex-1  px-5 overflow-auto py-2 gap-1.5 flex flex-col bg-gray-100'>
			{cart.length === 0 && <div className='h-full flex items-center justify-center text-gray-400'>Корзина пуста</div>}
			{uniqueCart(cart).map((item) => (
				<CartCard item={item} key={item.name} />
			))}
		</div>
	)
}

interface IProps {}
export default CartCards
