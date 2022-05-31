import { FC } from 'react'

const Ruble: FC<IProps> = (p) => {
	const { size, color } = p
	const getSize = size ?? 22
	const getColor = color ?? 'fill-blue-600'

	return (
		<div>
			<svg width={getSize} height={getSize} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					className={getColor}
					d='M8 21H10V18H16V16H10V14H14.5C17.257 14 19.5 11.757 19.5 9C19.5 6.243 17.257 4 14.5 4H9C8.73478 4 8.48043 4.10536 8.29289 4.29289C8.10536 4.48043 8 4.73478 8 5V12H5V14H8V16H5V18H8V21ZM10 6H14.5C16.154 6 17.5 7.346 17.5 9C17.5 10.654 16.154 12 14.5 12H10V6Z'
					fill='black'
				/>
			</svg>
		</div>
	)
}

interface IProps {
	size?: number
	color?: string
}
export default Ruble
