import Button from 'components/ui/Button'
import Counter from 'components/ui/Counter'
import { useTypedSelector } from 'core/hooks'
import { FC } from 'react'

const CardBottom: FC<IProps> = (p) => {
	const { addBookToCartHandler, name } = p
	const cart = useTypedSelector((state) => state.books.cart)
	const isCart = cart.find((item) => item.name === name)

	return <div>{isCart ? <Counter name={name} /> : <Button onClick={addBookToCartHandler}>Добавить в корзину</Button>}</div>
}

interface IProps {
	addBookToCartHandler: () => void
	name: string
}
export default CardBottom
