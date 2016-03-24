"use strict";

import * as React from "react";
import {Link} from "react-router";
import "moment/locale/zh-cn";
import * as moment from "moment";

import {ITopic} from "../interfaces/userInfo";
import {TABS} from "../constants/constValues";

moment.locale('zh-cn');

export default class UserTopic extends React.Component<{topic:ITopic},any> {
    
    render () {
        const {topic} = this.props;
        
        return (
            <li className="topic-item">
                <Link to={`/user/${topic.author && topic.author.loginname}`}>
                    <img className="avatar" src={topic.author && topic.author.avatar_url} />
                </Link>
                <Link className="topic-item-body" to={`/topic/${topic.id}`}>
                    <div className="topic-meta">
                        <span className="author">{topic.author.loginname}</span>
                        <span className="topic-time">{moment(topic.last_reply_at).fromNow()}</span>
                    </div>
                    <h2 className="topic-title">{topic.title}</h2>
                </Link>
            </li>
        )
    }
}