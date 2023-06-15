import { createRoot } from "react-dom/client";
import { Routes, Route} from "react-router-dom";
import Details from "./Details";
import * as Test from "react-final-form-toolkit";
import AppProvider from "./AppProvider";
import TaskPage from "./pages/tasks/TaskPage";
console.log(Test);
const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<TaskPage />} />
      </Routes>
    </AppProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
