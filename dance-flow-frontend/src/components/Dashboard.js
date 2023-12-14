import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/dashboard/');
        setMetrics(response.data);  // Update this line
      } catch (error) {
        console.error('Error fetching dashboard metrics:', error.response.data);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Metrics</h3>
        <p>Total Dance Studios: {metrics.totalStudios}</p>
        <p>Total Instructors: {metrics.totalInstructors}</p>
        <p>Total Dancers: {metrics.totalDancers}</p>
      </div>
    </div>
  );
};

export default Dashboard;
