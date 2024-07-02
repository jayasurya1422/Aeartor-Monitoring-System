import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login logic; replace with actual login API call
    console.log('Logging in with:', email, password);
    // On successful login
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="container max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Login</h1>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg text-gray-700 font-medium mb-2">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              autoComplete="off"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg text-gray-700 font-medium mb-2">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold text-lg"
          >
            Login
          </button>
          <p className="mt-6 text-center text-gray-700 text-lg">
            Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
