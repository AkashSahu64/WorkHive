import TaskList from '../../components/tasks/TaskList';
import TaskCreate from '../../components/tasks/TaskCreate';
import TaskSidebar from './components/TaskSidebar';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Task List */}
        <div className="w-full md:w-1/4">
          <TaskSidebar />
        </div>
        
        {/* Right Column - Task Creation and All Tasks */}
        <div className="w-full md:w-3/4 space-y-8">
          {/* Top Section - Create Task */}
          <TaskCreate />
          
          {/* Bottom Section - All Tasks */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">All Tasks</h2>
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;