"use strict";

const axios = require("axios");
const qs = require('qs');

import {API_SERVER, PAGE_SIZE} from "../config";

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

export function fetchTopics({limit = PAGE_SIZE, page = 1, tab = "all"}) {
	return dispatch => {

		let search = qs.stringify({ limit, page, tab })

		return axios.get(`${API_SERVER}/topics/?${search}`)
			.then(response => {
				let res = response.data;

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