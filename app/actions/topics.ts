"use strict";

import * as request from "../lib/request";

import * as actionTypes from "../constants/actionTypes";
import * as constValues from "../constants/constValues";

import {ITopicItem} from "../interfaces/topicItem";

export function requestTopics(topics: ITopicItem[]) {
    return {
        type: actionTypes.REQUEST_TOPICS,
        topics
    }
}

export function receiveTopics(topics: ITopicItem[], refresh: boolean) {
    return {
        type: actionTypes.RECEIVE_TOPICS,
        topics,
        refresh
    }
}

export function fetchTopics(tab: string, page: number, cb?: Function) {
    return dispatch => {
        request.get(`topics`, { query: { tab, page, limit: constValues.PAGE_SIZE } })
            .then((data: ITopicItem[]) => {
                dispatch(receiveTopics(data, page === 1));
                cb && cb();
            })
    }
}

export function requestTopic(topic: ITopicItem) {
    return {
        type: actionTypes.REQUEST_TOPIC,
        topic
    }
}

export function receiveTopic(topic: ITopicItem) {
    return {
        type: actionTypes.RECEIVE_TOPIC,
        topic
    }
}

export function fetchTopic(topicId: string) {
    return dispatch => {
        request.get(`/topic/:topicId`, { params: { topicId } })
            .then((data: ITopicItem) => {
                dispatch(receiveTopic(data))
            })
    }
}
