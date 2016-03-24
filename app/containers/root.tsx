"use strict";

import * as React from "react";

export default class Root extends React.Component<any,any> {
    
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}