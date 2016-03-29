"use strict";

import * as React from "react";
import ReactRouter from "react-router";

import "../../styles/content.scss";
import "../../styles/markdown.css";

export default class Menu extends React.Component<{title:string}, any> {

    context: {
        router: ReactRouter.RouterOnContext;
    };

    static contextTypes: React.ValidationMap<any> = {
		router: React.PropTypes.object
	};
    
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="menu">
                <a className="back" onClick={() => this.context.router.goBack() }><i className="icon i-back"></i></a>
                <span className="title">{this.props.title}</span>
            </div>
        )
    }
}