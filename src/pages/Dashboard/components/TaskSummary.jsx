import { FaCheckCircle, FaClock, FaExclamationTriangle } from 'react-icons/fa';

function TaskSummary({ summary, upcomingTasks }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-lg font-semibold mb-6">Task Summary</h3>
      
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-2">{summary.total}</div>
          <p className="text-sm text-gray-500">Total Tasks</p>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-500 mb-2">{summary.completed}</div>
          <p className="text-sm text-gray-500">Completed</p>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-500 mb-2">{summary.missed}</div>
          <p className="text-sm text-gray-500">Missed</p>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-4">Upcoming Deadlines</h4>
        <div className="space-y-4 max-h-60 overflow-y-auto">
          {upcomingTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                {task.status === 'completed' && <FaCheckCircle className="text-green-500" />}
                {task.status === 'in-progress' && <FaClock className="text-yellow-500" />}
                {task.status === 'approaching' && <FaExclamationTriangle className="text-red-500" />}
                <div>
                  <p className="font-medium">{task.name}</p>
                  <p className="text-sm text-gray-500">{task.deadline}</p>
                </div>
              </div>
              <span className={`text-sm px-2 py-1 rounded ${
                task.status === 'completed' ? 'bg-green-100 text-green-800' :
                task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskSummary;