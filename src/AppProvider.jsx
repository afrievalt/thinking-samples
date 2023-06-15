import { BrowserRouter } from "react-router-dom";
import ReduxProvider from "./redux/ReduxProvider";
const AppProvider = (props) => {
  const { children } = props;
  return (
    <BrowserRouter>
      <ReduxProvider>{children}</ReduxProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
