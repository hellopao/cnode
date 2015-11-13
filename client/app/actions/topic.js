"use strict";

import fetch from 'isomorphic-fetch';

import {API_SERVER} from "../config";

import * as actionType from "../constants/actionType";

export function fetchTopic(id) {
	return {
		type: actionType.FETCH_TOPIC,
		id: id
	}
}

export function fetchTopics(query) {
	return {
		type: actionType.FETCH_TOPICS,
		query: query
	}
}
