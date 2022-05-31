import { Book } from 'core/models'

const getSumCartCount = (cart: Book[]) => {
	let sum = 0
	for (let i = 0; i < cart.length; i++) {
		const element = cart[i]
		sum += element.price
	}
	return sum
}

export default getSumCartCount
