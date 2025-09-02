// pages/SettingsPage.tsx
import React from 'react';

const SettingsPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen ml-64">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                defaultValue="Ayan" 
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                defaultValue="ayan@example.com" 
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span>Email notifications</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span>Assignment reminders</span>
            </label>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;