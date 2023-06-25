import React from "react";
import Task from "./Task";

function Body() {
  return (
    <section className="inline">
      <ul>
        <Task name="Learn JavaScript" isCompleted={true} />
        <Task name="Learn React Fundamentals" isCompleted={true} />
        <Task name="Learn Thinking in React Fundamentals" isCompleted={false} />
      </ul>
    </section>
  );
}

export default Body;
