"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";

import Loading from "../components/loading";

function getWrap() :HTMLElement{
    const wrapId = 'loading-wrap';
    var wrap = document.getElementById(wrapId);
    if (!wrap) {
        wrap = document.createElement('div');
        wrap.setAttribute('id',wrapId);
        document.body.appendChild(wrap);        
    }
    return wrap;
}

export function show(text?:string, duration?:number) {
    ReactDOM.render(
        <Loading />,
        getWrap()
    );  
}

export function hide() {
    ReactDOM.unmountComponentAtNode(getWrap());
}