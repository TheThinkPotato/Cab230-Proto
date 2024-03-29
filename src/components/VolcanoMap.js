import React from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";

// Pigeon maps component
const VolcanoMap = (props) => {
  return (
    <Map
      height={450}
      width={850}
      defaultCenter={[0, 0]}
      defaultZoom={8}
      center={[props.lat, props.long]}
      alt={'Volcano Map'}
    >
      <Marker width={50} color={"red"} anchor={[props.lat, +props.long]} />
      <ZoomControl />
    </Map>
  );
};

export default VolcanoMap;
