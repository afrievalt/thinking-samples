import { useSelector } from "react-redux";
import { selectors } from "../../redux/todo.slice";
import TaskListItem from "./TaskListItem";
import Stack from "../../common/stack/Stack";

const Results = () => {
  const task$ = useSelector(selectors.selectAll);
  return (
    <Stack gap='xs' left>
      {task$.map((task) => {
        return <TaskListItem key={task.id} task={task} />;
      })}
    </Stack>
  );
};

export default Results;
