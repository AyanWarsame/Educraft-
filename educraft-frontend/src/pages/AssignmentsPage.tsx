// pages/AssignmentsPage.tsx
import React from 'react';

const AssignmentsPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen ml-64">
      <h1 className="text-2xl font-bold mb-6">Assignments</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">Upcoming Assignments</h2>
            <p className="text-gray-600">You have 3 pending assignments</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Create New
          </button>
        </div>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">React Component Project</h3>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                High Priority
              </span>
            </div>
            <p className="text-gray-600">Introduction to React</p>
            <p className="mt-2">Due: Tomorrow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsPage;