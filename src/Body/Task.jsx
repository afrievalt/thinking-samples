import React from "react";

function Task(props) {
  const { name, isCompleted } = props;

  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} />
        {name}
      </label>
    </li>
  );
}

export default Task;
