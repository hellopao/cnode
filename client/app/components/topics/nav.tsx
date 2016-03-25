"use strict";

import * as React from "react";
import {Link} from "react-router";

import {TABS} from "../../constants/constValues";

export default class Nav extends React.Component<any,any> {
    
    render () {
        return (
            <nav className="nav fr">
                {Object.keys(TABS).map((tab,index) => {
                    return (
                        <Link to={`/topics/${tab}`} className="nav-item" key={index}>{TABS[tab]}</Link>      
                    )              
                })}
            </nav>
        )
    }
}