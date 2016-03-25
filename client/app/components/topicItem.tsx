"use strict";

import * as React from "react";
import {Link} from "react-router";
const Moment = require('easy-datetime');

import {ITopicItem} from "../interfaces/topicItem";
import {TABS} from "../constants/constValues";

export default class TopicItem extends React.Component<{topic:ITopicItem},any> {
    
    render () {
        const {topic} = this.props;
        
        return (
            <li className="topic-item">
                <img src={topic.author.avatar_url} alt="" className="avatar" />
                <Link className="topic-item-body" to={`/topic/${topic.id}`}>
                    <div className="topic-meta">
                        <span className={`topic-tag ${topic.tab}`}>{TABS[topic.tab]}</span>
                        <span className="author">{topic.author.loginname}</span>
                        <span className="topic-time">{new Moment(topic.create_at).fromNow()}</span>
                        <span className="topic-rate">{topic.reply_count}/{topic.visit_count}</span>
                    </div>
                    <h2 className="topic-title">{topic.title}</h2>
                </Link>
            </li>
        )
    }
}