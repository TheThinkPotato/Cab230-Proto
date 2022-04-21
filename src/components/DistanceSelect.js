import React, { useEffect } from "react";

//Distance select component
const DistanceSelect = (props) => {
  const distanceOptions = ["100 Kms", "30 Kms", "10 Kms", "5 Kms"];
  const Add = distanceOptions.map((Add) => Add);
  const handleAddrTypeChange = (e) => {
    props.setDistance(distanceOptions[e.target.value]);
  };
  useEffect(() => {
    props.setDistance(distanceOptions[0]);
  }, []);

  return (
    <div>
      <h4>Select Range</h4>
      <select
        onChange={(e) => handleAddrTypeChange(e)}
        className="browser-default custom-select"
      >
        {Add.map((address, key) => (
          <option key={key} value={key}>
            {address}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DistanceSelect;
