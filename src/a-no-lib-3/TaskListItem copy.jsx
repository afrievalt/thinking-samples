import { useRef } from "react";
import { useTaskActions } from "../../redux/todo.slice";

const TaskListItem = (props) => {
  const { task } = props;
  const { id, name } = task;
  const taskRef = useRef();
  const {completeTask} = useTaskActions();
  const handleClick = () => {
    completeTask(id, taskRef.current.checked);
  };
  return (
    <label>
      <input type="checkbox" ref={taskRef} onClick={handleClick} />
      {name}
    </label>
  );
};

export default TaskListItem;
