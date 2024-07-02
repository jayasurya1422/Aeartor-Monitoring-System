import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Aerator Monitoring Dashboard</h1>
        <p className="text-center text-gray-700">Welcome to the Aerator Monitoring System!</p>
        {/* Add your monitoring components and logic here */}
      </div>
    </div>
  );
};

export default Dashboard;
