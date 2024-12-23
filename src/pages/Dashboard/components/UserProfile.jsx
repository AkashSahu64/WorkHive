import { useState } from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { useAuth } from '../../../hooks/useAuth';

function UserProfile() {
  const { user } = useAuth();
  const [socialLinks, setSocialLinks] = useState({
    github: '',
    linkedin: '',
    leetcode: '',
    other: ''
  });

  const handleSocialLinkChange = (platform, value) => {
    setSocialLinks(prev => ({ ...prev, [platform]: value }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex flex-col-2 items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-primary-light/10 flex items-center justify-center mb-4">
          {user?.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-4xl font-bold text-primary-light">{user?.name?.[0]}</span>
          )}
        </div>
        <div className='ml-4'>
          <h2 className="text-xl font-semibold">{user?.name}</h2>
        <p className="text-gray-500 dark:text-gray-400">Year 4, Semester 7</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">Email</label>
          <p className="font-medium">{user?.email}</p>
        </div>
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">Roll Number</label>
          <p className="font-medium">{user?.rollNumber || 'Not set'}</p>
        </div>
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">College</label>
          <p className="font-medium">{user?.college || 'Not set'}</p>
        </div>
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400">Contact</label>
          <p className="font-medium">{user?.contact || 'Not set'}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold mb-2">Social Links</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <FaGithub className="text-gray-600" />
            <input
              type="url"
              value={socialLinks.github}
              onChange={(e) => handleSocialLinkChange('github', e.target.value)}
              placeholder="GitHub Profile"
              className="flex-1 p-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
            />
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-gray-600" />
            <input
              type="url"
              value={socialLinks.linkedin}
              onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
              placeholder="LinkedIn Profile"
              className="flex-1 p-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
            />
          </div>
          <div className="flex items-center space-x-2">
            <FaCode className="text-gray-600" />
            <input
              type="url"
              value={socialLinks.leetcode}
              onChange={(e) => handleSocialLinkChange('leetcode', e.target.value)}
              placeholder="LeetCode Profile"
              className="flex-1 p-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;