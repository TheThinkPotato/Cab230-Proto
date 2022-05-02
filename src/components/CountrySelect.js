import React, { useEffect, useState } from "react";
import { getCountryList } from "../data/apiCalls";

//Country Select Component
const CountrySelect = (props) => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountryList().then((counties) => setCountryList(counties));
  }, []);

  const Add = countryList.map((Add) => Add);
  const handleAddrTypeChange = (e) => {
    props.setCountry(countryList[e.target.value]);
  };
  return (
    <div>
      <h4>Select Country</h4>
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

export default CountrySelect;
