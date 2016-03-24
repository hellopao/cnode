"use strict";

import {resolve} from "path";

import * as Koa from "koa";
import convert = require('koa-convert');
import statics = require('koa-static');

import router from "./routes";

const app = new Koa();

app.use(async (ctx,next) => {
    try {
        await next();
    } catch (err) {
        console.log(err);
    }
});

app.use(convert(statics(resolve(__dirname,'../dist'))));

app.use(router.routes());

app.listen(3000);