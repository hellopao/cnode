"use strict";

import * as React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
const Moment = require('easy-datetime');

import UserTopic from "../components/user/userTopic";
import {fetchUserInfo} from "../actions/user";
import {TABS} from "../constants/constValues";
import {IUserInfo} from "../interfaces/user";

import "../../styles/user.scss";

class User extends React.Component<{user: IUserInfo, dispatch: Function,routeParams:{userId:string}},any> {
    
    componentDidMount () {
        this.props.dispatch(fetchUserInfo(this.props.routeParams.userId));
    }
    
    render () {
        const {user} = this.props;
        
        return (
            <section className="user">
                <div className="user-info">
                    <img src={user.avatar_url} alt="" className="user-avatar"/>
                    <p className="user-loginname">{user.loginname}</p>
                    <p className="user-github">
                        github: <a href={`https://github.com/${user.githubUsername}`}>@{user.githubUsername}</a>
                    </p>
                    <p className="user-regtime">账号创建于 {new Moment(user.create_at).fromNow()}</p>
                    <p className="user-score">积分{user.score}</p>
                </div>
                <ul className="user-topics">
                    {user.recent_topics && user.recent_topics.map((topic,index) => {
                        return (
                            <UserTopic topic={topic} key={index} />
                        )
                    })}
                </ul>
            </section>
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