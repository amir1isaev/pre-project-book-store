import Ruble from 'components/layout/Ruble'
import Button from 'components/ui/Button'
import { useActions, useTypedSelector } from 'core/hooks'
import { getSumCartCount } from 'core/utils'
import { useState } from 'react'
import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const CartCheckout: FC<IProps> = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [loading, setLoading] = useState<boolean>(false)
	const actions = useActions()
	const { cart, balance } = useTypedSelector((state) => state.books)
	const sum = getSumCartCount(cart)

	const buyHandler = () => {
		if (sum > balance) return toast.error('Недостаточно денег для заказа')
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			toast.success('Покупка прошла успешно')
			actions.clearCart()
			actions.changeBalance(balance - sum)
			setTimeout(() => {
				setSearchParams('')
			}, 1000)
		}, 2000)
	}

	if (sum === 0) {
		return <></>
	}
	return (
		<div className='px-5 py-3 border-t gap-1  border-slate-200 flex flex-col items-center'>
			<div className='flex items-center gap-1'>
				<Ruble />
				<span className='text-2xl font-medium'>{sum}</span>
			</div>
			<Button loading={loading} onClick={buyHandler}>
				Купить
			</Button>
		</div>
	)
}

interface IProps {}
export default CartCheckout
