import axios from "axios";

const API_URL = import.meta.env.VITE_API_BACK;
const API_KEY = "AIzaSyAfTaRM-E1R4XQwuLyUyXT2cENFrIsrjf0"; // Considera moverlo a .env si cambia

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

            // Verificar primero la estructura de respuesta exitosa
            if (typeof data === 'object' && data !== null) {
                // Si hay una clave de error conocida, lanzarla
                if (data.error) {
                    throw new Error(typeof data.error === 'string' ? data.error : JSON.stringify(data.error));
                }
                
                // Buscar claves específicas que deberían contener el string JSX
                const jsxString = data.dashboard || data.html || data.jsx;
                if (typeof jsxString === 'string' && jsxString.trim().startsWith('<')) {
                    return jsxString;
                }
            }

            // Si la respuesta ya es un string JSX válido
            if (typeof data === 'string' && data.trim().startsWith('<')) {
                return data;
            }

            // Si llegamos aquí, el formato no es el esperado
            console.error("Formato de respuesta del dashboard inesperado:", data);
            throw new Error("Formato de respuesta del dashboard no reconocido o inválido.");

        } catch (error) {
            console.error("Error creando dashboard:", error);
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
                    headers: {
                        ...getAuthHeaders(),
                        'Content-Type': 'application/json'
                    },
                    responseType: 'blob'
                }
            );

            // Verificar que la respuesta sea realmente un audio
            const contentType = response.headers['content-type'];
            
            if (contentType && contentType.includes('application/json')) {
                // Si es JSON, es probablemente un error
                const errorText = await response.data.text();
                console.error("La API de audio devolvió un error JSON:", errorText);
                throw new Error("El servidor de audio devolvió un error en formato JSON.");
            }

            // Verificar que sea un tipo de audio válido
            if (!contentType || !contentType.includes('audio')) {
                console.warn("Tipo de contenido inesperado:", contentType);
                // Aún así intentar procesar como audio
            }

            // Verificar que el blob no esté vacío
            if (response.data.size === 0) {
                throw new Error("El archivo de audio está vacío.");
            }

            return response.data;
        } catch (error) {
            console.error("Error obteniendo resumen de audio:", error);
            
            // Si la respuesta es un error y los datos son un blob, intentar leerlo para más detalles
            if (axios.isAxiosError(error) && error.response?.data instanceof Blob) {
                try {
                    const errorText = await error.response.data.text();
                    console.error("Error detallado de la API de audio desde blob:", errorText);
                    throw new Error(`Error del servidor: ${errorText}`);
                } catch (blobError) {
                    console.error("No se pudo leer el error del blob:", blobError);
                }
            }
            
            throw error;
        }
    }
};