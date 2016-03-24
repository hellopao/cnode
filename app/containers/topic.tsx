"use strict";

import * as React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import "moment/locale/zh-cn";
import * as moment from "moment";

import CommentItem from "../components/commentItem";
import {fetchTopic} from "../actions/topics";
import {TABS} from "../constants/constValues";
import {ITopicItem} from "../interfaces/topicItem";
import {ITopicComment} from "../interfaces/topicComment";

import "../../styles/content.scss";
import "../../styles/markdown.css";

moment.locale('zh-cn');

class Topic extends React.Component<{ topic: ITopicItem, dispatch: Function, routeParams: { topicId: string } }, any> {

    componentDidMount() {
        this.props.dispatch(fetchTopic(this.props.routeParams.topicId));
    }

    render() {
        const {topic} = this.props;

        return (
            <section className="content">
                <div>
                    <h2 className="topic-title">{topic.title}</h2>
                    <div className="topic-meta">
                        <Link to={`/user/${topic.author && topic.author.loginname}`}>
                            <img className="avatar" src={topic.author && topic.author.avatar_url} />
                        </Link>
                        <div>
                            <Link to={`/user/${topic.author && topic.author.loginname}`} className="topic-author">{topic.author && topic.author.loginname}</Link>
                            <span className="topic-time">发布于{moment(topic.create_at).fromNow() }</span>
                            <span className="topic-view">{topic.visit_count}次浏览</span>
                        </div>
                        <span className={`topic-tag ${topic.tab}`}>{TABS[topic.tab]}</span>
                    </div>
                </div>
                <div className="topic-content markdown-body" dangerouslySetInnerHTML={{ __html: topic.content }}>
                </div>
                <div className="topic-comment">
                    <p><span className="topic-comment-count">{topic.reply_count}</span>回复</p>
                    <ul className="topic-comment-list">
                        {topic.replies && topic.replies.map((comment, index) => {
                            return (
                                <CommentItem comment={comment} key={index}/>
                            )
                        }) }
                    </ul>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    const { topic } = state;

    return {
        topic
    }
}

export default connect(mapStateToProps)(Topic)