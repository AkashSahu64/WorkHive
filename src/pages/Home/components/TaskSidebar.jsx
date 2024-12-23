import React from 'react';
import { FaUser, FaCog, FaSignOutAlt, FaEllipsisH, FaCalendarAlt, FaClock } from 'react-icons/fa';

// Task Sidebar Component
function TaskSidebar() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl shadow p-4 flex flex-col justify-between h-full">
      {/* User Section */}
      <div>
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-primary-light/10 flex items-center justify-center rounded-full">
            <FaUser className="text-primary-light w-6 h-6" />
          </div>
          <div className='ml-4'>
          <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Akash</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">akash@gamil.com</p>
        </div>
        </div>

        {/* Task List */}
        <ul className="space-y-3">
          <li className="p-3 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-between hover:shadow-md transition">
            <span className="text-gray-800 dark:text-white">A task on a mondodb.</span>
            <FaEllipsisH className="text-gray-500 dark:text-gray-400" />
          </li>
          <li className="p-3 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-between hover:shadow-md transition">
            <span className="text-gray-800 dark:text-white">Craeting a Extrension.</span>
            <FaEllipsisH className="text-gray-500 dark:text-gray-400" />
          </li>
        </ul>
      </div>

      {/* Footer Section */}
      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4">
        <button className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-light transition">
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
        <button className="flex items-center mt-4 text-gray-600 dark:text-gray-400 hover:text-primary-light transition">
          <FaCog className="mr-2" /> Settings
        </button>
      </div>
    </div>
  );
}

export default TaskSidebar;