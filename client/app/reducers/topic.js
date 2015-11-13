"use strict";

import {ADD_TOPIC, FETCH_TOPIC,FETCHED_TOPICS} from "../actions/topic";

const initialState = {
	topicList: []
};

export default function topics(state = initialState, action = {}) {
	
	const {type, result} = action;
	
	switch (action.type) {
		case FETCH_TOPIC: {
			return Object.assign({}, state, {
				topicId: action.id
			})
		}

		case FETCHED_TOPICS : {
			return Object.assign({},state,{
				topicList: result.topics
			});
		}
		
		default:
			return state;
	}
}