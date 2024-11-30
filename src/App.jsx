import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Assignments } from "./components/Assignments";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route
          path="/learnerAssignmentView"
          element={<LearnerAssignmentView />}
        />
        {/* <Route path="/learnerDashboard" element={<LearnerDashboard />} /> */}
      </Routes>
    </div>
  );
}
