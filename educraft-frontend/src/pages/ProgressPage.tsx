// pages/ProgressPage.tsx
import React from 'react';

const ProgressPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen ml-64">
      <h1 className="text-2xl font-bold mb-6">My Progress</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Overall Progress</h2>
        <div className="bg-gray-200 rounded-full h-4 mb-4">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: '65%' }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold">Courses Completed</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold">Average Score</h3>
            <p className="text-2xl font-bold">87%</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold">Hours Spent</h3>
            <p className="text-2xl font-bold">156</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;