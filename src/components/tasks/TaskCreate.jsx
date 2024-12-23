import { useState } from 'react';
import { FaPlus, FaUsers } from 'react-icons/fa';
import DateTimePicker from './DateTimePicker';

function TaskCreate() {
  const [task, setTask] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
  });

  const handleSubmit = async (e, withFriends = false) => {
    e.preventDefault();
    // Handle task creation
    console.log('Creating task:', { ...task, withFriends });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Hello User! Create Your Today's Task/s
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Task Name
              </label>
              <input
                type="text"
                value={task.name}
                onChange={(e) => setTask({ ...task, name: e.target.value })}
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary"
                placeholder="Enter task name"
              />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Task Description
              </label>
              <textarea
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                className="w-full p-3 resize-none rounded-lg border focus:ring-2 focus:ring-primary"
                rows="4"
                placeholder="Enter task description"
              />
            </div>
          </div>

          <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 dark:text-gray-300">
            <DateTimePicker 
              label="Start Date & Time"
              date={task.startDate}
              time={task.startTime}
              onDateChange={(date) => setTask({ ...task, startDate: date })}
              onTimeChange={(time) => setTask({ ...task, startTime: time })}
            />
            <DateTimePicker
              label="End Date & Time"
              date={task.endDate}
              time={task.endTime}
              onDateChange={(date) => setTask({ ...task, endDate: date })}
              onTimeChange={(time) => setTask({ ...task, endTime: time })}
            />
          </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            type="submit"
            className="flex-1 bg-primary hover:bg-primary-light text-white py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <FaPlus /> Create Task
          </button>
          <button
            type="button"
            onClick={(e) => handleSubmit(e, true)}
            className="flex-1 bg-secondary hover:bg-secondary-light text-white py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <FaUsers /> Create with Friends
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskCreate;