"use strict";

import React from "react";
import ReactDom from "react-dom";
import {Router,Route,Link} from "react-router";

import {TABS} from "../config";
import store from "../store";

class Topic extends React.Component {

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
					<a href="#" className="">{this.topic.title}</a>
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
		this.topics = this.props.data || {};	
		
		return (
			<ul className="topic-list">
				{this.topics.map(topic => (
					<Topic data={topic}/>
				))}
			</ul>
		)
	}
	
}

export class TopicContent extends React.Component {
	
	componentDidMount (){	
		
	}
	
	render () {
		this.topic = this.props.data || {};	
		
		return (
			<section className="topic-content">
				<h2 className="topic-title">{this.topic.title}</h2>
				<div className="topic-meta">
					<a href="" className="topic-author">{this.topic.author && this.topic.author.loginname}</a>
					<span className="topic-date">{this.topic.create_at}</span>
					<span className="topic-category">{this.topic.tab}</span>
				</div>
				<div className="topic-body" dangerouslySetInnerHTML={{__html: this.topic.content}}></div>
			</section>
		)
	}
	
}

class Comment extends React.Component {

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

export class TopicComments extends React.Component {
	
	render () {
		
		this.comments = this.props.data || [];
		
		return (
			<section className="topic-comments">
				<div className="comments-summary">
					<p>共{this.comments.length}</p>
				</div>
				<ul className="comments-list">
					{this.comments.map(comment => (
						<Comment data={comment} />
					))}
				</ul>
			</section>
		)
	}
}