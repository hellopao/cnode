"use strict";

import {ITopicComment} from "./comment";

export interface ITopicItem {
    /**
     * topic作者
     */
    author: {
        /**
         * topic作者账号名称
         */
        loginname: string;
        /**
         * topic作者头像地址
         */
        avatar_url: string;
    };
    /**
     * topic作者id
     */
    author_id: string;
    /**
     * topic内容
     */
    content: string;
    /**
     * topic创建时间
     */
    create_at: string;
    /**
     * topic是否精华
     */
    good: boolean;
    /**
     * topic id
     */
    id: string;
    /**
     * topic是否被收藏
     */
    is_collect: boolean;
    /**
     * topic最近评论时间
     */
    last_reply_at: string;
    /**
     * topic评论
     */
    replies?: Array<ITopicComment>;
    /**
     * topic评论数量
     */
    reply_count: number;
    /**
     * topic所属标签
     */
    tab: string;
    /**
     * topic标题
     */
    title: string;
    /**
     * topic是否置顶
     */
    top: boolean;
    /**
     * topic被查看次数
     */
    visit_count: number;
}