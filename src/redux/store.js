import {createStore} from 'redux';
import rootReducer from './rootReducer';

import logger from 'redux-logger';
import { applyMiddleware } from 'redux';
const middlewares = [logger]

const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;