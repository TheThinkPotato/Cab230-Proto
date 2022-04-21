// import { Dropdown, Option } from "./components/DropdownSelect";
import React, { useState, useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { StatusPanelComponent } from "ag-grid-community/dist/lib/components/framework/componentTypes";

const distanceOptions = [10, 50, 100];

export default function Book() {
  const [selectOption, setSelectOption] = useState([]);

  return (
    <div className="container">
      {/* <h1>Select Distance</h1>
        <Dropdown
          formLabel="Choose a service"
          buttonText="Send form"
          onChange={handleSelect}
          action="/"
        >
          <Option selected value="Click to see options" />
          <Option value="Option 1" />
          <Option value="Option 2" />
          <Option value="Option 3" />
        </Dropdown> */}

      {/* <form onSubmit={setSelectOption}>
        <label>
          Distance: 
          <select value={selectOption} onChange={setSelectOption}>
            <option value={distanceOptions[0]}>{distanceOptions[0]}</option>
            <option value={distanceOptions[1]}>{distanceOptions[1]}</option>
            <option value={distanceOptions[2]}>{distanceOptions[2]}</option>            
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
}
