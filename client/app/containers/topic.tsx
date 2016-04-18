"use strict";

import * as React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import * as Moment from 'mini-moment';

import CommentItem from "../components/topic/commentItem";
import Menu from "../components/menu";

import {fetchTopic} from "../actions/topics";
import {TABS} from "../constants/constValues";
import {ITopicItem} from "../interfaces/topic";
import {ITopicComment} from "../interfaces/comment";

import "../../styles/content.scss";
import "../../styles/markdown.css";

class Topic extends React.Component<{ topic: ITopicItem, dispatch: Function, routeParams: { topicId: string } }, any> {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchTopic(this.props.routeParams.topicId));
    }

    render() {
        const {topic} = this.props;

        const tab = TABS.find(tab => tab.name === (topic.top ? "top" : (topic.good ? "good" : topic.tab)));

        return (
            <div>
                <Menu title="主题" />
                <section className="content">
                    <div>
                        <h2 className="topic-title">{topic.title}</h2>
                        <div className="topic-meta mt_10">
                            <Link to={`/user/${topic.author && topic.author.loginname}`} className="mr_15">
                                <img className="avatar" src={topic.author && topic.author.avatar_url} />
                            </Link>
                            <div>
                                <Link to={`/user/${topic.author && topic.author.loginname}`} className="topic-author">{topic.author && topic.author.loginname}</Link>
                                <span className="topic-time">发布于{new Moment(topic.create_at).fromNow() }</span>
                                <span className="topic-view">{topic.visit_count}次浏览</span>
                            </div>
                            <span className={`topic-tag ${tab && tab.name}`}>{tab && tab.text}</span>
                        </div>
                    </div>
                    <div className="topic-content markdown-body" dangerouslySetInnerHTML={{ __html: topic.content }}>
                    </div>
                    <div className="topic-comment">
                        <p className="m_10"><span className="topic-comment-count">{topic.reply_count}</span>回复</p>
                        <ul className="topic-comment-list">
                            {topic.replies && topic.replies.map((comment, index) => {
                                return (
                                    <CommentItem comment={comment} key={index}/>
                                )
                            }) }
                        </ul>
                    </div>
                </section>
            </div>
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