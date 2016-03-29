"use strict";

import * as React from "react";
const debounce = require('debounce');

export default class BackToTop extends React.Component<any,{show: boolean}> {
    
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    
    componentDidMount () {
        window.addEventListener('scroll',debounce(() => {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            this.setState({show: scrollTop > 100});
        }));
    }
    
    handleClick () {
        window.scrollTo(0, 0);
    }
    
    render () {
        return (
            <div className="totop" onClick={()=> this.handleClick()} style={{display: this.state.show ? "" : "none"}}>
                <i className="icon i-dingbu"></i>
            </div>
        )
    }
}