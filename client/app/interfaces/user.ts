"use strict";

export interface ITopic {
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
     * topicId
     */
    id: string;
    /**
     * topic最近上次回复时间
     */
    last_reply_at: string;
    /**
     * topic标题
     */
    title: string;

}

export interface IUserInfo {
    /**
     * 用户头像
     */
    avatar_url: string;
    /**
     * 用户账号创建时间
     */
    create_at: string;
    /**
     * 用户github账号
     */
    githubUsername: string;
    /**
     * 用户登录名称
     */
    loginname: string;
    /**
     * 用户最近回复的文章
     */
    recent_replies: Array<ITopic>;
    /**
     * 用户最近发布的话题
     */
    recent_topics: Array<ITopic>;
    /**
     * 用户积分
     */
    score: number;
}