"use strict";

import {createStore,applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

import reducers from "../reducers/index";

export default function (initialState) {
	 return applyMiddleware(thunkMiddleware)(createStore)(reducers,initialState);
}