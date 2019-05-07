import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './root-reducers'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

export default function setupStore (initialState) {
  const store = createStoreWithMiddleware(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
