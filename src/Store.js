import { createStore,applyMiddleware} from 'redux'
import cartReducer from './reducers/cartReducer.js'
import thunk from 'redux-thunk'
const store = createStore(cartReducer,applyMiddleware(thunk))

export default store;
