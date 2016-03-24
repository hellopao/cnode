"use strict";

import * as React from "react";
import ReactIScroll from 'react-iscroll';
import iScroll = require("iscroll/build/iscroll-probe");

export default class InfiniteList extends React.Component<{ refresh: Function; load: Function }, { refreshing?: boolean; loading?: boolean; }> {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }

    componentDidMount() {
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    }
    
    componentWillReceiveProps () {
        this.setState({refreshing:false,loading: false});
    }

    onScrollEnd(iscroll) {
        if (iscroll.y === 0) {
            this.setState({ refreshing: true });
            this.props.refresh();
            return;
        }

        if (iscroll.y - iscroll.maxScrollY < 5) {
            this.setState({ loading: true });
            this.props.load();
            return;
        }
    }

    render() {

        const iScrollOpts = {
            mouseWheel: true,
            scrollbars: true
        };

        return (
            <ReactIScroll
                ref="iscroll"
                options={iScrollOpts}
                iScroll={iScroll}
                onScrollEnd={this.onScrollEnd.bind(this) }>
                <div>
                    <p className="load-tip" style={{ display: this.state.refreshing ? "" : "none" }}>下拉刷新...</p>
                    {this.props.children}
                    <p className="load-tip" style={{ display: this.state.loading ? "" : "none" }}>加载中...</p>
                </div>
            </ReactIScroll>
        )
    }
}