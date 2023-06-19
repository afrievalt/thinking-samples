import React from "react";
import Task from "./Task";

function Body(props) {
  const { tasks, setTasks } = props;
  const acquireHandleClick = (task) => (e) => {
    const { id } = task;
    setTasks((oldTasks) => {
      const tasks = [ ...oldTasks ];
      const i = tasks.findIndex(task => task.id === id)
      tasks[i].isCompleted = e.target.checked;
      return tasks;
    });
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
