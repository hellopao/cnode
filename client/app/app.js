"use strict";

import React from "react";
import ReactDom from "react-dom";
import {Router,Route,Link} from "react-router";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {TABS} from "./config";
import {fetchTopic,fetchTopics} from "./actions/topic";
import Tab from "./components/tab";

class App extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount () {
		const {dispatch} = this.props;
		dispatch(fetchTopics({tab: TABS[0].id}));
	}
	
	render() {
		return (
			<div>
				<Tab />
				{this.props.topics && this.props.children}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		topics: state.topic.topics
	}
}

export default connect(mapStateToProps)(App);