import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMisisons } from '../redux/missions/mission';
import './mission.css'


const Mission = () => {
  const store = useSelector((state) => state.missionReducer)  ;
  const dispatch = useDispatch();
  const slicedStore = store.slice(0,10)

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/missions')
      .then((res) => res.json())
      .then((json) => {
        if (store.length === 0) {
          dispatch(fetchMisisons(json));
        }
      });
  });

  return (
    <table>

      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>

      {slicedStore.map((mission) => (
        <tbody key={mission.mission_id}>
        <tr className='mission-list' key={mission.mission_id}>
          <td className='mission-title'>{mission.mission_name}</td>
          <td className='mission-description'>{mission.description}</td>
          <td className='mission-status'><button className='mission-status-button'>Not a Member</button></td>
          <td className='mission-button'><button className='join-mission-button'>Join Mission</button></td>
        </tr>
        </tbody>
      ))}
    </table>
  );
};;
export default Mission