"use strict";

import * as React from "react";
import {Link} from "react-router";

import {TABS} from "../../constants/constValues";

export default class Nav extends React.Component<{current:string},{current: number}> {
    
    constructor (props) {
        super(props);
        this.state = {current: TABS.filter(tab => tab.isSys).findIndex(tab => tab.name === this.props.current)};
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