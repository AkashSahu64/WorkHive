import { FaTrophy, FaMedal } from 'react-icons/fa';

function PointsBadges({ points, badges }) {
  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Points Earned</h3>
          <FaTrophy className="text-yellow-500 text-2xl" />
        </div>
        <div className="text-3xl font-bold text-primary">{points}</div>
        <p className="text-sm text-gray-500 mt-2">Keep completing tasks to earn more points!</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Badges</h3>
          <FaMedal className="text-blue-500 text-2xl" />
        </div>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1"
            >
              <span className="text-sm">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PointsBadges;