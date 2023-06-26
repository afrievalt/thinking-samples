import React from "react";
import Task from "./Task";

function Body(props) {
  const { tasks } = props;
  return (
    <section className="inline">
      <ul>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              name={task.name}
              isCompleted={task.isCompleted}              
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Body;
