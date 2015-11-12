"use strict";

export function createTopic (name) {
	return {
		type: "ADD_TOPIC"
	}
}

export function fetchTopic (id) {
	return {
		type: "FETCH_TOPIC",
		id: id
	}
}