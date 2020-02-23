import {combineReducers} from 'redux';
import activityReducer from './activity/activityReducer';
import appReducer from './app/appReducer';

export default combineReducers({
    activity: activityReducer,
    app: appReducer
});