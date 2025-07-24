import axios from "axios";

const API_URL = import.meta.env.VITE_API_BACK;
const API_KEY = "AIzaSyAfTaRM-E1R4XQwuLyUyXT2cENFrIsrjf0"; // Consider moving this to .env if it changes

const getAuthHeaders = () => {
    
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
};

const rawData = {
  "rawData": "timestamp,consumo_kwh,temperatura_ext_c,humedad_ext_pct,es_festivo,dia_semana,hora_dia,ocupacion\n2023-10-25T14:00:00Z,450.5,22.5,60.1,0,2,14,350\n2023-10-25T15:00:00Z,480.2,23.0,59.5,0,2,15,410\n2023-10-25T16:00:00Z,475.8,22.8,59.8,0,2,16,390\n2023-10-26T09:00:00Z,350.1,19.0,65.2,0,3,9,500\n{\n  \"prediccion_timestamp\": \"2023-11-15T15:00:00Z\",\n  \"consumo_predicho_kwh\": 515.7,\n  \"intervalo_confianza\": {\n    \"inferior\": 498.5,\n    \"superior\": 532.9\n  },\n  \"unidades\": \"kWh\",\n  \"version_modelo\": \"v1.2.3\"\n}\n{\n  \"asset_id\": \"HVAC-UNIDAD-03-NORTE\",\n  \"timestamp\": \"2023-10-26T11:25:10Z\",\n  \"sensores\": {\n    \"vibracion_ms2\": 1.25,\n    \"temperatura_motor_c\": 65.8,\n    \"presion_refrigerante_psi\": 250.3,\n    \"consumo_electrico_a\": 15.2,\n    \"horas_operacion\": 4512.5\n  }\n}\n{\n  \"asset_id\": \"HVAC-UNIDAD-03-NORTE\",\n  \"timestamp_analisis\": \"2023-10-26T11:25:12Z\",\n  \"estado_salud_pct\": 45,\n  \"probabilidad_fallo_30d_pct\": 78.5,\n  \"vida_util_restante_dias\": 22,\n  \"diagnostico\": {\n    \"alerta_activa\": true,\n    \"codigo_alerta\": \"ERR_VIB_HIGH\",\n    \"causa_probable\": \"Fallo inminente de rodamientos en el motor del ventilador.\",\n    \"recomendacion\": \"Inspección y reemplazo de rodamientos requerida. Programar mantenimiento en los próximos 15 días.\"\n  }\n}"
};

export const aiService = {
    createDashboard: async () => {
        try {
            const response = await axios.post(
                `${API_URL}/ai-gemini/CreateDashBoard/${API_KEY}`,
                rawData,
                { headers: getAuthHeaders() }
            );
            
            const data = response.data;

            // Check for a successful response structure first.
            if (typeof data === 'object' && data !== null) {
                // If there is a known error key, throw it.
                if (data.error) {
                    throw new Error(typeof data.error === 'string' ? data.error : JSON.stringify(data.error));
                }
                
                // Look for specific keys that should contain the JSX string
                const jsxString = data.dashboard || data.html || data.jsx;
                if (typeof jsxString === 'string' && jsxString.trim().startsWith('<')) {
                    return jsxString;
                }
            }

            // If the response is already a valid JSX string
            if (typeof data === 'string' && data.trim().startsWith('<')) {
                return data;
            }

            // If we reach here, the format is not what we expect.
            console.error("Unexpected dashboard response format:", data);
            throw new Error("Formato de respuesta del dashboard no reconocido o inválido.");

        } catch (error) {
            console.error("Error creating dashboard:", error);
            if (axios.isAxiosError(error) && error.response) {
                 const errorData = error.response.data;
                 const message = errorData?.error?.message || errorData?.message || error.message;
                 throw new Error(message);
            }
            throw error;
        }
    },

    getAudioSummary: async () => {
        try {
            const response = await axios.post(
                `${API_URL}/ai-gemini/rawDataToText/${API_KEY}`,
                rawData,
                { 
                    headers: getAuthHeaders(),
                    responseType: 'blob'
                }
            );

            // The server might send an error as a JSON blob.
            if (response.data.type === 'application/json') {
                 const errorJson = await response.data.text();
                 console.error("Audio API returned a JSON error:", errorJson);
                 throw new Error("El servidor de audio devolvió un error en formato JSON.");
            }
            return response.data;
        } catch (error) {
            console.error("Error getting audio summary:", error);
            // If the response is an error and the data is a blob, try to read it for more details.
            if (axios.isAxiosError(error) && error.response?.data instanceof Blob) {
                const errorText = await error.response.data.text();
                console.error("Detailed audio API error from blob:", errorText);
            }
            throw error;
        }
    }
}; 