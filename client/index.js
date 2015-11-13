"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link} from "react-router";
import {Provider} from 'react-redux';
import {bindActionCreators} from "redux";

import createStore from "./app/store/index";

import routes from "./app/routes";

let store = createStore({});
		
ReactDOM.render(
	<Provider store={ store } >
		{ routes }
	< /Provider>,
  	document.getElementById('root'));