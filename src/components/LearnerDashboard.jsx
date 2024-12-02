import { data } from "autoprefixer";
import axios from "axios";
import { useState } from "react";

export const LearnerDashboard = () => {
  const needsRework = [
    "ASSIGNMENT_1",
    "ASSIGNMENT_2",
    "ASSIGNMENT_3",
    "ASSIGNMENT_4",
  ];
  const complete = [
    "ASSIGNMENT_5",
    "ASSIGNMENT_6",
    "ASSIGNMENT_7",
    "ASSIGNMENT_8",
  ];
  const inReview = [
    "ASSIGNMENT_9",
    "ASSIGNMENT_10",
    "ASSIGNMENT_11",
    "ASSIGNMENT_12",
    "ASSIGNMENT_13",
    "ASSIGNMENT_14",
  ];

  const handleSubmit = () => {};

  return (
    <div className="self-center mb-4 border p-5 text-black-400 rounded-md">
      <span className="text-2xl font-serif text-black-500"></span>
      <div className="flex justify-center">Welcome Learner!</div>
      <div className="flex gap-5">
        <button onClick={handleSubmit} className="border-2">
          Submit New Assignment
        </button>
      </div>

      <div>Needs Rework</div>
      <div className="flex justify-start border-gray-400/50 border-2 p-2 rounded-lg">
        <img
          src="icon.jpg"
          alt="Icon"
          className="w-20 h-20 mx-3 border-gray-400/50 border-2"
        />
        <img
          src="icon.jpg"
          alt="Icon"
          className="w-20 h-20 mx-3 border-gray-400/50 border-2"
        />
      </div>

      <div>Complete</div>
      <div className="flex justify-start border-gray-400/50 border-2 p-2 rounded-lg">
        <img
          src="icon.jpg"
          alt="Icon"
          className="w-20 h-20 mx-3 border-gray-400/50 border-2"
        />
        <img
          src="icon.jpg"
          alt="Icon"
          className="w-20 h-20 mx-3 border-gray-400/50 border-2"
        />
        <img
          src="icon.jpg"
          alt="Icon"
          className="w-20 h-20 mx-3 border-gray-400/50 border-2"
        />
        <img
          src="icon.jpg"
          alt="Icon"
          className="w-20 h-20 mx-3 border-gray-400/50 border-2"
        />
      </div>

      <div>In Review</div>
      <div className="flex justify-start border-gray-400/50 border-2 p-2 rounded-lg">
        <img
          src="icon.jpg"
          alt="Icon"
          className="w-20 h-20 mx-3 border-gray-400/50 border-2"
        />
        <img
          src="icon.jpg"
          alt="Icon"
          className="w-20 h-20 mx-3 border-gray-400/50 border-2"
        />
        <img
          src="icon.jpg"
          alt="Icon"
          className="w-20 h-20 mx-3 border-gray-400/50 border-2"
        />
      </div>

      <div>
        <div>Needs Rework</div>
        {needsRework.map((data) => {
          return (
            <div className="mb-4 border p-5 text-black-400 rounded-md">
              <span className="text-2xl font-serif text-gray-500"></span>
              <div>
                {`${data}`}
                <img
                  src="icon.jpg"
                  alt="Icon"
                  className="w-20 h-20 mx-3 border-gray-400/50 border-2"
                />
              </div>
              <span className="text-2xl font-serif text-gray-500"></span>
            </div>
          );
        })}
      </div>
      <div>
        <div>Complete</div>
        {complete.map((data) => {
          return (
            <div className="mb-4 border p-5 text-black-400 rounded-md">
              <span className="text-2xl font-serif text-gray-500"></span>
              <div>
                {`${data}`}
                <img
                  src="icon.jpg"
                  alt="Icon"
                  className="w-20 h-20 mx-3 border-gray-400/50 border-2"
                />
              </div>
              <span className="text-2xl font-serif text-gray-500"></span>
            </div>
          );
        })}
      </div>
      <div>
        <div>In Review</div>
        {inReview.map((data) => {
          return (
            <div className="mb-4 border p-5 text-black-400 rounded-md">
              <span className="text-2xl font-serif text-gray-500"></span>
              <div>
                {`${data}`}
                <img
                  src="icon.jpg"
                  alt="Icon"
                  className="w-20 h-20 mx-3 border-gray-400/50 border-2"
                />
              </div>
              <span className="text-2xl font-serif text-gray-500"></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
