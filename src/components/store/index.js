import {createStore} from 'redux'
import reduce from './reduce'
import { composeWithDevTools } from 'redux-devtools-extension'
const store=createStore(reduce,composeWithDevTools());
export default store;