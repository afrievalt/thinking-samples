import React from "react";


function Task(props) {
  const { name, isCompleted } = props;

  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted}  />
        {name}
      </label>
    </li>
  );
}

/*
Note:
This code will generate a warning:
Warning: You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.

This issue will be resolved in the next step.
*/

export default Task;
