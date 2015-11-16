"use strict";

import React from "react";
import ReactDom from "react-dom";
import {Router,Route,Link} from "react-router";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {TABS} from "../config";

import Tab from "./tab";
import {TopicList,TopicContent,TopicComments} from "./topic";
import {fetchTopics} from "../actions/topic";

class App extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(fetchTopics({page:1},true));
	}
	
	componentWillReceiveProps(nextProps) {
		
	}
	
	render() {
		return (
			<div>
				<Tab />
				<section className="main">
					<aside className="side fl">
						<TopicList data={this.props.topics} />
					</aside>
					{this.props.topic && this.props.topic.id &&
					<section className="content">
						<TopicContent data={this.props.topic} />
						<TopicComments data={this.props.topic && this.props.topic.replies}/>
					</section>
					}
					{(!this.props.topic || !this.props.topic.id) && 
						<div className="loading">loading...</div>
					}
				</section>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		topics: state.topic.topics,
		topic: state.topic.topic
	}
}

export default connect(mapStateToProps)(App);