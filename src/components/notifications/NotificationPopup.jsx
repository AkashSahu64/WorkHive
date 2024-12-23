import { useState } from 'react';
import { FaBell, FaTimes } from 'react-icons/fa';
import NotificationList from './NotificationList';

function NotificationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState([
    { 
      id: 1, 
      message: 'New task assigned', 
      read: false,
      timestamp: new Date().toISOString(),
      type: 'task'
    },
    { 
      id: 2, 
      message: 'Task deadline approaching', 
      read: false,
      timestamp: new Date().toISOString(),
      type: 'deadline'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-white hover:text-primary-light p-2 relative"
      >
        <FaBell />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <button 
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FaTimes />
              </button>
            </div>
            <NotificationList notifications={notifications} />
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationPopup;