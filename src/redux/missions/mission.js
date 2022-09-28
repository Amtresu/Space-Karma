/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
const API = 'https://api.spacexdata.com/v3/missions';
const initialState = [];
const ADD_MISSION = 'ADD_MISSION';
const TOGGLE_MISSION = 'TOGGLE_MISSION';

export const addMission = (item) => ({
  type: ADD_MISSION,
  payload: item,
});

export const toggleMission = (id) => ({
  type: TOGGLE_MISSION,
  payload: id,
});

const getMissions = createAsyncThunk(ADD_MISSION, async () => {
  const data = await fetch(API, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
  let item;
  try {
    const api = await data;
    item = api.map((mission) => ({
      key: mission.id,
      id: mission.id,
      name: mission.mission_name,
      description: mission.description,
    }));
  } catch (error) {
    console.error('ERR', error);
  }
  return item;
});

export default (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_MISSION}/fulfilled`:
      return action.payload;
    case TOGGLE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });

    default:
      return state;
  }
};
export { getMissions };
