"use strict";

import * as React from "react";

import "../../styles/main.scss";

export default class Root extends React.Component<any,any> {
    
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
