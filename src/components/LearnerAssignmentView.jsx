import { data } from "autoprefixer";
import axios from "axios";
import { useState } from "react";
import Dropdown from "./Dropdown";

export const LearnerAssignmentView = () => {
  const [assignment, setAssignment] = useState({
    githubUrl: "",
    branch: "",
  });

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSubmit = () => {};

  const handleDashboard = () => {};

  const updateGithubUrl = (e) => {
    e.preventDefault();
    setAssignment({ ...assignment, githubUrl: e.target.value });
  };

  const updateBranch = (e) => {
    e.preventDefault();
    setBranch({ ...assignment, branch: e.target.value });
  };

  return (
    <div className="self-center mb-4 border p-5 text-gray-400 rounded-md">
      <span className="text-2xl font-serif text-gray-500"></span>
      <div className="border-2 flex justify-center">Assignment #</div>
      <div>Select Assignment</div>
      <Dropdown options={options} />
      <div>Github Url</div>
      <input
        type="text"
        placeholder="Enter Github url here"
        onChange={updateGithubUrl}
        className="border-2 text-black"
        value={assignment.githubUrl}
      />
      <div>Branch</div>
      <input
        type="text"
        placeholder="Enter branch here"
        onChange={updateBranch}
        className="border-2 text-black"
        value={assignment.branch}
      />
      <div className="flex gap-5">
        <button onClick={handleSubmit} className="border-2">
          Submit
        </button>

        <button onClick={handleDashboard} className="border-2">
          Back to Dashboard
        </button>
      </div>
      <span className="text-2xl font-serif text-gray-500"></span>
    </div>
  );
};
