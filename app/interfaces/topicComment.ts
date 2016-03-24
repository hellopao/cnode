"use strict";

export interface ITopicComment {
    /**
     * topic评论者
     */
    author: {
        /**
         * topic评论者账号名称
         */
        loginname: string;
        /**
         * topic评论者头像
         */
        avatar_url: string;
    };
    /**
     * topic评论内容
     */
    content: string;
    /**
     * topic评论时间
     */
    create_at: string;
    /**
     * topic评论id
     */
    id: string;
    /**
     * topic评论回复id
     */
    reply_id: string;
    /**
     * topic评论点赞信息
     */
    ups: string[]
}