import { data } from "autoprefixer";
import axios from "axios";
import { useState } from "react";

export const LearnerDashboard = () => {
  const handleSubmit = () => {};

  return (
    <div className="self-center mb-4 border p-5 text-gray-400 rounded-md">
      <span className="text-2xl font-serif text-gray-500"></span>
      <div>Learner Dashboard</div>
      <div className="border-2 flex justify-center">Welcome Learner!</div>
      <div className="flex gap-5">
        <button onClick={handleSubmit} className="border-2">
          Submit New Assignment
        </button>
      </div>

      <div>Needs Rework</div>
      <div>Complete</div>
      <div>In Review</div>
      <span className="text-2xl font-serif text-gray-500"></span>
    </div>
  );
};
