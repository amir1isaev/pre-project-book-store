import { FC } from 'react'
import CartCards from '../CartCards'
import CartCheckout from '../CartCheckout'
import ModalHeader from '../ModalHeader'

const Cart: FC<IProps> = () => {
	return (
		<div className='flex flex-col h-full'>
			<div className='border-b border-slate-200'>
				<ModalHeader title='Корзина' />
			</div>
			<CartCards />
			<CartCheckout />
		</div>
	)
}

interface IProps {}
export default Cart
