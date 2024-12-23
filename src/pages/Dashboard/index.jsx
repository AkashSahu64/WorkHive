import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import UserProfile from './components/UserProfile';
import PointsBadges from './components/PointsBadges';
import ProgressSection from './components/ProgressSection';
import TaskSummary from './components/TaskSummary';
import ActivityFeed from './components/ActivityFeed';
import AdminSection from './components/AdminSection';

function Dashboard() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    points: 0,
    badges: [],
    dailyProgress: [],
    totalProgress: [],
    taskSummary: {
      total: 0,
      completed: 0,
      missed: 0
    },
    upcomingTasks: [],
    activities: [],
    students: [],
    topPerformers: []
  });

  useEffect(() => {
    // Fetch dashboard data
    const fetchDashboardData = async () => {
      try {
        // In a real app, this would be an API call
        const mockData = {
          points: 1250,
          badges: [
            { name: 'Quick Learner' },
            { name: 'Team Player' },
            { name: 'Problem Solver' }
          ],
          dailyProgress: [65, 75, 70, 80, 85, 75, 90],
          totalProgress: [60, 65, 70, 72, 75, 78, 80],
          taskSummary: {
            total: 48,
            completed: 35,
            missed: 5
          },
          upcomingTasks: [
            {
              id: 1,
              name: 'A task on a mondodb',
              deadline: '2024-03-20',
              status: 'in-progress'
            },
            // Add more tasks...
          ],
          activities: [
            {
              description: 'Craeting a Extrension',
              timestamp: '2 hours ago'
            },
            // Add more activities...
          ],
          students: [
            {
              id: 1,
              name: 'Akash',
              points: 1500,
              tasksCompleted: 42
            },
            // Add more students...
          ],
          topPerformers: [
            {
              id: 1,
              name: 'Akash',
              points: 2000,
              avatar: null
            },
            // Add more performers...
          ]
        };
        setDashboardData(mockData);
        // Check if user is admin
        setIsAdmin(user?.role === 'admin');
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Fixed Profile */}
        <div className="w-full md:w-1/5">
          <UserProfile />
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="w-full md:w-4/5 space-y-8">
          <PointsBadges
            points={dashboardData.points}
            badges={dashboardData.badges}
          />
          
          <ProgressSection
            dailyProgress={dashboardData.dailyProgress}
            totalProgress={dashboardData.totalProgress}
          />
          
          <TaskSummary
            summary={dashboardData.taskSummary}
            upcomingTasks={dashboardData.upcomingTasks}
          />
          
          <ActivityFeed activities={dashboardData.activities} />

          {isAdmin && (
            <AdminSection
              students={dashboardData.students}
              topPerformers={dashboardData.topPerformers}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;