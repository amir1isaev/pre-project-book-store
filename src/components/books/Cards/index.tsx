import { useTypedSelector } from 'core/hooks'
import { FC } from 'react'
import Card from '../Card'

const Cards: FC<IProps> = () => {
	const books = useTypedSelector((state) => state.books.books)
	return (
		<div className='book-cards'>
			{books.length === 0 && <div className='flex text-gray-500 text-center'>Не найдены</div>}
			{books.map((item) => (
				<Card item={item} key={item.name} />
			))}
		</div>
	)
}

interface IProps {}
export default Cards
