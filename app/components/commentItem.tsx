"use strict";

import * as React from "react";
import {Link} from "react-router";
import "moment/locale/zh-cn";
import * as moment from "moment";

moment.locale('zh-cn');

import {ITopicComment} from "../interfaces/topicComment";
import {TABS} from "../constants/constValues";

moment.locale('zh-cn');

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
                    <span className="topic-comment-time">{moment(comment.create_at).fromNow()}</span>
                </div>
                <div className="topic-comment-content" dangerouslySetInnerHTML={{__html: comment.content}}>
                </div>
            </li>
        )
    }
}