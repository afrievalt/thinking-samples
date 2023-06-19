import React from "react";

function ClearButton(props) {
  const { tasks, setTasks } = props;
  const completeCount = Object.values(tasks).filter(
    ({ isCompleted }) => isCompleted
  ).length;
  const handleClickClear = () => {
    setTasks((oldTasks) =>
      Object.keys(oldTasks).reduce((acc, key) => {
        const task = oldTasks[key];
        if (task.isCompleted) {
          return acc;
        }
        return {
          ...acc,
          [key]: task,
        };
      }, {})
    );
  };
  if (completeCount === 0) {
    return null;
  }
  return (
    <button onClick={handleClickClear}>Clear Complete {completeCount}</button>
  );
}

export default ClearButton;
