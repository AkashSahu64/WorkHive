import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import ThemeToggle from './Header/ThemeToggle';
import NotificationPopup from './notifications/NotificationPopup';
import ProfileMenu from './Header/ProfileMenu';
import { useAuth } from '../hooks/useAuth';

function Header() {
  const { isAuthenticated } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-primary p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="./images/image.png" alt="Logo" className="h-8 w-8 rounded-full" />
          <span className="text-white text-xl font-bold">WorkHive</span>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-primary-light">Home</Link>
          {isAuthenticated && (
            <>
              <Link to="/dashboard" className="text-white hover:text-primary-light">Dashboard</Link>
              <Link to="/teams" className="text-white hover:text-primary-light">Teams</Link>
              <Link to="/projects" className="text-white hover:text-primary-light">Projects</Link>
            </>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {isAuthenticated && <NotificationPopup />}
          
          {isAuthenticated ? (
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="text-white hover:text-primary-light"
            >
              <FaUser />
            </button>
          ) : (
            <div className="space-x-2">
              <button 
                onClick={() => navigate('/login')}
                className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('/register')}
                className="bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Register
              </button>
            </div>
          )}
          
          {showProfileMenu && (
            <ProfileMenu onClose={() => setShowProfileMenu(false)} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;