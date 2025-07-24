// src/components/auth/service/authService.js

const API_URL = import.meta.env.VITE_API_BACK;

export const loginApi = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error en el login");
  }

  return response.json();
};

// NUEVO: Servicio para registrar usuario
export const registerUserApi = async (userData) => {
  const response = await fetch(`${API_URL}/usuario`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error en el registro");
  }

  return response.json();
};
