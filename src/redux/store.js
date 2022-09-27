import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import missionReducer from './missions/mission';

const reducer = combineReducers({
  missionReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;