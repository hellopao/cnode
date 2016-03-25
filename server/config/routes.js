"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const axios = require("axios");
const Router = require("koa-router");
const config_1 = require("./config");
const router = new Router({
    prefix: config_1.API_PREFIX
});
router.get('*', function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const api = ctx.url.replace(config_1.API_PREFIX, '');
        const result = yield axios.get(`${config_1.API_SVR}/${api}`, {
            headers: ctx.headers
        });
        ctx.body = result;
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=routes.js.map