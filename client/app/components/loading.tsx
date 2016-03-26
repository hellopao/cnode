"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";

export default class Loading extends React.Component<{text?:string;duration?:number}, any> {
    
    render() {
        return (
            <div ref="loading" className="loading">
                <i className="loading-icon"></i>
                <p>{this.props.text || "加载中..."}</p>
            </div>
        )
    }
}