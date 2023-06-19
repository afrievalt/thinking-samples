import { createRoot } from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Details from "./Details";
import AppProvider from "./AppProvider";
import TaskPage from "./pages/tasks/TaskPage";
import NoLibApp from "./a-no-lib/NoLibApp";
import NoLibApp4 from "./a-no-lib-4/NoLibApp";
import NoLibAppLookup from "./a-no-lib-5-lookup/NoLibApp";
const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<TaskPage />} />
        <Route path="1" element={<NoLibApp />} />
        <Route path="4" element={<NoLibApp4 />} />
        <Route path="lookup" element={<NoLibAppLookup />} />
      </Routes>
    </AppProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
