import { combineReducers } from 'redux'
import dataReducer from './dataReducer'

// Define App combineReducers 
const appReducer = combineReducers({
    dataReducer,
})

// Define App rootReducer
const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;
