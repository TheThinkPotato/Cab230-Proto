import React, { useEffect} from "react";
import Select from "react-select";

//Distance select component
const DistanceSelect = (props) => {
  const distanceOptionsList = [
    { value: "100", label: "100 Kms" },
    { value: "30", label: "30 Kms" },
    { value: "10", label: "10 Kms" },
    { value: "5", label: "5 Kms" },
  ];

  useEffect(() => {
    props.setDistance("100");
  }, []);

  return (
    <div>
      <h4>Select Range</h4>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={distanceOptionsList[0]}
        isDisabled={false}
        isLoading={false}
        isClearable={false}
        isRtl={false}
        isSearchable={false}
        name="CountrySelector"
        onChange={(e) => {
          props.setDistance(String(e.value));
        }}
        options={distanceOptionsList}
      />
    </div>
  );
};

export default DistanceSelect;
