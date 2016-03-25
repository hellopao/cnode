"use strict";

import {resolve} from "path";

import * as Koa from "koa";
const convert = require('koa-convert');
const statics = require('koa-static');

import router from "./config/routes";

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