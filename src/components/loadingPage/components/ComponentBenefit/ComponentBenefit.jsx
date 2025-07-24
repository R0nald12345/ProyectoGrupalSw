import CardBenefit from "./CardBenefit"
import { MdElectricBolt } from "react-icons/md";
import { IoHardwareChipSharp } from "react-icons/io5";
import { TbAntennaBars5 } from "react-icons/tb";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

const ComponentBenefit = () => {
  return (
    <>
        <section className="py-28 bg-white">
           
            <div className="w-[30%] mx-auto">
                <h4 className="uppercase text-center text-custom-blue text-xl font-semibold ">Beneficio Clave</h4>
                <h3 className="text-4xl text-center font-bold mt-3 text-black">Tranforme su Negocio con IA e IoT</h3>
                <p className="text-center text-gray-700 text-xl mt-8">Descubra como nuestra integración de IA e IoT puede revolucionar 
                    su operación y generar resultados medibles.
                </p>
            </div>

            <section className="flex w-[80%] mx-auto gap-8 mt-12">
                
                <CardBenefit
                    icono={<MdElectricBolt className="text-white bg-orange-800 text-6xl rounded-md p-2" />}
                    title="Reduccion de Costos Energéticos"
                    subTitle="Optimice su consumo de energia mediante analisis predictivo y automatización inteligente.
                                Ahorre hasta un 30% en costos operativos."
                    bgColor="bg-orange-100"
                />
                
                <CardBenefit
                    icono={<IoHardwareChipSharp  className="text-white bg-green-800 text-6xl rounded-md p-2" />}
                    title="Mantenimiento Predictivo"
                    subTitle="Optimice su consumo de energia mediante analisis predictivo y automatización inteligente.
                                Ahorre hasta un 30% en costos operativos."
                    bgColor="bg-green-100"
                />

                <CardBenefit
                    icono={<TbAntennaBars5  className="text-white bg-blue-800 text-6xl rounded-md p-2" />}
                    title="Optimización de Procesos"
                    subTitle="Optimice su consumo de energia mediante analisis predictivo y automatización inteligente.
                                Ahorre hasta un 30% en costos operativos."
                    bgColor="bg-blue-100"
                />
                
                <CardBenefit
                    icono={<BsFillRocketTakeoffFill  className="text-white bg-purple-800 text-6xl rounded-md p-2" />}
                    title="Innovación Continua"
                    subTitle="Optimice su consumo de energia mediante analisis predictivo y automatización inteligente.
                                Ahorre hasta un 30% en costos operativos."
                    bgColor="bg-purple-100"
                />
            </section>

        </section>
    </>        
  )
}

export default ComponentBenefit