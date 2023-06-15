import React from "react";
import store from "./store";
import { Provider } from "react-redux";

const ReduxProvider = (props) => <Provider store={store} {...props} />;
export default ReduxProvider;
