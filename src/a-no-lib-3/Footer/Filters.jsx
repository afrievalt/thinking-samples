import React from "react";
import FilterButton from "./FilterButton";

function Filters(props) {
  const { filter } = props;
  return (
    <div>
      <FilterButton value="All" filter={filter} />
      <FilterButton value="Active" filter={filter} />
      <FilterButton value="Completed" filter={filter} />
    </div>
  );
}

export default Filters;
