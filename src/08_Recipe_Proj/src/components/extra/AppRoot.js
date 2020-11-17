import React from 'react'
import {
    TravelerEffect, MosaicGroundEffect, OceanEffect,
    RainEffect, SeaWaveEffect, SnowFallEffect, SnowFallSlowEffect,
    SpacingEffect, CloudWaveEffect
} from 'react-background-animation';

const AppRoot = () => {
  return (
    <React.Fragment>
      <TravelerEffect />
      <MosaicGroundEffect />
      <OceanEffect />
      <RainEffect />
      <SeaWaveEffect />
      <SnowFallEffect />
      <SnowFallSlowEffect />
      <SpacingEffect />
      <CloudWaveEffect />
    </React.Fragment>
  );
};
 
export default AppRoot;