import { select, SelectEffect } from 'redux-saga/effects'
import { RootState } from '..'

export function selectState<T>(selector: (s: RootState) => T): SelectEffect {
	return select(selector)
}
