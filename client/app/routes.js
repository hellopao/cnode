"use strict";

import React from "react";
import ReactDom from "react-dom";
import {Router,Route,Link,IndexRoute} from "react-router";

import App from "./views/app";
import Tab from "./views/tab";
import Topic from "./components/topic/index";
import TopicDetail from "./components/topic/detail";

import User from "./views/user";

export default (
	<Router>
		<Route path="/" component={App}>
			<Route path="/tab/:tabName" component={Topic}>
				<Route path="/topic/:topicId" component={TopicDetail} />
			</Route>
		</Route>
		<Route path="/user/:userId" component={User} />
	</Router>
);