"use strict";

import * as axios from "axios";
import * as qs from "qs";

import {API_SVR} from "../constants/constValues";

var request = axios.create({
    baseURL: API_SVR
});

export function get(url: string, opts?: { params?: any, query?: any }) {
    if (opts.params) {
        Object.keys(opts.params).forEach(key => {
            url = url.replace(`:${key}`, opts.params[key]);
        });
    }
    if (opts.query) {
        url += `?${qs.stringify(opts.query)}`;
    }
    
    return request.get(url)
        .then(res => {
            return res.data['data'];
        })
}