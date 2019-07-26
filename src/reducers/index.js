import { combineReducers } from 'redux';
import DetailsReducer from './reducer_details'
//import ActiveBookReducer from './reducer_active_book'

const rootReducer = combineReducers({
    details: DetailsReducer
    //person_details: PersonDetailsReducer
})

export default rootReducer