"use strict";

import * as actionType from "../constants/actionType";

const initialState = {
	topicList: []
};

export default function topics(state = initialState, action = {}) {
	
	switch (action.type) {
		case actionType.FETCH_TOPIC: {
			
		}

		case actionType.FETCH_TOPICS : {
			
		}
		
		default:
			return state;
	}
}