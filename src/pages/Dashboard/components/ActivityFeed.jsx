import { FaCircle } from 'react-icons/fa';

function ActivityFeed({ activities }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-6">Activity Feed</h3>
      
      <div className="relative">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
        
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="relative pl-8">
              <FaCircle className="absolute left-0 text-primary text-sm" />
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="font-medium">{activity.description}</p>
                <p className="text-sm text-gray-500 mt-1">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;