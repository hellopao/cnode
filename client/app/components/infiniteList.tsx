"use strict";

import * as React from "react";
const ReactIScroll = require('react-iscroll').default;
const iScroll = require("iscroll/build/iscroll-probe");

export default class InfiniteList extends React.Component<{ refresh: Function; load: Function }, { refreshing?: boolean; loading?: boolean; }> {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }
    
    onScroll(iscroll) {
        if (iscroll.y > 40 && !this.state.refreshing) {
            this.setState({ refreshing: true });
            return;
        }

        if (iscroll.maxScrollY - iscroll.y > 40 && !this.state.loading) {
            this.setState({ loading: true });
            return;
        }
    }
    
    onScrollEnd(iscroll) {
        if (this.state.refreshing) {
            this.props.refresh();
            this.setState({refreshing:false});
            return;
        }
        
        if (this.state.loading) {
            this.props.load();
            this.setState({loading:false});
        }
        
    }

    render() {

        const iScrollOpts = {
            probeType: 3,
            click: true
        };

        return (
            <ReactIScroll
                ref="iscroll"
                options={iScrollOpts}
                onScroll={this.onScroll.bind(this)}
                onScrollEnd={this.onScrollEnd.bind(this)}
                iScroll={iScroll}>
                <div>
                    <p className="load-tip" style={{ display: this.state.refreshing ? "" : "none" }}>刷新中...</p>
                    {this.props.children}
                    <p className="load-tip" style={{ display: this.state.loading ? "" : "none" }}>加载中...</p>
                </div>
            </ReactIScroll>
        )
    }
}