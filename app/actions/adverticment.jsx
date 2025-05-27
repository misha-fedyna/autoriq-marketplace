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
    console.log("createAdvertisement start");
    const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
    console.log("fetching...");
    const response = await fetch(`${API_BASE_URL}/cars/advertisements/`, {
      method: 'POST',
      headers: {
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        // Не вказуємо Content-Type, щоб браузер сам поставив boundary для multipart/form-data
      },
      body: data, // data — це FormData
    });
    console.log("fetch done", response.status);
    if (!response.ok) {
      const text = await response.text();
      console.error('API error:', response.status, text);
      throw new Error(`API Error: ${response.status} - ${text}`);
    }
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
