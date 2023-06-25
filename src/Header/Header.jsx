import React, { useRef } from "react";
import Input from "./Input";

function Header() {
  const ref = useRef();

  return (
    <form className="inline">
      <Input ref={ref} label="Task" />
      <input type="submit" value="Add" />
    </form>
  );
}

export default Header;
