import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducerRoot from './reducerRoot';

export const middleWares = [thunk,logger];

export const store = createStore(reducerRoot, applyMiddleware(...middleWares),); 

// import { createStore, applyMiddleware, compose } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

// import reducerRoot from './reducerRoot';

// export const middlewares = [ thunk, logger ]

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// export const store = createStore(reducerRoot, composeEnhancers(applyMiddleware(...middlewares)))


export default store;