import React from "react";
import FilterButton from "./FilterButton";

function Filters(props) {
  const { filter, setFilter } = props;
  return (
    <div>
      <FilterButton value="All" filter={filter} setFilter={setFilter} />
      <FilterButton value="Active" filter={filter} setFilter={setFilter} />
      <FilterButton value="Completed" filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default Filters;
