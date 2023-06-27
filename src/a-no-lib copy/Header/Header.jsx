import React, { useRef } from "react";
import Input from "./Input";

function Header(props) {
  const ref = useRef();
  const { setTasks } = props;
  const handleSubmit = (e) => {
    // get task name with white space removed form beginning and end.    
    const name = ref.current.value?.trim();
    // get a unique id (we will improve this later)
    const id = Math.random();
    // build the new task
    const task = {
      id,
      name,
      isCompleted: false,
    };
    // if name is empty, don't add
    if (name) {
      // append task.  (Don't use closure values in set*)
      setTasks((oldValues) => [...oldValues, task]);
      ref.current.value = "";
    }
    e.preventDefault();
  };

  return (
    <form className="inline" onSubmit={handleSubmit}>
      <Input ref={ref} label="Task" />
      <input type="submit" value="Add" />
    </form>
  );
}

export default Header;
