"use strict";

import * as React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import Moment from 'easy-datetime';

import Menu from "../components/menu";
import UserTopic from "../components/user/userTopic";
import TabPanel from "../components/user/tabPanel";
import {fetchUserInfo} from "../actions/user";
import {USER_TOPIC_TYPES} from "../constants/constValues";
import {IUserInfo, ITopic} from "../interfaces/user";

import "../../styles/user.scss";

class User extends React.Component<{ user: IUserInfo, dispatch: Function, params: { userId: string } }, any> {

    componentDidMount() {
        this.props.dispatch(fetchUserInfo(this.props.params.userId));
    }

    componentWillReceiveProps(nextProps: { params: { userId: string } }) {
        if (this.props.params.userId !== nextProps.params.userId) {
            this.props.dispatch(fetchUserInfo(nextProps.params.userId));
        }
    }

    render() {
        const {user} = this.props;

        const tabs = Object.keys(USER_TOPIC_TYPES).map(topicType => {
            return {
                name: USER_TOPIC_TYPES[topicType],
                content: (
                    <ul className="user-topics">
                        {user[topicType] && user[topicType].map((topic: ITopic, index) => {
                            return (
                                <UserTopic topic={topic} key={index}/>
                            )
                        }) }
                    </ul>
                )
            }
        });

        return (
            <div>
                <Menu title="用户" />
                <section className="user">
                    <div className="user-info">
                        <img src={user.avatar_url} alt="" className="user-avatar"/>
                        <div className="meta">
                            <div className="account">
                                <p className="user-loginname">用户名: {user.loginname}</p>
                                <p className="user-github">
                                    github: <a className="github" href={`https://github.com/${user.githubUsername}`}> @{user.githubUsername}</a>
                                </p>
                            </div>
                            <div className="prop">
                                <p className="user-regtime">创建时间: {new Moment(user.create_at).fromNow() }</p>
                                <p className="user-score">积分: {user.score}</p>
                            </div>
                        </div>
                    </div>
                    <TabPanel tabs={tabs} />
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;

    return {
        user
    }
}

export default connect(mapStateToProps)(User)