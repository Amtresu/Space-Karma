import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleRocket } from '../redux/rockets/rockets';
import './Rocket.css';

function Rocket(props) {
  const { id, name, description, img, reserved } = props;

  const button = reserved ? 'Cancel Reservation' : 'Reserve Rocket';

  const dispatch = useDispatch();

  const toggleReservation = () => {
    dispatch(toggleRocket(id));
  };
  return (
    <div className="rocket">
      <img src={img} alt="rocket" className="rocket-image" />
      <div className="position">
        <h2 className="rocket-heading">{name}</h2>
        <div className="reservation">
          <span className="span">{reserved && 'Reserved'} </span>
          {description}
        </div>
        <button
          id={id}
          className="button btn"
          type="button"
          onClick={toggleReservation}
        >
          {button}
        </button>
      </div>
    </div>
  );
}

export default Rocket;
