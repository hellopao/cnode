"use strict";

import React from "react";
import ReactDom from "react-dom";
import {Router,Route,Link} from "react-router";
import {bindActionCreators} from "redux";

import {TABS} from "../config";

import Tab from "./tab";
import {TopicList,TopicContent,TopicComments} from "./topic";

export default class App extends React.Component {
	
	componentDidMount(){
		console.log(this.props);
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