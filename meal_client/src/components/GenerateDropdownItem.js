import React from "react";

import { Dropdown } from "react-bootstrap";

function GenerateDropdownItem(props) {
  const dropdowns = [];
  const MAX_QUANTITY = 5;

  for(let i = 1; i <= MAX_QUANTITY; i++){
    dropdowns.push(
      <Dropdown.Item key={props.id+i} eventKey={i} onSelect={(eventKey, event) => props.onSelect(eventKey, event, props.id)}>{i}</Dropdown.Item>
    );
  }

  return (
    dropdowns
  );
}

export default GenerateDropdownItem;