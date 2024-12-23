import { FaUsers, FaTasks, FaCalendar } from 'react-icons/fa';

function TeamCard({ team }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{team.description}</p>
        </div>
        <div className="bg-primary-light/10 p-2 rounded-full">
          <FaUsers className="text-primary-light text-xl" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <FaUsers className="mx-auto text-gray-500" />
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Members</p>
          <p className="font-semibold">{team.memberCount}</p>
        </div>
        <div className="text-center">
          <FaTasks className="mx-auto text-gray-500" />
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Tasks</p>
          <p className="font-semibold">{team.taskCount}</p>
        </div>
        <div className="text-center">
          <FaCalendar className="mx-auto text-gray-500" />
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Created</p>
          <p className="font-semibold">{new Date(team.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="mt-6 flex space-x-2">
        <button className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary-light transition-colors">
          View Details
        </button>
        <button className="flex-1 border border-primary text-primary py-2 rounded-lg hover:bg-primary-light/10 transition-colors">
          Join Team
        </button>
      </div>
    </div>
  );
}

export default TeamCard;