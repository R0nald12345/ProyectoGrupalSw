import axios from "axios";

const API_URL = import.meta.env.VITE_API_BACK;

const clienteService = {
    crearCliente: async (payload) => {
        try {
            const response = await axios.post(`${API_URL}/cliente`, payload );
            return response.data.cliente;
        } catch (error) {
            console.error("Error al crear cliente:", error);
            throw error;
        }
    },

    comprarSuscripcion: async (clienteId, suscripcionId) => {
        try {
            const payload = {
                cliente_id: clienteId,
                suscripcion_id: suscripcionId
            };
            
            console.log('Enviando payload:', payload);
            console.log('URL:', `${API_URL}/cliente/comprar-suscripcion`);
            
            const response = await axios.post(
                `${API_URL}/cliente/comprar-suscripcion`, 
                payload
            );
            
            console.log('Respuesta completa:', response);
            console.log('Respuesta data:', response.data);
            
            return response.data;
        } catch (error) {
            console.error("Error al comprar suscripción:", error);
            
            if (error) {
                console.error("Status:", error.response?.status);
                console.error("Data:", error.response?.data);
                console.error("Headers:", error.response?.headers);
            }
            
            throw error;
        }
    }
};

export default clienteService;