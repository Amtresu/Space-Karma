/* eslint-disable */

import { useSelector } from 'react-redux';
import './MyProfile.css'

function Myprofile() {
  const reservationRocket = useSelector((state) =>
    state.rocket.filter((rocket) => rocket.reserved)
  );
  const missionJoined = useSelector((state) =>
    state.mission.filter((mission) => mission.joined)
  );

  return (
    <div className='my-profile'>
      <table className="main">
        <thead>
        <tr>
          <th>My Rockets</th>
        </tr>
        </thead>
        <tbody className="rockets">
            {reservationRocket.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
                </tr>
            ))}
        </tbody>
      </table>

      <table className="main">
        <thead>
        <tr>
          <th>My Missions</th>
        </tr>
        </thead>
        <tbody className="missions">
            {missionJoined.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.name}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Myprofile;
