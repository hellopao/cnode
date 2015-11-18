"use strict";

import React from "react";
import ReactDom from "react-dom";
import {Router,Route,Link} from "react-router";
import {connect} from "react-redux";

import {TABS} from "../../config";
import store from "../../store";
import {fetchTopic,fetchTopics} from "../../actions/topic";

class TopicComment extends React.Component {
	
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

class TopicContent extends React.Component {
	
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

class TopicDetail extends React.Component {
	
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

export default connect(mapStateToProps)(TopicDetail);