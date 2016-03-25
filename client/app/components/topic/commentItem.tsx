"use strict";

import * as React from "react";
import {Link} from "react-router";
import Moment from 'easy-datetime';

import {ITopicComment} from "../../interfaces/comment";

export default class CommentItem extends React.Component<{comment:ITopicComment},any> {
    
    render () {
        const {comment} = this.props;
        
        return (
            <li className="topic-comment-item">
                <div className="topic-comment-meta">
                    <Link to={`/user/${comment.author && comment.author.loginname}`}>
                        <img className="avatar" src={comment.author && comment.author.avatar_url} />
                    </Link>
                    <span className="topic-comment-author">{comment.author && comment.author.loginname}</span>
                    <span className="topic-comment-time">{new Moment(comment.create_at).fromNow()}</span>
                </div>
                <div className="topic-comment-content" dangerouslySetInnerHTML={{__html: comment.content}}>
                </div>
            </li>
        )
    }
}