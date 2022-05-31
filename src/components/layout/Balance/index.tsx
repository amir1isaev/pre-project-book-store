import { useTypedSelector } from 'core/hooks'
import { FC } from 'react'
import Ruble from '../Ruble'

const Balance: FC<IProps> = () => {
	const balance = useTypedSelector((state) => state.books.balance)
	return (
		<div
			className='bg-gray-100 h-11 
		items-center border flex gap-1.5
		 border-slate-200 rounded-lg
		 px-3 py-2'
		>
			<Ruble size={20} />
			<span className='italic font-medium '>{balance}</span>
		</div>
	)
}

interface IProps {}
export default Balance
