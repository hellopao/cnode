"use strict";

import { combineReducers } from 'redux';

import {topics,topic} from "./topics";
import {user} from "./user";

const rootReducer = combineReducers({
    topics,
    topic,
    user
});

export default rootReducer