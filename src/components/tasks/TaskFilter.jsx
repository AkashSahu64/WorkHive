import { FaFilter } from 'react-icons/fa';

function TaskFilter({ currentFilter, onFilterChange }) {
  const filters = [
    { value: 'all', label: 'All Tasks' },
    { value: 'new', label: 'New' },
    { value: 'progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'missed', label: 'Missed' }
  ];

  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="relative group">
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light">
          <FaFilter />
          Filter Tasks
        </button>
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl hidden group-hover:block z-10">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => onFilterChange(filter.value)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                currentFilter === filter.value ? 'bg-primary-light/10 text-primary' : ''
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskFilter;