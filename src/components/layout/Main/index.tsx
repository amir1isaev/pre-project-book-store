import { FC, ReactNode } from 'react'

const Main: FC<IProps> = ({ children }) => {
	return <main className='flex-1 pb-8 pt-20'>{children}</main>
}

interface IProps {
	children: ReactNode
}
export default Main
