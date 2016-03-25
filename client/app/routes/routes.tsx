"use strict";

import * as React from 'react'
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import Root from "../containers/root";
import Topics from "../containers/topics";
import TopicList from "../components/topics/topicList";
import Topic from "../containers/topic";
import User from "../containers/user";

import "../../styles/main.scss";

export default (
    <Router history={hashHistory}>
        <Route path='/' component={Root}>
            <IndexRedirect to="topics/all" />
            <Route path="topics" component={Topics}>
                <Route path=':tab' component={TopicList} />
            </Route>
            <Route path='topic/:topicId' component={Topic} />
            <Route path='user/:userId' component={User} />
        </Route>
    </Router>
)