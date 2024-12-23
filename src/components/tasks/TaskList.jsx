import { useState, useEffect } from 'react';
import TaskFilter from './TaskFilter';
import TaskCard from './TaskCard';
import { fetchTasks } from '../../services/taskService';
import TaskSidebar from '../../pages/Home/components/TaskSidebar';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    loadTasks();
  }, []);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  return (
    <div className="space-y-4">
      <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
      <div className="space-y-4">
        {filteredTasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task}
            onStatusChange={(status) => {/* Handle status change */}}
            onEdit={(task) => {/* Handle edit */}}
            onDelete={(id) => {/* Handle delete */}}
          />
        ))}
      </div>
      
    </div>
  );
}

export default TaskList;