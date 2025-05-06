import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8008/api';

// Helper function for error handling
const handleApiError = async (response) => {
  const errorData = await response.json().catch(() => ({}));
  throw new Error(`API Error: ${response.status} - ${errorData.message || response.statusText}`);
};

// Get all advertisements
export const getAllAdvertisements = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/cars/advertisements/`);
    if (!response.ok) await handleApiError(response);
    return await response.json();
  } catch (error) {
    console.error('Error fetching advertisements:', error);
    throw error;
  }
};

// Get single advertisement by ID
export const getAdvertisementById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cars/advertisements/${id}`);
    if (!response.ok) await handleApiError(response);
    return await response.json();
  } catch (error) {
    console.error('Error fetching advertisement:', error);
    throw error;
  }
};

// Create new advertisement
export const createAdvertisement = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cars/advertisements/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) await handleApiError(response);
    return await response.json();
  } catch (error) {
    console.error('Error creating advertisement:', error);
    throw error;
  }
};

// Example of usage with axios as alternative
export const updateAdvertisement = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/advertisements/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating advertisement:', error);
    throw error;
  }
};
