import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from './sagas'
import { persistStore, persistReducer } from 'redux-persist'
import storagePersistRedux from 'redux-persist/lib/storage'
import { bookReducer } from './reducers'

const persistConfigStorage = {
	key: 'books',
	storage: storagePersistRedux,
}

const booksReducerPersisted = persistReducer(persistConfigStorage, bookReducer)
const rootReducer = combineReducers({
	books: booksReducerPersisted,
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
export const persistor = persistStore(store)

sagaMiddleware.run(rootWatcher)
