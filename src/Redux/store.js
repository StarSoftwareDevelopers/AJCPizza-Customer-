import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducerRoot from './reducerRoot';

export const middleWares = [logger];

export const store = createStore(reducerRoot, applyMiddleware(...middleWares)); 

export default store;