import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import activityReducer from './activity/activityReducer';
import appReducer from './app/appReducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['activity']
  };

  
const rootReducer = combineReducers({
    activity: activityReducer,
    app: appReducer
});

export default persistReducer(persistConfig, rootReducer);
