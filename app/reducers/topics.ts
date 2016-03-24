"use strict";

import * as actionTypes from "../constants/actionTypes";
import {ITopicItem} from "../interfaces/topicItem";

export function topics(state: ITopicItem[], action) {
    switch (action.type) {
        case actionTypes.RECEIVE_TOPICS:
            if (action.refresh) {
                return action.topics || [];
            }
            return state.concat(action.topics);
        default:
            return state || [];
    }
}

export function topic(state, action) {
    switch (action.type) {
        case actionTypes.RECEIVE_TOPIC:
            return action.topic || {};
        default:
            return state || {};
    }
}