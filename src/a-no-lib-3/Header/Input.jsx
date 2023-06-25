import React, { forwardRef } from "react";

function Input(props, ref) {
  const { label } = props;

  return (
    <label className="inline">
      {label}:
      <input type="text" ref={ref} />
    </label>
  );
}

export default forwardRef(Input);
