import React from 'react';
import './StagesCardLevels.css'; 

const StagesCardLevels = (props) => {
  return (
    <div className='Stage-Level'>
      <img src={props.image} alt={props.LevelName} id='Stage-Level-image-prefix' /> 
      <div id='Stage-level-header'>{props.LevelName}</div> 
      <span id='Stage-level-discription'>{props.LevelDiscription}</span>
    </div>
  );
};

export default StagesCardLevels;