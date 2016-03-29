"use strict";

import * as axios from "axios";
import * as qs from "querystring";

import * as loading from "./loading";
import {API_SVR} from "../constants/constValues";

var request = axios.create({
    baseURL: API_SVR
});

export function get(url: string, opts?: { params?: any, query?: any , hideLoading?:boolean}) {
    opts = opts || {};
    if (opts.params) {
        Object.keys(opts.params).forEach(key => {
            url = url.replace(`:${key}`, opts.params[key]);
        });
    }
    if (opts.query) {
        url += `?${qs.stringify(opts.query)}`;
    }
   
    !opts.hideLoading && loading.show();
    
    return request.get(url)
        .then(res => {
            !opts.hideLoading && loading.hide();
            return res.data['data'];
        })
}