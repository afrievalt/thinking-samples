import React from "react";
import Body from "./Body";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
const initState = [
  { id: 1, name: "Learn JavaScript", isCompleted: true },
  { id: 2, name: "Learn React Fundamentals", isCompleted: true },
  {
    id: 3,
    name: "Learn Thinking in React Fundamentals",
    isCompleted: false,
  },
  {
    id: 4,
    name: "Learn Thinking in React With styled-components",
    isCompleted: false,
  },
  {
    id: 5,
    name: "Learn Thinking in React With react-router",
    isCompleted: false,
  },
  {
    id: 6,
    name: "Learn Thinking in React With redux-toolkit basics",
    isCompleted: false,
  },
  { id: 7, name: "Learn to build Adaptive Components", isCompleted: false },
];
function NoLibApp() {
  const [tasks, setTasks] = useState(initState);
  const [filter, setFilter] = useState("All");
  const isCompletedFilter = filter === "Completed";
  const displayTasks = tasks.filter(({ isCompleted }) => {
    if (filter === "All") {
      return true;
    }
    return isCompleted === isCompletedFilter;
  });
  return (
    <div>
      <Header setTasks={setTasks} />
      <Body tasks={displayTasks} setTasks={setTasks} />
      <Footer
        filter={filter}
        setFilter={setFilter}
        tasks={tasks}
        setTasks={setTasks}
      />      
    </div>
  );
}

export default NoLibApp;
