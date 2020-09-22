import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { AppContainer as HotReloader } from 'react-hot-loader';
import App from "./components/core/App";

import store from './redux/redux-store';

const reduxStore = store();
const render = AppComponent => {
    ReactDOM.render(
        <HotReloader>
            <Provider store={reduxStore}>
                <AppComponent />
            </Provider>
        </HotReloader>,
        document.getElementById('app')
    );
};

// renders application on first load
render(App);

// webpack dev server : Hot Module Replacement
if (module.hot) {
    module.hot.accept('./components/core/App', () => {
        render(App);
    });
}