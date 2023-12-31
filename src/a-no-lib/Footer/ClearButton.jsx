import React from "react";

function ClearButton(props) {
  const { tasks, setTasks } = props;
  const completeCount = tasks.filter(({ isCompleted }) => isCompleted).length;
  const handleClickClear = () => {
    setTasks((oldTasks) => oldTasks.filter(({ isCompleted }) => !isCompleted));
  };
  if (completeCount === 0) {
    return null;
  }
  return (
    <button onClick={handleClickClear}>Clear Complete {completeCount}</button>
  );
}

export default ClearButton;
