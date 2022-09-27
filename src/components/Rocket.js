import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleRocket } from '../redux/rockets/rockets';

function Rocket(props) {
  const { id, name, description, img, reserved } = props;

  const dispatch = useDispatch();

  const toggleReservation = () => {
    dispatch(toggleRocket(id));
  };
  return (
    <div>
      <img src={img} alt="rocket" />
      <h2>{name}</h2>
      <div className="reservation">
        <span>{reserved}</span>
        {description}
      </div>
      <button id={id} type="button" onClick={toggleReservation}>
        Click
      </button>
    </div>
  );
}

export default Rocket;
