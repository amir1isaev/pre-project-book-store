import { Select } from 'core/interfaces'
import { FC } from 'react'

const MySelect: FC<IProps> = (p) => {
	const { value, setValue, items, placeholder, className } = p
	return (
		<div className='inline-block relative '>
			<select
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className={['block appearance-none w-full  focus:outline-none  bg-transparent  pr-10', className].join(' ')}
			>
				<option value={placeholder}>{placeholder}</option>
				{items.map((item) => (
					<option key={item.id} value={item.name}>
						{item.name}
					</option>
				))}
			</select>
			<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
				<svg className='fill-current h-6 w-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
					<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
				</svg>
			</div>
		</div>
	)
}

interface IProps {
	value: string
	setValue: (value: string) => void
	items: Select[]
	placeholder: string
	className?: string
}
export default MySelect
