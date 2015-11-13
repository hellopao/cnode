"use strict";

import fetch from 'isomorphic-fetch';

import {API_SERVER} from "../config";

export const ADD_TOPIC = "ADD_TOPIC";

export function createTopic(name) {
	return {
		type: "ADD_TOPIC"
	}
}

export const FETCH_TOPIC = "FETCH_TOPIC";

export function fetchTopic(id) {
	return {
		type: "FETCH_TOPIC",
		id: id
	}
}

export const TOPICS_FETCHED = "TOPICS_FETCHED";

export function fetchedTopics (topics) {
	return {
		type: TOPICS_FETCHED,
		topics: topics
	}
}

export function fetchTopics(dispatch) {
	return dispatch => {
		return fetch(`${API_SERVER}/topics?page=1&limit=40`)
			.then(response => {
				dispatch(fetchedTopics(response));
			})
	};
}