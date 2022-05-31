import { EModal } from 'core/enums'
import { useClickOutside } from 'core/hooks'
import { useRef } from 'react'
import { FC, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Cart from '../Cart'

const Modal: FC<IProps> = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const clickRef = useRef(null)
	const modal = searchParams.get('modal')
	const { ref } = useClickOutside(() => setSearchParams(''), clickRef)

	useEffect(() => {
		if (modal) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
		switch (modal) {
			case EModal.CART:
				break
			default:
				setSearchParams('')
				break
		}
	}, [modal])

	return (
		<div
			ref={clickRef}
			className={[modal ? 'left-0' : 'left-full', ' duration-200 fixed top-0 left-0 flex  justify-end  w-full h-full z-30'].join(' ')}
		>
			<div ref={ref} className='bg-white h-full w-full md:w-96 border-l-2 border-zinc-200'>
				{modal === EModal.CART && <Cart />}
			</div>
		</div>
	)
}

interface IProps {}
export default Modal
