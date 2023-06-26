import React from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
const tasks = [
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
const filter = "All";
function NoLibApp() {
  const isCompletedFilter = filter === "Completed";
  const displayTasks = tasks.filter(({ isCompleted }) => {
    if (filter === "All") {
      return true;
    }
    return isCompleted === isCompletedFilter;
  });
  return (
    <div>
      <Header />
      <Body tasks={displayTasks} />
      <Footer filter={filter} tasks={tasks} />
    </div>
  );
}

export default NoLibApp;
