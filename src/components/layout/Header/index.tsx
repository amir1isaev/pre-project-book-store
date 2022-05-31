import { FC } from 'react'
import Balance from '../Balance'
import Cart from '../Cart'
import Logo from '../Logo'

const Header: FC<IProps> = () => {
	return (
		<header className='px-4 py-3 h-16 flex items-center fixed w-full bg-white z-10'>
			<div className='flex max-w-5xl mx-auto justify-between w-full items-center'>
				<Logo />
				<div className='flex items-center gap-2'>
					<Cart />
					<Balance />
				</div>
			</div>
		</header>
	)
}

interface IProps {}
export default Header
