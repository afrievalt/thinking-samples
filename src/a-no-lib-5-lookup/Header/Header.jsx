import React, { useRef } from "react";
import Input from "./Input";

function Header(props) {
  const ref = useRef();
  const { setTasks } = props;
  const handleSubmit = (e) => {
    const name = ref.current.value?.trim();
    const id = Math.random();
    const task = {
      id,
      name,
      isCompleted: false,
    };
    if (name) {
      setTasks((oldValues) => ({
        ...oldValues,
        [id]: task,
      }));
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
