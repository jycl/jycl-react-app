/**
 * Entry point for reducers.
 */
import { combineReducers } from "redux";

import data from "./dataReducer";

/**
 * redux.combineReducers takes all reducers and combines them into one.
 * It also tells which reducer is responsible for which data in the store.
 */
export default combineReducers({
    data
});