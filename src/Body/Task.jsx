import React from "react";

function Task(props) {
  const { name, isCompleted, onClick } = props;

  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={onClick} />
        {name}
      </label>
    </li>
  );
}

export default Task;
