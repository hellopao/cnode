"use strict";

import * as React from "react";
import {connect} from "react-redux";

import Nav from "../components/topics/nav";
import TopicList from "../components/topics/topicList";
import {fetchTopics} from "../actions/topics";
import {ITopicItem} from "../interfaces/topic";

import "../../styles/list.scss";

class Topics extends React.Component<{ topics: ITopicItem[], dispatch: Function, params: { tab: string } ,children:any}, { page: number }> {

    constructor(props) {
        super(props);
        this.state = { page: 1 };
    }

    componentDidMount() {
        this.fetchTopics(this.props.params.tab, 1);
    }

    componentWillReceiveProps(nextProps: { params: { tab: string } }) {
        if (this.props.params.tab !== nextProps.params.tab) {
            this.fetchTopics(nextProps.params.tab, 1, () => {
                this.setState({ page: 1 })
            });
        }
    }

    fetchTopics(tab: string, page: number, cb?: Function) {
        const {dispatch} = this.props;
        dispatch(fetchTopics(tab || "all", page, cb));
    }

    refresh() {
        this.fetchTopics(this.props.params.tab, 1, () => {
            this.setState({ page: 1 })
        });
    }

    load() {
        this.fetchTopics(this.props.params.tab, this.state.page + 1, () => {
            this.setState({ page: this.state.page + 1 });
        });
    }

    render() {
        const {topics} = this.props;

        return (
            <div>
                <Nav current={this.props.params.tab}></Nav>
                {
                    this.props.children && React.cloneElement(this.props.children, {
                        topics,
                        refresh: this.refresh.bind(this),
                        load: this.load.bind(this)
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { topics } = state;

    return {
        topics
    }
}

export default connect(mapStateToProps)(Topics);