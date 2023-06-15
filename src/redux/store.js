import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";


function configureRouteStore() {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
}
const store = configureRouteStore();


export default store;
