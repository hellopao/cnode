"use strict";

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link} from "react-router";
import {Provider} from 'react-redux';

import routes from "./app/routes";
import store from "./app/store";

ReactDOM.render(
	<Provider store={ store } >
		{ routes }
	< /Provider>,
  	document.getElementById('root'));