import React from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";

// Pigeon maps component
const VolcanoMap = (props) => {
  const longatude = parseFloat(props.long); // Marker will not take direct value from props.long

  return (
    <Map
      height={500}
      width={850}
      defaultCenter={[0, 0]}
      defaultZoom={8}
      center={[props.lat, props.long]}
    >
      <Marker width={40} anchor={[props.lat, longatude]} />
      <ZoomControl />
    </Map>
  );
};

export default VolcanoMap;
