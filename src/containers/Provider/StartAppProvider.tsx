import { useActions } from 'core/hooks'
import { useEffect } from 'react'
import { FC, ReactNode } from 'react'

const StartAppProvider: FC<IProps> = ({ children }) => {
	const actions = useActions()
	useEffect(() => {
		actions.getSagaBooksCategories()
		actions.getSagaBooks()
	}, [])

	return <>{children}</>
}

interface IProps {
	children: ReactNode
}
export default StartAppProvider
