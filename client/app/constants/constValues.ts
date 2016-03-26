"use strict";

export const TABS = [{
    name: "all",
    text: "全部",
    isSys: true
},{
    name: "ask",
    text: "问答",
    isSys: true
},{
    name: "good",
    text: "精华",
    isSys: true
},{
    name: "job",
    text: "招聘",
    isSys: true
},{
    name: "share",
    text: "分享",
    isSys: true
},{
    name: "top",
    text: "置顶",
    isSys: false
}];

export const PAGE_SIZE = 20;

export const API_SVR = "https://cnodejs.org/api/v1/";

export const USER_TOPIC_TYPES = {
    recent_topics: "最近话题",
    recent_replies: "最近回复"
};