// Mock data for demonstration
const mockTasks = [
  {
    id: 1,
    name: 'A task on a mondodb',
    description: 'Write detailed documentation for the current project phase',
    status: 'progress',
    createdAt: '2024-03-15T10:00:00Z',
    dueDate: '2024-03-20T18:00:00Z',
    assignedTo: 'Akash'
  },
  {
    id: 2,
    name: 'Craeting a Extrension',
    description: 'Review and provide feedback on recent pull requests',
    status: 'completed',
    createdAt: '2024-03-14T15:30:00Z',
    dueDate: '2024-03-16T17:00:00Z',
    assignedTo: 'Akash'
  },
  // Add more mock tasks as needed
];

export const fetchTasks = async () => {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTasks), 500);
  });
};

export const createTask = async (taskData) => {
  // In a real application, this would be an API call
  return new Promise((resolve) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    mockTasks.push(newTask);
    setTimeout(() => resolve(newTask), 500);
  });
};