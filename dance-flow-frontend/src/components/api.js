import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}login/`, credentials);
    return response.data.token;
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};

// Add other API request functions as needed
