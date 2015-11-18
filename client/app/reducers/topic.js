"use strict";

import * as actionType from "../constants/actionType";

const initialState = {
	tabName: "all",
	topics: [],
	topic: {},
	topicId: ""
};

export default function topics(state = initialState, action = {}) {
	
	switch (action.type) {
		case actionType.FETCHED_TOPIC: {
			return Object.assign({},state,{
				topic: action.topic
			});
		}

		case actionType.FETCHED_TOPICS : {
			return Object.assign({},state,{
				topics: action.topics
			});
		}
		
		default:
			return state;
	}
}