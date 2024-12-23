import NotificationItem from './NotificationItem';

function NotificationList({ notifications }) {
  return (
    <div className="space-y-2 max-h-96 overflow-y-auto">
      {notifications.map(notification => (
        <NotificationItem 
          key={notification.id} 
          notification={notification} 
        />
      ))}
    </div>
  );
}

export default NotificationList;