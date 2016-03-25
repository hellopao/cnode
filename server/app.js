"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const path_1 = require("path");
const Koa = require("koa");
const convert = require('koa-convert');
const statics = require('koa-static');
const routes_1 = require("./config/routes");
const app = new Koa();
app.use(function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield next();
        }
        catch (err) {
            console.log(err);
        }
    });
});
app.use(convert(statics(path_1.resolve(__dirname, '../dist'))));
app.use(routes_1.default.routes());
app.listen(process.env.PORT || 3000);
//# sourceMappingURL=app.js.map