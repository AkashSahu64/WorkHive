import { useState } from 'react';
import { FaSortAmountDown, FaUsers, FaTrophy } from 'react-icons/fa';

function AdminSection({ students, topPerformers }) {
  const [sortBy, setSortBy] = useState('points');

  const sortedStudents = [...students].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="space-y-8">
      {/* Student Data Management */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Student Data</h3>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 pr-8"
            >
              <option value="points">Sort by Points</option>
              <option value="badges">Sort by Badges</option>
            </select>
            <FaSortAmountDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b dark:border-gray-700">
                <th className="pb-3">Name</th>
                <th className="pb-3">Points</th>
                <th className="pb-3">Tasks Completed</th>
              </tr>
            </thead>
            <tbody>
              {sortedStudents.map((student) => (
                <tr key={student.id} className="border-b dark:border-gray-700">
                  <td className="py-3">{student.name}</td>
                  <td className="py-3">{student.points}</td>
                  <td className="py-3">{student.tasksCompleted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-6">Top Performers</h3>
        <div className="grid grid-cols-3 gap-6">
          {topPerformers.map((performer, index) => (
            <div key={performer.id} className="text-center">
              <div className="relative">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary-light/10 flex items-center justify-center mb-3">
                  {performer.avatar ? (
                    <img src={performer.avatar} alt={performer.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <FaUsers className="text-3xl text-primary" />
                  )}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                    #{index + 1}
                  </div>
                </div>
                <h4 className="font-medium">{performer.name}</h4>
                <p className="text-sm text-gray-500">{performer.points} points</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Task Distribution */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-6">Distribute Task</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Task Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700"
              placeholder="Enter task name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700"
              rows="4"
              placeholder="Enter task description"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Deadline</label>
            <input
              type="datetime-local"
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-light transition-colors"
          >
            Assign to All Students
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminSection;