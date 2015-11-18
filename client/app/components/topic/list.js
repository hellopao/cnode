"use strict";

import React from "react";
import ReactDom from "react-dom";
import {Router,Route,Link} from "react-router";
import {connect} from "react-redux";

import {TABS} from "../../config";
import store from "../../store";
import {fetchTopic,fetchTopics} from "../../actions/topic";

class TopicItem extends React.Component {
	
	render() {
		this.topic = this.props.data || {};
		
		return (
			<li className="topic">
				<a href="" className="topic-avatar">
					<img src={this.topic.author.avatar_url} />
				</a>
				<h2 className="topic-title">
					<Link to={`/topic/${this.topic.id}`} className="">{this.topic.title}</Link>
				</h2>
				<span className="topic-meta fr">
					<var>{this.topic.reply_count}</var>/<var>{this.topic.visit_count}</var>
				</span>
			</li>
		)
	}
	
}

export default class TopicList extends React.Component {
	
	render () {
		this.topics = this.props.data || [];	
		
		return (
			<ul className="topic-list">
				{this.topics.map(topic => (
					<TopicItem data={topic}/>
				))}
			</ul>
		)
	}
	
}
