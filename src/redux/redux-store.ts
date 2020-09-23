import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from "redux-thunk";
import { ApplicationState, rootReducer } from './root-reducer';

const configureProdStore = (initialState? : ApplicationState) => {
    const middlewares = [
        // Add other middleware on this line...
        thunkMiddleware
    ];
    return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
};

const configureDevStore = (initialState?: ApplicationState) => {
    const middlewares = [
        // Add other middleware on this line...
        reduxImmutableStateInvariant(), // redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches

        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
        thunkMiddleware
    ];

    const composeEnhancers = composeWithDevTools({}); // typescript shortcut for window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

    if (module.hot) {
        module.hot.accept('../redux/root-reducer.ts', () => {
            const nextReducer = require('./root-reducer');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};

const store = process.env.NODE_ENV === 'production' ? configureProdStore : configureDevStore;
export default store;