import { bindActionCreators, createEntityAdapter, createSlice, nanoid } from "@reduxjs/toolkit";
import { E } from "./empty";
import { useDispatch } from "react-redux";

export const taskAdapter = createEntityAdapter();
export const selectors = taskAdapter.getSelectors(({ task }) => task);

const taskSlice = createSlice({
  name: "task",
  initialState: taskAdapter.getInitialState({ filters: E }),
  reducers: {
    createTask: {
      reducer: taskAdapter.addOne,
      prepare(name) {
        const id = nanoid(11);
        const payload = { id, name, done: false };
        return { payload };
      },
    },
    completeTask: {
      reducer: taskAdapter.updateOne,
      prepare(id, value = true) {
        const change = { done: value };
        const payload = { id, change };
        return { payload };
      },
    },
    deleteTask: taskAdapter.removeOne,
  },
});

export const addTask = (name) => {
  taskSlice.addTask({ name });
};

const { createTask, completeTask } = taskSlice.actions;
export { createTask, completeTask, };

export const useTaskActions = () => {
  const dispatch = useDispatch()
  const actions = bindActionCreators(taskSlice.actions, dispatch)
  return {
    dispatch, ...actions
  }
}
// {type : "posts/createTodo", payload : {id : 123, title : "Hello World"}}
export default taskSlice.reducer;
