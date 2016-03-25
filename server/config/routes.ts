"use strict";

import * as Koa from "koa";
import * as axios from "axios";
import * as Router from "koa-router";

import {API_PREFIX,API_SVR} from "./config";

const router = new Router({
    prefix: API_PREFIX
});

router.get('*', async (ctx,next) => {
    const api = ctx.url.replace(API_PREFIX,'');
    
    const result = await axios.get(`${API_SVR}/${api}`,{
        headers: ctx.headers
    });
    
    ctx.body = result;
});

export default router;