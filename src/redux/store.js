import { legacy_createStore as createStore } from 'redux'
import state from './state'
import reducers from './ reducer'
export default createStore(reducers, state)