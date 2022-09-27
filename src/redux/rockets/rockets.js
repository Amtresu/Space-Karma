/* eslint-disable */

import { createAsyncThunk } from '@reduxjs/toolkit';
import ROCKET_API from '../../api/RocketApi';

const initialState = [];
const ADD_ROCKET = 'ADD_ROCKET';
const TOGGLE_ROCKET = 'TOOGLE_ROCKET';

export const addRocket = (item) => ({
  type: ADD_ROCKET,
  payload: item,
});

export const toggleRocket = (id) => ({
  type: TOGGLE_ROCKET,
  payload: id,
});

const getRocket = createAsyncThunk(ADD_ROCKET, async () => {
  const data = await fetch(ROCKET_API);
  const rockets = await data.json();
  const item = rockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    img: rocket.flickr_images[0],
    reserved: false,
  }));
  return item;
});

export default (state = initialState, action) => {
  ž;
  switch (action.type) {
    case ADD_ROCKET:
      return action.payload;
    case TOGGLE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
};

export { getRocket };
