import { useActions, useTypedSelector } from 'core/hooks'
import { FC, useEffect } from 'react'

const Search: FC<IProps> = () => {
	const filter = useTypedSelector((state) => state.books.filter)
	const actions = useActions()

	const changeValueHandler = (value: string) => {
		actions.changeFilter({ ...filter, search: value })

		// actions.sagaGetBooksFilter()
	}

	useEffect(() => {
		const handler = setTimeout(() => {
			actions.sagaGetBooksFilter()
		}, 800)

		return () => {
			clearTimeout(handler)
		}
	}, [filter.search])

	return (
		<div
			className='bg-white h-11 
		items-center border flex gap-1.5
		 border-slate-200 rounded-lg
		 overflow-hidden
		 '
		>
			<input
				value={filter.search}
				onChange={(e) => changeValueHandler(e.target.value)}
				type='text'
				className='bg-transparent  w-full h-full px-4 outline-none'
				placeholder='Введите название книги'
			/>
		</div>
	)
}

interface IProps {}
export default Search
