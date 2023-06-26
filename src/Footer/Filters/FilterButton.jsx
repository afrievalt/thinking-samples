import React from "react";

function FilterButton(props) {
  const { value, filter } = props;
  
  const isDisabled = value === filter;
  return (
    <button disabled={isDisabled} >
      {value}
    </button>
  );
}

export default FilterButton;
