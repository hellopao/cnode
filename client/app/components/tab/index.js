"use strict";

import React from "react";
import ReactDom from "react-dom";
import {Router,Route,Link} from "react-router";

import {TABS} from "../../config";

export default class Tab extends React.Component {
	
	render() {
		return (
			<nav>
				{TABS.map(tab => (
					<Link to={`/tab/${tab.id}`}>{tab.name}</Link>
				))}		
			</nav>
		)
	}
	
}