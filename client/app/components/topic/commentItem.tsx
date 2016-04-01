"use strict";

import * as React from "react";
import {Link} from "react-router";
import Moment from 'mini-moment';

import {ITopicComment} from "../../interfaces/comment";

export default class CommentItem extends React.Component<{comment:ITopicComment},any> {
    
    render () {
        const {comment} = this.props;
        
        return (
            <li className="topic-comment-item">
                <div className="topic-comment-head">
                    <Link to={`/user/${comment.author && comment.author.loginname}`} className="topic-comment-avatar mr_15">
                        <img className="avatar" src={comment.author && comment.author.avatar_url} />
                    </Link>
                    <div className="topic-comment-meta">
                        <span className="topic-comment-author">{comment.author && comment.author.loginname}</span>
                        <span className="topic-comment-time">{new Moment(comment.create_at).fromNow()}</span>
                        <span className="topic-comment-up fr">
                            <i className="icon i-good mr_5"></i>
                            <var>{comment.ups.length}</var>
                        </span>
                    </div>
                </div>
                <div className="topic-comment-content mt_10 mb_10" dangerouslySetInnerHTML={{__html: comment.content}}>
                </div>
            </li>
        )
    }
}