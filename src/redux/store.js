import {createStore} from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

import logger from 'redux-logger';
import { applyMiddleware } from 'redux';
const middlewares = [logger]

export const store = createStore(rootReducer,applyMiddleware(...middlewares));
export const persistor = persistStore(store);
export default { store, persistStore };
