const FETCH_MISSIONS = 'data/missions/FETCH_MISSIONS';

export const fetchMisisons = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default missionReducer;