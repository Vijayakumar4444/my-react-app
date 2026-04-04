import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/home";
import Joblist from "./pages/joblist/Joblist";
import JobPage from "./pages/jobpage/JobPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Joblist />} />
      <Route path="/filterjobs" element={<JobPage />} />
    </Routes>
  );
}

export default App;