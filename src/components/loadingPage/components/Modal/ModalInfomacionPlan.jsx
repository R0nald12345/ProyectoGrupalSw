import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import clienteService from "../service/clienteService";
import { useNavigate } from "react-router-dom";
import { useClienteIdStore } from "../../../../store/useClienteIdStore";

const ModalInformacionPlan = ({ open, onClose, planId }) => {
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [loading, setLoading] = useState(false);
  const [pagoUrl, setPagoUrl] = useState(null);
  const [loadingPago, setLoadingPago] = useState(false);

  const { setClienteId, clienteId, setRolId, setSuscripcionId, getClienteId, getRolId, getSuscripcionId } = useClienteIdStore();




  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setNombreEmpresa("");
      setClienteId(null);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, setClienteId]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombreEmpresa.trim()) {
      Swal.fire({
        icon: "error",
        title: "Campo requerido",
        text: "El nombre de la empresa es obligatorio.",
      });
      return;
    }
    setLoading(true);
    try {
      const payload = {
        nombre_empresa: nombreEmpresa,
        suscripcion_id: planId,
        activo: true,
      };
      const res = await clienteService.crearCliente(payload);
      console.log("ressssss", res);

 
      Swal.fire({
        icon: "success",
        title: "¡Empresa creada!",
        text: "La empresa fue registrada exitosamente.",
      })
      await handlePago(res.id,res.suscripcion_id  ) ;
    
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error?.response?.data?.message || "No se pudo crear la empresa.",
      });
    } finally {
      setLoading(false);
    }
  };


  // Lógica para el botón de pago
  const handlePago = async (resId, suscripcionId) => {
    setLoadingPago(true);
    try {
      const res = await clienteService.comprarSuscripcion(resId, suscripcionId);
      console.log('Datos....', res);
      setPagoUrl(res.url);
      if (res.url) {
        window.location.href = res.url; // Redirige a Stripe
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error?.response?.data?.message || "No se pudo iniciar el pago.",
      });
    } finally {
      setLoadingPago(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 mx-4">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          {clienteId
            ? "¡Empresa creada! Ahora realiza el pago para activar tu suscripción"
            : "Ingresa el nombre de tu empresa para suscribirte"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Nombre de la empresa"
            value={nombreEmpresa}
            onChange={e => setNombreEmpresa(e.target.value)}
            disabled={loading || !!clienteId}
            autoFocus
          />
          <div className="flex justify-center gap-4 mt-2">
            <button
              type="submit"
              disabled={loading || !!clienteId}
              className="bg-[#FF6D00] hover:bg-[#ff8c00] text-white font-semibold py-2 px-4 rounded-xl transition disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Crear Empresa y Suscribirse"}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={loadingPago}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-xl transition"
            >
              Cerrar
            </button>
          </div>
        </form>
        <div className="flex justify-center gap-4 mt-6">
        </div>
      </div>
    </div>
  );
};

export default ModalInformacionPlan;