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
		return (
			<li className="topic">
				<a href="" className="topic-avatar">
					<img src={this.topic.avatar} />
				</a>
				<h2 className="topic-title">
					<a href="#" className="">{this.topic.title}</a>
				</h2>
				<span className="topic-meta fr">
					<var>{this.topic.comment}</var>/<var>{this.topic.view}</var>
				</span>
			</li>
		)
	}
	
}

export class TopicList extends React.Component {
	
	render () {
		this.topic = this.props.data || {};	
		
		return (
			<ul className="topic-list">
				{this.props.topicList.map(topic => (
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
					<a href="" className="topic-author">{this.topic.author}</a>
					<span className="topic-date">{this.topic.ctime}</span>
					<span className="topic-category">{this.topic.tag}</span>
				</div>
				<div className="topic-body">
					{this.topic.content}
				</div>
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
					<a href="" className="comment-author">{this.comment.author}</a>
					<span className="comment-date">{this.comment.ctime}</span>
				</p>
				<p className="comment-body">{this.comment.content}</p>
				<p className="comment-device">{this.comment.device}</p>
			</li>
		)
	}
}

export class TopicComments extends React.Component {
	
	render () {
		return (
			<section className="topic-comments">
				<div className="comments-summary">
					<p>共12</p>
				</div>
				<ul className="comments-list">
					{this.props.commentList.map(comment => (
						<Comment data={comment} />
					))}
				</ul>
			</section>
		)
	}
}