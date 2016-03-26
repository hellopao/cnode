"use strict";

import * as React from "react";
import {Link} from "react-router";

import {TABS} from "../../constants/constValues";

export default class Nav extends React.Component<any,{current: number}> {
    
    constructor (props) {
        super(props);
        this.state = {current: 0};
    }
    
    handleClick (index) {
        this.setState({current: index});
    }
    
    render () {
        return (
            <nav className="nav">
                {TABS.filter(tab => tab.isSys).map((tab,index) => {
                    return (
                        <Link 
                            to={`/topics/${tab.name}`} 
                            onClick={()=>this.handleClick(index)}
                            className={`nav-item ${this.state.current === index ? 'current': ''}`} 
                            key={index}>
                            {tab.text}
                        </Link>      
                    )              
                })}
            </nav>
        )
    }
}