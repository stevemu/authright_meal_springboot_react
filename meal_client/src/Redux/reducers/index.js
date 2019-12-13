import { combineReducers } from "redux";
import menuReducer from './menuReducer'
import orderReducer from './orderReducer'

const allReducers = combineReducers({
  menu: menuReducer,
  order: orderReducer
})

export default allReducers;