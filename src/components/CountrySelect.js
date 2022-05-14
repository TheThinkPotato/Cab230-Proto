import React, { useEffect, useState } from "react";
import Select from "react-select";
import { getCountryList } from "../data/apiCalls";

//Country Select Component
const CountrySelect = (props) => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountryList().then((counties) => setCountryList(counties));
  }, []);

  const Add = countryList.map((Add) => Add);
  const list = Add.map((address, key) => ({ value: key, label: address }));

  const handleAddrTypeChange = (e) => {
    e ? props.setCountry(countryList[e.value]) : props.setCountry(null);
  };
  return (
    <div style={{ width: "220px" }}>
      <h4>Select Country</h4>
      {/* {console.log(defaultVal)} */}
      <Select
        className="basic-single"
        classNamePrefix="select"
        placeholder="Algeria"
        defaultValue={list[0]}
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name="CountrySelector"
        onChange={(e) => handleAddrTypeChange(e)}
        options={list}
      />
    </div>
  );
};

export default CountrySelect;
