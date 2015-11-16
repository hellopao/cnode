"use strict";

const axios = require("axios");

import {API_SERVER,PAGE_SIZE} from "../config";

import * as actionType from "../constants/actionType";

export function receiveTopic(topic) {
	return {
		type: actionType.FETCHED_TOPIC,
		topic: topic
	}
}

export function receiveTopics(topics) {
	return {
		type: actionType.FETCHED_TOPICS,
		topics: topics
	}
}

export function fetchTopics(query,show) {
	return dispatch => {
		return axios.get(`${API_SERVER}/topics/?limit=${query.limit || PAGE_SIZE}&page=${query.page}`)
			.then(response => {
				let res = response.data;
				
				if (show) {
					let topic = res.data[0];
					dispatch(fetchTopic(topic.id));					
				}
				dispatch(receiveTopics(res.data))
			})
	}
}

export function fetchTopic(topicId) {
	return dispatch => {
		return axios.get(`${API_SERVER}/topic/${topicId}`)
			.then(response => {
				let res = response.data;
				dispatch(receiveTopic(res.data))
			})
	}
}