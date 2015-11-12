"use strict";

import React from "react";
import ReactDom from "react-dom";
import {Router,Route,Link} from "react-router";

import App from "./views/app";
import Tab from "./views/tab";
import Topic from "./views/topic";
import User from "./views/user";

export default (
	<Router>
		<Route path="/" component={App}>
			// <Route path="tab/:tabName" component={Tab} />
			// <Route path="topic/:topicId" component={Topic} />
			// <Route path="user/:userId" component={User} />
		</Route>
	</Router>
);