import React from "react";

function FilterButton(props) {
  const { value, filter, setFilter } = props;
  const handleClick = () => {
    setFilter(value);
  };

  const isDisabled = value === filter;
  return (
    <button disabled={isDisabled} onClick={handleClick}>
      {value}
    </button>
  );
}

export default FilterButton;
