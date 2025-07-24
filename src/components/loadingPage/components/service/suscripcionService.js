import axios from "axios";

const API_URL = import.meta.env.VITE_API_BACK;

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
};

const suscripcionService = {
    getAllSuscripciones: async () => {
        try {
            const response = await axios.get(`${API_URL}/suscripcion`, {
                headers: getAuthHeaders(),
            });
            return response.data;
        } catch (error) {
            console.error("Error al obtener las suscripciones:", error);
            throw error;
        }
    },
    
    getSuscripcionById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/suscripcion/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error al obtener la suscripción con ID ${id}:`, error);
            throw error;
        }
    },
};

export default suscripcionService; 