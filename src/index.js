import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotReloader } from 'react-hot-loader';
import App from "./components/core/App";

const render = AppComponent => {
    ReactDOM.render(
        <HotReloader>
            <AppComponent />
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