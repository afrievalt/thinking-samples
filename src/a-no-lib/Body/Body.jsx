import React from "react";
import Task from "./Task";

function Body(props) {
  const { tasks, setTasks } = props;
  const acquireHandleClick = (i) => (e) => {
    setTasks((oldTasks) => {
      const tasks = [...oldTasks];
      tasks[i].isCompleted = e.target.checked;
      return tasks;
    });
  };
  return (
    <ul>
      <li>body</li>
      {tasks.map((task, i) => {
        return (
          <Task
            key={task.id}
            name={task.name}
            isCompleted={task.isCompleted}
            onClick={acquireHandleClick(i)}
          />
        );
      })}
    </ul>
  );
}

export default Body;
