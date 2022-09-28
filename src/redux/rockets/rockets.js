/* eslint-disable */

import ROCKET_API from '../../api/RocketApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];
const ADD_ROCKET = 'ADD_ROCKET';
const TOGGLE_ROCKET = 'TOGGLE_ROCKET';

export const addRocket = (item) => ({
  type: ADD_ROCKET,
  payload: item,
});

export const toggleRocket = (id) => ({
  type: TOGGLE_ROCKET,
  payload: id,
});

const getRocket = createAsyncThunk(ADD_ROCKET, async () => {
  const data = await fetch(ROCKET_API, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
  let item;
  try {
    const api = await data;
    item = api.map((rocket) => ({
      key: rocket.id,
      id: rocket.id,
      name: rocket.rocket_name,
      img: rocket.flickr_images[0],
      description: rocket.description,
      reserved: false,
    }));
  } catch (error) {
    console.error('ERR', error);
  }
  return item;
});

export default (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_ROCKET}/fulfilled`:
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
