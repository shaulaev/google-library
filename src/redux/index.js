import { createStore, applyMiddleware } from "redux";
import { bookReducer } from "./reducer/bookReducer";
import { searchReducer } from "./reducer/searchReducer";
import { thunk } from "redux-thunk";
import { combineReducers } from "redux";

const reducer = combineReducers({ books: bookReducer, search: searchReducer });

export const store = createStore(reducer, applyMiddleware(thunk));
