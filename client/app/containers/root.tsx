"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";

import BackToTop from "../components/backToTop";

import "../../styles/reset.css";
import "../../styles/iconfont.css";
import "../../styles/main.scss";

export default class Root extends React.Component<{children:any},any> {
    
    componentDidMount () {
        const wrap = document.createElement('div');
        document.body.appendChild(wrap);
        ReactDOM.render(
            <BackToTop />,
            wrap
        )
    }
    
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
