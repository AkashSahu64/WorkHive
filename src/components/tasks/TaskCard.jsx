import { useState } from "react";
import { FaCheck, FaClock, FaTimes, FaEdit, FaTrash, FaUser, FaUsers, FaEllipsisV } from "react-icons/fa";

function TaskCard({ task, onStatusChange, onEdit, onDelete }) {
  const [showActions, setShowActions] = useState(false);

  const getStatusIcon = () => {
    switch (task.status) {
      case "completed":
        return <FaCheck className="text-green-500" />;
      case "progress":
        return <FaClock className="text-yellow-500" />;
      case "missed":
        return <FaTimes className="text-red-500" />;
      default:
        return <FaClock className="text-blue-500" />;
    }
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <span className="font-semibold text-lg">{task.id}.</span>
        <div>
          <h3 className="font-semibold text-base">{task.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Created: {new Date(task.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Middle Section: Status */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          {getStatusIcon()}
          <span className="ml-1 text-sm">{task.status}</span>
        </div>
        <FaEllipsisV
          className="cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={() => setShowActions(!showActions)}
        />
        {showActions && (
          <div className="absolute mt-8 bg-white dark:bg-gray-800 shadow-lg rounded p-2">
            <button
              onClick={() => onEdit(task)}
              className="flex items-center space-x-1 text-sm text-blue-500 hover:text-blue-700"
            >
              <FaEdit /> <span>Edit</span>
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="flex items-center space-x-1 text-sm text-red-500 hover:text-red-700 mt-2"
            >
              <FaTrash /> <span>Delete</span>
            </button>
          </div>
        )}
      </div>

      {/* Right Section: User and Dates */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          {task.collaborators ? <FaUsers /> : <FaUser />}
          <span className="text-sm">{task.assignedTo || "Unassigned"}</span>
        </div>
        <p className="text-sm">
          Due: {new Date(task.dueDate).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default TaskCard;
