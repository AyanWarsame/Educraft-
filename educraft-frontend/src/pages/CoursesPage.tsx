import React from 'react';

const CoursesPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen ml-64">
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Course cards will go here */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Introduction to React</h2>
          <p className="text-gray-600">Dr. Sarah Johnson</p>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">75% complete</p>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;