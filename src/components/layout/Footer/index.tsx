import { FC } from 'react'

const Footer: FC<IProps> = () => {
	return (
		<div className='px-3 py-2 w-full text-center'>
			<span className='italic font-medium '>© 2022 Books Store</span>
		</div>
	)
}

interface IProps {}
export default Footer
