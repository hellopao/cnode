"use strict";

import * as React from "react";

export default class TabPanel extends React.Component<{tabs:Array<{name:string,content:any}>},{current:number}> {
    
    constructor (props) {
        super(props);
        this.state = {
            current: 0
        };
    }
    
    switchTab (index:number) {
        this.setState({
            current:index
        });
    }
    
    render () {
        return (
            <section className="panel">
                <ul className="panel-tab">
                    {this.props.tabs.map((tab,index) => {
                        return (
                            <li className={`tab-item ${index === this.state.current ? 'selected' : ''}`} key={index} onClick={() => this.switchTab(index)}>
                                {tab.name}
                            </li>
                        )
                    })}
                </ul>
                <div className="panel-content">
                    {this.props.tabs.map((tab,index) => {
                        return (
                            <div style={{display: this.state.current === index ? '': 'none'}}>
                                {tab.content}
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}