import { FC } from 'react'

const Spinner: FC<IProps> = () => {
	return <div className='lds-dual-ring'></div>
}

interface IProps {}
export default Spinner
