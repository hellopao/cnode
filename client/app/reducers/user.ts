"use strict";

import * as actionTypes from "../constants/actionTypes";

export function user(state,action) {
    switch (action.type) {
        case actionTypes.RECEIVE_USERINFO:
            return action.user || {};
        default:
            return state || {};
    }
}

