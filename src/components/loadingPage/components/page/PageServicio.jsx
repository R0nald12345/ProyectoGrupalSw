import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import suscripcionService from "../service/suscripcionService";
import clienteService from "../service/clienteService";
import { useClienteIdStore } from "../../../store/useClienteIdStore";

const DetalleSuscripcion = () => {
  const { id } = useParams();
  const idNumber = Number(id);
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingPago, setLoadingPago] = useState(false);

  const { clienteId } = useClienteIdStore()

  console.log("Cliente Id Zustanbd", clienteId);

  const idCliente = localStorage.getItem("idCliente");

  useEffect(() => {
    if (!idNumber || isNaN(idNumber)) return;

    suscripcionService
      .getSuscripcionById(idNumber)
      .then((res) => {
        setPlan(res);
        console.log("Dato recibido:", res);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [idNumber]);

  const handleComprarSuscripcion = async () => {
    if (!idCliente) {
      alert("No hay cliente registrado.");
      return;
    }

    setLoadingPago(true);
    
    try {
      console.log("Iniciando compra para cliente:", idCliente, "plan:", idNumber);
      
      const res = await clienteService.comprarSuscripcion(Number(idCliente), idNumber);
      
      console.log("Respuesta recibida:", res);
      
      if (res.success && res.url) {
        // Redirige a la URL de Stripe
        window.location.href = res.url;
      } else {
        alert("No se pudo obtener la URL de pago. Respuesta inválida del servidor.");
        console.error("Respuesta inválida:", res);
      }
    } catch (error) {
      console.error("Error completo:", error);
      
      // Manejo de errores más específico
      if (error.response) {
        console.error("Error del servidor:", error.response.data);
        alert(`Error del servidor: ${error.response.data.message || 'Error desconocido'}`);
      } else if (error.request) {
        console.error("Error de red:", error.request);
        alert("Error de conexión. Verifica tu conexión a internet.");
      } else {
        console.error("Error:", error.message);
        alert("Error al procesar la solicitud.");
      }
    } finally {
      setLoadingPago(false);
    }
  };

  if (loading) return <p className="text-center">Cargando...</p>;
  if (!plan) return <p className="text-center text-red-500">No se encontró el plan.</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 mt-4 border">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.nombre_plan}</h2>
      <p className="text-sm text-gray-600 mb-4">{plan.descripcion}</p>
      <div className="flex justify-between text-sm text-gray-700 mb-2">
        <span><strong>Edificios:</strong> {plan.limite_edificios}</span>
        <span><strong>Usuarios:</strong> {plan.limite_usuarios}</span>
      </div>
      <div className="text-lg font-semibold text-green-700 mb-4">
        Precio: ${plan.precio}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleComprarSuscripcion}
          disabled={loadingPago}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loadingPago ? "Procesando pago..." : "Pagar Suscripción"}
        </button>
      </div>
    </div>
  );
};

export default DetalleSuscripcion;