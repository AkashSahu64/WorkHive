import { useState } from 'react';
import { FaBell } from 'react-icons/fa';

function NotificationPopup() {
  const [notifications] = useState([
    { id: 1, message: 'New task assigned', read: false },
    { id: 2, message: 'Task deadline approaching', read: false }
  ]);

  return (
    <div className="relative">
      <button className="text-white hover:text-primary-light p-2">
        <FaBell />
        {notifications.some(n => !n.read) && (
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        )}
      </button>
      <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Notifications</h3>
          {notifications.map(notification => (
            <div 
              key={notification.id}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
            >
              {notification.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationPopup;