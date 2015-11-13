"use strict";

import React from "react";
import ReactDom from "react-dom";
import {Router,Route,Link} from "react-router";

import {TABS} from "../config";
import store from "../store";

import Tab from "./tab";
import {TopicList,TopicContent,TopicComments} from "./topic";
import * as TopicAction from "../actions/topic";

export default class App extends React.Component {
	
	componentDidMount(){
	}
	
	render() {
		return (
			<div>
				<Tab />
				<section className="main">
					<aside className="side fl">
						<TopicList topicList={[]} />
					</aside>
					<section className="content">
						<TopicContent topic={{}} />
						<TopicComments commentList={[]}/>
					</section>
				</section>
			</div>
		)
	}
}