"use strict";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import configureStore from './store/store';
import Routes from "./routes/routes";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        {Routes}
    </Provider>,
    document.getElementById('root')
);