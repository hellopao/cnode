"use strict";

import React from "react";
import ReactDom from "react-dom";
import {Router,Route,Link} from "react-router";
import {connect} from "react-redux";

import {TABS} from "../../config";
import store from "../../store";
import {fetchTopic,fetchTopics} from "../../actions/topic";

import TopicList from "./list";
import TopicDetail from "./detail";

export default class Topic extends React.Component {
	
	componentDidMount () {
		const {dispatch} = this.props;
		dispatch(fetchTopics({tab: this.props.params.tabName}));
	}
	
	componentDidUpdate (prevProps) {
		const {dispatch} = this.props;
		let tabName = this.props.params.tabName;
		if (prevProps.params.tabName !== tabName) {
			dispatch(fetchTopics({tab: tabName,page: 1}));
		}
	}
	
	render() {
		return (
			<section className="main">
				<aside className="side fl">
					<TopicList data={this.props.topics} />
				</aside>
				{this.props.children}
			</section>
		)
	}
}