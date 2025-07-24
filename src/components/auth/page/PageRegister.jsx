import { useForm } from "react-hook-form";
import imgenFondo from "../../../../public/imagenFondo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useClienteIdStore } from "../../../store/useClienteIdStore";

const PageRegister = () => {
  const { register: registerUser, isLoading } = useAuth();
  const navigate = useNavigate();
  const { clienteId: zustandClienteId, rolId: zustandRolId } = useClienteIdStore();

  const clienteId = zustandClienteId ?? Number(localStorage.getItem("idCliente"));
  const rolId = zustandRolId ?? Number(localStorage.getItem("rolId"));

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!clienteId) {
      setError("root", { message: "No hay cliente seleccionado. Debe crear una empresa primero." });
      return;
    }

    if (!rolId) {
      setError("root", { message: "No hay rol seleccionado." });
      return;
    }

    try {
      const payload = {
        ...data,
        rol_id: rolId,
        cliente_id: clienteId,
        activo: true
      };

      await registerUser(payload);
      navigate("/auth");
    } catch (error) {
      setError("root", { message: "Error en el registro. Intente nuevamente." });
    }
  };

  return (
    <>
      <div
        className="min-h-screen w-screen h-screen bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${imgenFondo})`
        }}
      >
        <section className="flex items-center justify-center min-h-screen">
          <div className="px-5 md:px-12 py-8 mx-auto md:w-[40%] bg-white/20 rounded-md shadow-lg mt-8 md:mt-0">
            <h2 className="font-mplus-bold text-3xl md:text-5xl text-white  text-center">Registrarse</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-3 mx-auto">
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  {...register("nombre_completo", {
                    required: "El nombre es obligatorio",
                  })}
                  className="font-mplus-bold text-gray-500 rounded-xl w-full p-2 mt-10 bg-white outline-none"
                />
                {errors.nombre_completo && <p className="text-red-500 text-sm">{errors.nombre_completo.message}</p>}
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  placeholder="Ingrese su correo"
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Ingrese un correo válido",
                    },
                  })}
                  className="font-mplus-bold text-gray-500 rounded-xl w-full p-2 mt-8 bg-white outline-none"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  placeholder="Contraseña"
                  {...register("password_hash", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres",
                    },
                  })}
                  className="font-mplus-bold text-gray-500 rounded-xl w-full p-2 mt-8 bg-white outline-none"
                />
                {errors.password_hash && <p className="text-red-500 text-sm">{errors.password_hash.message}</p>}
              </div>
              {errors.root && <p className="text-red-500 text-sm mb-4">{errors.root.message}</p>}
              <div className="flex justify-between mt-10 gap-8">
                <button
                  type="submit"
                  className="font-mplus-bold bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 w-full cursor-pointer"
                  disabled={isLoading}
                >
                  {isLoading ? 'Registrando...' : 'Registrarse'}
                </button>
                <button
                  type="button"
                  className="font-mplus-bold bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 w-full cursor-pointer"
                  onClick={() => navigate("/auth/login")}
                >
                  Ya tengo cuenta
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageRegister;