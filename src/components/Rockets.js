import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRocket } from '../redux/rockets/rockets';
import Rocket from './Rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket);

  useEffect(() => {
    dispatch(getRocket());
  }, []);

  return (
    <div className="rocket-main">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          img={rocket.img}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
}
export default Rockets;
