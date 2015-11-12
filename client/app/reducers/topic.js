"use strict";

function fetchTopic() {
	
}

export default function topics(state = {}, action) {
	switch (action.type) {
		case "FETCH_TOPIC": {
			return Object.assign({}, state, {
				topicId: action.id
			})
		}

		default:
			return state;
	}
}