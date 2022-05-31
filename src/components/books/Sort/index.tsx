import { useActions, useTypedSelector } from 'core/hooks'
import { FC, useState } from 'react'

const Sort: FC<IProps> = () => {
	const { filter } = useTypedSelector((state) => state.books)
	const [active, setActive] = useState<boolean>(filter.sortPrice === 'DESC')
	const actions = useActions()

	const sortHandler = () => {
		setActive(!active)
		actions.changeFilter({ ...filter, sortPrice: active ? 'ASC' : 'DESC' })
		actions.sagaGetBooksFilter()
	}

	return (
		<div onClick={sortHandler} className='flex items-center gap-1 py-1 cursor-pointer'>
			<span>Сортировка по цене</span>
			<svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					className={[active && 'fill-blue-600'].join(' ')}
					d='M6.22701 11H17.774C18.636 11 19.094 9.97997 18.521 9.33497L12.748 2.83997C12.6544 2.73428 12.5394 2.64966 12.4106 2.5917C12.2818 2.53375 12.1422 2.50378 12.001 2.50378C11.8598 2.50378 11.7202 2.53375 11.5914 2.5917C11.4627 2.64966 11.3476 2.73428 11.254 2.83997L5.47901 9.33497C4.90601 9.97997 5.36401 11 6.22701 11ZM11.253 21.159C11.3466 21.2647 11.4617 21.3493 11.5904 21.4072C11.7192 21.4652 11.8588 21.4952 12 21.4952C12.1412 21.4952 12.2808 21.4652 12.4096 21.4072C12.5384 21.3493 12.6534 21.2647 12.747 21.159L18.52 14.664C19.094 14.02 18.636 13 17.773 13H6.22701C5.36501 13 4.90701 14.02 5.48001 14.665L11.253 21.159Z'
					fill='black'
				/>
			</svg>
		</div>
	)
}

interface IProps {}
export default Sort
