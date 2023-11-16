// src/components/services/logoutService.tsx

import API from "../api/api";

export const logout = async () => {
  try {
    const response = await API.delete(
      `/auth/logout`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error);
  }
};