import React from "react";
import Task from "./Task";

function Body(props) {
  /* 
    Danger: Do not copy.
    I'm intentionally introducing some anti-patterns to improve later.
    Can you find them?
  */
  const { tasks, setTasks } = props;
  const acquireHandleClick =
    (task) =>
    // return a callback to handle click
    (e) => {
      const { id } = task;
      const newTasks = [...tasks];  // make a shallow copy 
      const i = newTasks.findIndex((task) => task.id === id); // find tasks to update
      newTasks[i].isCompleted = e.target.checked; // update new task
      setTasks(newTasks); // set new tasks
    };
  return (
    <section className="inline">
      <ul>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              name={task.name}
              isCompleted={task.isCompleted}
              onClick={acquireHandleClick(task)}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Body;
