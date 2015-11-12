"use strict";

import React from "react";
import {createStore,combineReducers } from "redux";

import topics from "./reducers/topic";

const App = combineReducers({
	topics
});

export default createStore(App)