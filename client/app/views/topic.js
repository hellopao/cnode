"use strict";

import React from "react";
import ReactDom from "react-dom";
import {Router,Route,Link} from "react-router";
import {connect} from "react-redux";

import {TABS} from "../config";
import store from "../store";
import {fetchTopic,fetchTopics} from "../actions/topic";

class TopicItem extends React.Component {

	componentDidMount (){
		
	}
	
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

export class TopicList extends React.Component {
	
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

class TopicContent extends React.Component {
	
	componentDidMount (){	
		
	}
	
	render () {
		this.topic = this.props.data || {};	
		
		return (
			<section className="topic-content">
				<h2 className="topic-title">{this.topic.title}</h2>
				<div className="topic-meta">
					<Link to={`/user/${this.topic.author_id}`} className="topic-author">{this.topic.author && this.topic.author.loginname}</Link>
					<span className="topic-date">{this.topic.create_at}</span>
					<span className="topic-category">{this.topic.tab}</span>
				</div>
				<div className="topic-body" dangerouslySetInnerHTML={{__html: this.topic.content}}></div>
			</section>
		)
	}
	
}

class TopicComment extends React.Component {

	componentDidMount () {
		
	}
	
	render () {
		this.comment = this.props.data || {};	
		
		return (
			<li className="comment">
				<p className="comment-meta">
					<a href="" className="comment-author">{this.comment.author && this.comment.author.avatar_url}</a>
					<span className="comment-date">{this.comment.create_at}</span>
				</p>
				<p className="comment-body" dangerouslySetInnerHTML={{__html: this.comment.content}}></p>
			</li>
		)
	}
}

class TopicComments extends React.Component {
	
	render () {
		
		this.comments = this.props.data || [];
		
		return (
			<section className="topic-comments">
				<div className="comments-summary">
					<p>共{this.comments.length}</p>
				</div>
				<ul className="comments-list">
					{this.comments.map(comment => (
						<TopicComment data={comment} />
					))}
				</ul>
			</section>
		)
	}
}

class Topic extends React.Component {
	
	componentDidMount () {
		const {dispatch} = this.props;
		dispatch(fetchTopics({tab: this.props.params.tabName}));
	}
	
	componentDidUpdate (prevProps) {
		const {dispatch} = this.props;
		
		dispatch(fetchTopics({tab: this.props.params.tabName}));
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


export class TopicDetail extends React.Component {
	
	componentDidMount () {
		const {dispatch} = this.props;
		this.topicId = this.props.params.topicId;
		
		dispatch(fetchTopic(this.topicId));
	}
	
	componentDidUpdate (prevProps) {
		let oldId = prevProps.params.topicId;
		let newId = this.props.params.topicId;
		
		if (oldId !== newId) {
			const {dispatch} = this.props;
			dispatch(fetchTopic(newId));
		}
	}
	
	render () {
		
		return (
			<section className="content">
				<TopicContent data={this.props.topic} />
				<TopicComments data={this.props.topic && this.props.topic.replies}/>
			</section>
		)
	}
}

function mapStateToProps(state) {
	return {
		topic: state.topic.topic
	}
}

export default connect(mapStateToProps)(Topic);
