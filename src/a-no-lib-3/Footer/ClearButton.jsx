import React from "react";

function ClearButton(props) {
  const { tasks } = props;
  const completeCount = tasks.filter(({ isCompleted }) => isCompleted).length;
  if (completeCount === 0) {
    return null;
  }
  return (
    <button >Clear Complete {completeCount}</button>
  );
}

export default ClearButton;
