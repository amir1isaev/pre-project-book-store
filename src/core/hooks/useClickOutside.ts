import { useEffect } from 'react'
import { useRef } from 'react'

const useClickOutside = (callback: any, clickRef: any) => {
	const ref: any = useRef(null)
	const handleClick = (e: any) => {
		if (ref.current && !ref.current?.contains(e.target)) {
			callback()
		}
	}
	useEffect(() => {
		clickRef.current.addEventListener('click', handleClick)
		return () => {
			clickRef.current.removeEventListener('click', handleClick)
		}
	})
	return { ref }
}

export default useClickOutside
