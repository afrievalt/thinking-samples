import { useRef } from "react";
import { useTaskActions } from "../../redux/todo.slice";
import Results from "./Results";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.section`
  margin: 10px 50px;;
`;
const TaskPage = () => {
  const taskRef = useRef();
  const { createTask } = useTaskActions();
  const handleAdd = () => {
    createTask(taskRef.current.value);
  };
  return (
    <Page>
      <Link to='1'>1. No libraries</Link>
      <div>
        Task:
        <input ref={taskRef}></input>
        <button onClick={handleAdd}>Add</button>
        <Results />
      </div>
    </Page>
  );
};

export default TaskPage;
