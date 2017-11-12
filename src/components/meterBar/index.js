import React from 'react';

import MeterBar from './meterBar';

export default function MeterBarContainer(props) {

  return (
    <MeterBar
      percentage={props.percentage} />
  );
}