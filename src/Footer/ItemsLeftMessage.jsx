import React from "react";

function ItemsLeftMessage(props) {
  const { tasks } = props;
  const activeTasks = tasks.filter(({ isCompleted }) => {
    return isCompleted === false;
  });
  const activeCount = activeTasks.length
  return <div>{activeCount} Items Left</div>;
}

export default ItemsLeftMessage;
