import React from 'react';

import './meterBar.css';

export default function MeterBar(props) {

  const meterBarStyle = {
    width: props.percentage + '%'
  };


  return (
    <div className="meter-bar">
      <div 
        className="meter-bar-percentage"
        style={meterBarStyle}>
      </div>
    </div>
  );
}