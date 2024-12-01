import { data } from "autoprefixer";
import axios from "axios";

const mockData = [
  {
    status: "Pending Submission",
    number: 1,
    githubUrl: "https://github.com/f-julie",
    branch: "Branch A",
  },
  {
    status: "Submitted",
    number: 2,
    githubUrl: "https://github.com/f-julie",
    branch: "Branch B",
  },
  {
    status: "In Review",
    number: 3,
    githubUrl: "https://github.com/f-julie",
    branch: "Branch C",
  },
  {
    status: "Needs Update",
    number: 4,
    githubUrl: "https://github.com/f-julie",
    branch: "Branch D",
  },
];

export const Assignments = () => {
  const getUserAssignments = async () => {
    const getAssignmentsUrl = "http://localhost:8080/api/assignments";
    const res = await axios.get(getAssignmentsUrl, credentials, {
      headers: { "Access-Control-Allow-Origin": "http://localhost:5173/" },
    });
  };

  return (
    <div>
      {mockData.map((data) => {
        return (
          <div className="self-center mb-4 border p-5 text-black-400 rounded-md">
            <span className="text-2xl font-serif text-gray-500"></span>
            <div>{`Assignment: ${data.number}`}</div>
            <div>{`status: ${data.status}`}</div>
            <div>{`githubUrl: ${data.githubUrl}`}</div>
            <div>{`branch: ${data.branch}`}</div>
            <span className="text-2xl font-serif text-gray-500"></span>
          </div>
        );
      })}
    </div>
  );
};
