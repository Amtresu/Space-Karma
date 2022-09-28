import { createAsyncThunk } from '@reduxjs/toolkit'
const FETCH_MISSION = 'FETCH_MISSIONS';
const TOGGLE_MISSION = 'TOGGLE_MISSION';

const MISSION_API = 'https://api.spacexdata.com/v3/missions'

export const fetchMissions = (item) => ({
  type: FETCH_MISSION,
  payload: item,
});

export const toggleMission = (id) => ({
  type: TOGGLE_MISSION,
  payload: id,
});

const getMissions = createAsyncThunk(FETCH_MISSION, async () => {
  const data = await fetch(MISSION_API, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
  let item;
  try {
    const api = await data;
    item = api.map((mission) => ({
      key: mission.id,
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      joined: false,
    }));
  } catch (error) {
    console.error('ERR', error);
  }
  return item;
});

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_MISSION}/fulfilled`:
      return action.payload
    case TOGGLE_MISSION:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          console.log(state)
          return { ...mission, joined: !mission.joined };
        }
        return mission;
      });

    default:
      return state;
  }
};

export { getMissions };