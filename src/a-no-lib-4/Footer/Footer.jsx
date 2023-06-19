import React from "react";
import Filters from "./Filters";
import ItemsLeftMessage from "./ItemsLeftMessage";
import ClearButton from "./ClearButton";

function Footer(props) {
  const { tasks, filter, setFilter, setTasks } = props;
  
  return (
    <footer className="inline">
      <ItemsLeftMessage tasks={tasks} />
      <Filters filter={filter} setFilter={setFilter} />
      <ClearButton tasks={tasks} setTasks={setTasks}/>
    </footer>
  );
}

export default Footer;
