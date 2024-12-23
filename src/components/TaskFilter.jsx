import { useState } from 'react';

function TaskFilter({ onFilterChange }) {
  const [currentFilter, setCurrentFilter] = useState('all');

  const filters = [
    { value: 'all', label: 'All Tasks' },
    { value: 'new', label: 'New' },
    { value: 'progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'missed', label: 'Missed' },
  ];

  const handleFilterChange = (value) => {
    setCurrentFilter(value);
    onFilterChange(value);
  };

  return (
    <div className="flex space-x-2 mb-4">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handleFilterChange(filter.value)}
          className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
            currentFilter === filter.value
              ? 'bg-primary text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;