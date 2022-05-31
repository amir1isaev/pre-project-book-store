import { Book } from 'core/models'

const uniqueCart = (arr: Book[]) => {
	const newArr: Book[] = []
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i]
		if (!newArr.find((item) => item.name === element.name)) {
			newArr.push(element)
		}
	}
	return newArr
}
export default uniqueCart
