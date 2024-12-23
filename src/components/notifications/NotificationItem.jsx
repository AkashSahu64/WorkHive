import { FaCheckCircle, FaClock, FaBell } from 'react-icons/fa';

function NotificationItem({ notification }) {
  const getIcon = (type) => {
    switch (type) {
      case 'task': return <FaBell className="text-blue-500" />;
      case 'deadline': return <FaClock className="text-yellow-500" />;
      case 'completed': return <FaCheckCircle className="text-green-500" />;
      default: return <FaBell className="text-gray-500" />;
    }
  };

  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer">
      <div className="flex-shrink-0 mt-1">
        {getIcon(notification.type)}
      </div>
      <div className="flex-1">
        <p className={`text-sm ${notification.read ? 'text-gray-600 dark:text-gray-400' : 'font-semibold'}`}>
          {notification.message}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {new Date(notification.timestamp).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default NotificationItem;