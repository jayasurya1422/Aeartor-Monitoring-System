import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate registration logic; replace with actual registration API call
    console.log('Registering:', { name, email, password });
    // On successful registration
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="container max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Register</h1>
          <div className="mb-3">
            <label htmlFor="name" className="block text-lg text-gray-700 font-medium mb-1">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter your name"
              autoComplete="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-lg text-gray-700 font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              autoComplete="off"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block text-lg text-gray-700 font-medium mb-1">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter your password"
              autoComplete="new-password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 font-semibold text-lg"
          >
            Register
          </button>
          <p className="mt-3 text-center text-gray-700 text-lg">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
