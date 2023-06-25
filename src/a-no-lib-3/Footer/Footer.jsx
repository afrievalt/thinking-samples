import React from "react";
import Filters from "./Filters";
import ItemsLeftMessage from "./ItemsLeftMessage";
import ClearButton from "./ClearButton";

function Footer(props) {
  const { tasks, filter } = props;
  
  return (
    <footer className="inline">
      <ItemsLeftMessage tasks={tasks} />
      <Filters filter={filter} />
      <ClearButton tasks={tasks} />
    </footer>
  );
}

export default Footer;
