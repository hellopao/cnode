"use strict";

import * as request from "../lib/request";

import * as actionTypes from "../constants/actionTypes";
import * as constValues from "../constants/constValues";

import {IUserInfo} from "../interfaces/userInfo";
 
export function requestUserInfo(user: IUserInfo) {
    return {
        type: actionTypes.REQUEST_USERINFO,
        user
    }
}

export function receiveUserInfo(user: IUserInfo) {
    return {
        type: actionTypes.RECEIVE_USERINFO,
        user
    }
}

export function fetchUserInfo(userId: string) {
    return dispatch => {
        request.get(`user/:userId`,{params: {userId}})
            .then((data: IUserInfo) => {
                dispatch(receiveUserInfo(data))
            })
    }
}