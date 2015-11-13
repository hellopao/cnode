"use strict";

import {createStore} from "redux";

import reducers from "../reducers/index";

export default function (initialState) {
	return createStore(reducers,initialState);
}