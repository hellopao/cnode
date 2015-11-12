"use strict";

const Koa = require('koa');

const config = require('./config');

let app = new Koa();

app.use((ctx,next) => {
	console.log('url: %s',ctx.req.url);
	next();
});

app.listen(config.PORT);

