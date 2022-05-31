import Select from 'components/ui/Select'
import { useActions, useTypedSelector } from 'core/hooks'

import { useState } from 'react'
import { FC } from 'react'

const Category: FC<IProps> = () => {
	const { categories, filter } = useTypedSelector((state) => state.books)
	const actions = useActions()
	const [value, setValue] = useState<string>(categories.find((item) => item.id == filter.categoryId)?.name ?? '')
	const changeValueHandler = (value: string) => {
		const category = categories.find((item) => item.name == value)
		actions.changeFilter({ ...filter, categoryId: category?.id })
		setValue(value)
		actions.sagaGetBooksFilter()
	}
	return (
		<div>
			<Select placeholder='Категория' value={value} setValue={changeValueHandler} items={categories} />
		</div>
	)
}

interface IProps {}
export default Category
