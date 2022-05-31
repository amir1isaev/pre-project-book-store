import Cards from 'components/books/Cards'
import Category from 'components/books/Category'
import Search from 'components/books/Search'
import Sort from 'components/books/Sort'
import { FC } from 'react'

const Home: FC<IProps> = () => {
	return (
		<div className='px-4'>
			<div className='max-w-5xl mx-auto'>
				<div>
					<div className='flex items-start md:items-center  flex-col mb-1 md:flex-row mb-3 md:gap-6'>
						<Sort />
						<Category />
					</div>
					<Search />
				</div>
				<div className='mt-5'>
					<Cards />
				</div>
			</div>
		</div>
	)
}

interface IProps {}
export default Home
