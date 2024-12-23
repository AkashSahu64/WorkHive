import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

function LoginForm() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Email/Username/Roll Number"
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary"
            onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-primary"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button type="submit" className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary-light">
          Login
        </button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <FaGoogle className="mr-2" /> Google
          </button>
          <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <FaFacebook className="mr-2" /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;