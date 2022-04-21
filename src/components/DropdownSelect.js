import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import {
//   DropdownWrapper,
//   StyledSelect,
//   StyledOption,
//   StyledLabel,
//   StyledButton
// } from "./styles.js";

export function DropdownSelect(props) {
    return (
<Dropdown action={props.action}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      
    );
  }

  // export function Option(props) {
  //   return <Option selected={props.selected}>{props.value}</Option>;
  // }