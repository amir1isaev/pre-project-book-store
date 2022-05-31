import Ruble from 'components/layout/Ruble'
import { useActions } from 'core/hooks'
import { Book } from 'core/models'
import { FC } from 'react'
import CardBottom from '../CardBottom'

const Card: FC<IProps> = (p) => {
	const { item } = p
	const { addBookToCart } = useActions()
	const addBookToCartHandler = () => {
		addBookToCart(item)
	}
	return (
		<div>
			<img className='rounded-lg' src={item.coverUrl} alt={item.name} />
			<div className='py-1'>
				<div className='mb-1'>
					<h3 className='text-gray-500 truncate'>{item.authorName}</h3>
					<h3 className='font-semibold -mt-0.5 truncate'>{item.name}</h3>
					<div className='flex items-center gap-1 mt-1  -ml-1'>
						<Ruble size={18} color='fill-blue-400' />
						<span className='text-blue-400'>{item.price}</span>
					</div>
				</div>
				<CardBottom name={item.name} addBookToCartHandler={addBookToCartHandler} />
			</div>
		</div>
	)
}

interface IProps {
	item: Book
}
export default Card
