import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../redux/missions/mission';
import Mission from './Mission';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
          />
        ))}
      </tbody>
    </table>
  );
}
export default Missions;
