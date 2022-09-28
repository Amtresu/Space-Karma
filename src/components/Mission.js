import React from 'react';
import { useDispatch } from 'react-redux';
import  {toggleMission}  from '../redux/missions/mission';
import './mission.css'


const Mission = (props) => {
  const { id, name, description, joined } = props;
  const dispatch = useDispatch();

  const toggleMissions = () => {
    dispatch(toggleMission(id));
  };


  const button = joined ? 'Joined' : 'Join Mission';
  const reserve = joined ? 'Reserved' : 'Reserve';
  const member = joined ? 'member' : 'non-member';

  return (
    <tr className='mission-list' key={id}>
      <td className='mission-title'>{name}</td>
      <td className='mission-description'>{description}</td>
      <td className='mission-status'><button className={member}>{reserve}</button></td>
      <td className='mission-button'>
        <button id={id} type="button" className={reserve} onClick={toggleMissions}>
          {button}
        </button>
      </td>
    </tr>
  );
};;
export default Mission