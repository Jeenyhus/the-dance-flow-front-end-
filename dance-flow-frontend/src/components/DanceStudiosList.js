import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DanceStudiosList = ({ authToken }) => {
  const [danceStudios, setDanceStudios] = useState([]);

  useEffect(() => {
    const fetchDanceStudios = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/dance_studios/', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        setDanceStudios(response.data);
      } catch (error) {
        console.error('Error fetching dance studios:', error.response.data);
      }
    };

    fetchDanceStudios();
  }, [authToken]);

  return (
    <div>
      <h2>Dance Studios List</h2>
      <ul>
        {danceStudios.map((studio) => (
          <li key={studio.id}>
            <strong>{studio.name}</strong>
            <p>Instructors: {studio.instructors.map((instructor) => instructor.name).join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DanceStudiosList;
