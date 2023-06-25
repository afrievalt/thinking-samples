import React from "react";

function FilterButton(props) {
  const { value, filter, setFilter } = props;
  const handleClick = () => {
    // we can use closure here because our new state is not dependent on old state   
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
