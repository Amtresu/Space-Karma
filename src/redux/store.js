import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionReducer from './missions/mission';
import reducerRockets from './rockets/rockets';

const rootReducer = combineReducers({
  rocket: reducerRockets,
  missionReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
