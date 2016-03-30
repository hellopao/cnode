"use strict";

import * as React from "react";
import {Link} from "react-router";
import Moment from 'mini-moment';

import {ITopicItem} from "../../interfaces/topic";
import {TABS} from "../../constants/constValues";

export default class TopicItem extends React.Component<{topic:ITopicItem},any> {
    
    render () {
        const {topic} = this.props;
        
        const tab = TABS.find(tab => tab.name === (topic.top ? "top" : (topic.good ? "good" : topic.tab)));
        
        return (
            <li className="topic-item">
                <Link to={`/user/${topic.author.loginname}`}>
                    <img src={topic.author.avatar_url} alt="" className="avatar" />
                </Link>
                <Link className="topic-item-body" to={`/topic/${topic.id}`}>
                    <div className="topic-meta">
                        <span className={`topic-tag ${tab && tab.name}`}>
                            {tab && tab.text}
                        </span>
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