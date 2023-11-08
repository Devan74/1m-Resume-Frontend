import axios from 'axios';
const BASE_URL = 'http://localhost:8000'; // backend API URL

export const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/resume`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSectionOrder = async (sections) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/update-order`, { sections }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status >= 200 && response.status < 300) {
    } else {
      throw new Error('Failed to update section order');
    }
  } catch (error) {
    throw error;
  }
};

export const updateSectionColor = async (color) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/update-color`, { color }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status >= 200 && response.status < 300) {
    } else {
      throw new Error('Failed to update section color');
    }
  } catch (error) {
    throw error;
  }
};