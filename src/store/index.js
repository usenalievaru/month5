import {combineReducers, createStore} from "redux";
import updateUser from "./updateUser.js";
const rootReducer = combineReducers({
    user:updateUser
})

const store  = createStore(rootReducer)
export default store
