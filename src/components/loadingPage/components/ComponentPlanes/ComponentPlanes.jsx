import { useEffect, useState } from "react";
import CardPlan from "./CardPlan";
import suscripcionService from "../service/suscripcionService";

const ComponentPlanes = () => {
    const [planes, setPlanes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlanes = async () => {
            try {
                setIsLoading(true);
                const data = await suscripcionService.getAllSuscripciones();
                setPlanes(data);
                setError(null);
            } catch (err) {
                setError("No se pudieron cargar los planes. Por favor, intente más tarde.");
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPlanes();
    }, []);

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-black mb-8">Nuestros Planes</h2>
                <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                    Ofrecemos una variedad de planes para adaptarnos a las necesidades de su negocio, desde pequeñas empresas hasta grandes corporaciones.
                </p>

                {isLoading && <div className="text-center">Cargando planes...</div>}
                {error && <div className="text-center text-red-500">{error}</div>}
                
                {!isLoading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {planes.map((plan) => (
                            <CardPlan key={plan.id} plan={plan} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ComponentPlanes; 