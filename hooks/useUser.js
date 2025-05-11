"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('access_token');
      
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axios.get('http://localhost:8008/api/users/auth/users/me/', {
        headers: {
          'Authorization': `Bearer ${token}`, // Changed from JWT to Bearer
          'Content-Type': 'application/json',
        }
      });
      
      if (response.data) {
        setUser(response.data);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        try {
          // Try to refresh the token
          const refresh_token = localStorage.getItem('refresh_token');
          if (refresh_token) {
            const refreshResponse = await axios.post('http://localhost:8008/api/users/auth/jwt/refresh/', {
              refresh: refresh_token
            });
            
            if (refreshResponse.data.access) {
              localStorage.setItem('access_token', refreshResponse.data.access);
              // Retry the original request
              return fetchUser();
            }
          }
        } catch (refreshError) {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
        }
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, refetch: fetchUser };
}
