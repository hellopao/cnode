"use strict";

import * as React from "react";
import {connect} from "react-redux";

import InfinitList from "../infiniteList";

import Topic from "./topicItem";
import {fetchTopics} from "../../actions/topics";
import {ITopicItem} from "../../interfaces/topic";

export default class TopicList extends React.Component<{ topics: ITopicItem[]; dispatch: Function; routeParams: { tab: string }; load: Function; refresh: Function }, any> {

    render() {
        const {topics} = this.props;

        return (
            <section className="topics"
                style={ {
                    position: 'absolute',
                    zIndex: '1',
                    top: '55px',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    overflow: 'hidden'
                }}>
                <InfinitList
                    refresh={this.props.refresh }
                    load={this.props.load }>
                    <ul className="topic-list">
                        {topics && topics.map && topics.map((topic, index) => {
                            return (
                                <Topic topic={topic} key={index}/>
                            )
                        }) }
                    </ul>
                </InfinitList>
            </section>
        )
    }
}