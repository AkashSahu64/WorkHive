import { useNavigate } from 'react-router-dom';
import { FaUser, FaCog, FaBell, FaHistory, FaUsers, FaComments, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

function ProfileMenu({ onClose }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const menuItems = [
    { icon: FaUser, label: 'Profile', action: () => navigate('/profile') },
    { icon: FaCog, label: 'Dashboard', action: () => navigate('/dashboard') },
    { icon: FaBell, label: 'Notifications', action: () => navigate('/notifications') },
    { icon: FaHistory, label: 'Activity History', action: () => navigate('/activity') },
    { icon: FaComments, label: 'Communications', action: () => navigate('/communications') },
    { icon: FaUsers, label: 'Community', action: () => navigate('/community') },
    { icon: FaCog, label: 'Settings', action: () => navigate('/settings') },
    { 
      icon: FaSignOutAlt, 
      label: 'Logout', 
      action: async () => {
        await logout();
        onClose();
        navigate('/login');
      }
    },
  ];

  const handleItemClick = async (item) => {
    await item.action();
    onClose();
  };

  return (
    <div className="absolute right-0 mt-[20rem] w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => handleItemClick(item)}
          className="w-full flex  space-x-2 px-4 py-0 mb-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <item.icon className="text-gray-600 dark:text-gray-400" />
          <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
        </button>
      ))}
    </div>
  );
}

export default ProfileMenu;