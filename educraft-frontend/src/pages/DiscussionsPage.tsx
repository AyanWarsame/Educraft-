import React from 'react';

const DiscussionsPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen ml-64">
      <h1 className="text-2xl font-bold mb-6">Discussions</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="mb-6">
          <input 
            type="text" 
            placeholder="Search discussions..." 
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold">React Best Practices</h3>
            <p className="text-gray-600">Posted by: John Doe</p>
            <p className="mt-2">What are some React best practices you follow in your projects?</p>
            <div className="flex items-center mt-4 text-sm text-gray-500">
              <span>23 replies</span>
              <span className="mx-2">•</span>
              <span>Last activity: 2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionsPage;