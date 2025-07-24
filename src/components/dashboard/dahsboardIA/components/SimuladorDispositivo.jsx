import { useEffect, useRef, useState } from "react";
import axios from "axios";

const SimuladorDispositivo = ({ deviceId }) => {
  const [simulando, setSimulando] = useState(false);
  const [valor, setValor] = useState(0);
  const intervalRef = useRef(null);

  const startSim = async () => {
    setSimulando(true);
    // Aquí podrías llamar a tu endpoint de start si es por dispositivo
    // await axios.post(`${API_URL}/simulations/start_device`, { device_id: deviceId });
    intervalRef.current = setInterval(() => {
      setValor(Math.floor(Math.random() * 100)); // valor aleatorio para simular
    }, 1000);
  };

  const stopSim = async () => {
    setSimulando(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    // Aquí podrías llamar a tu endpoint de stop si es por dispositivo
    // await axios.post(`${API_URL}/simulations/stop_device`, { device_id: deviceId });
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="mt-2">
      <div className="flex items-center space-x-2">
        <button
          onClick={simulando ? stopSim : startSim}
          className={`px-2 py-1 rounded ${simulando ? "bg-red-600" : "bg-green-600"} text-white`}
        >
          {simulando ? "Detener Simulación" : "Iniciar Simulación"}
        </button>
        <div className="w-32 bg-gray-200 rounded h-4 overflow-hidden">
          <div
            className="bg-blue-500 h-4 transition-all"
            style={{ width: `${valor}%` }}
          ></div>
        </div>
        <span>{valor}</span>
      </div>
    </div>
  );
};

export { SimuladorDispositivo };