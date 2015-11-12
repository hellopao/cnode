"use strict";

import React from "react";
import ReactDom from "react-dom";
import {Router,Route,Link} from "react-router";

import {TABS} from "../config";
import store from "../store";

import Tab from "./tab";

export default class App extends React.Component {
	
	constructor (props){
		super(props);			
		this.state = {
			topicId: 0
		};
	}
	
	componentDidMount(){
		let state = store.getState();
		console.log(state)
		store.dispatch({
			type: "FETCH_TOPIC",
			id: 1112222
		});
		console.log(store.getState())
	}
	
	render() {
		return (
			<div>
				<Tab />
			</div>
		)
	}
}