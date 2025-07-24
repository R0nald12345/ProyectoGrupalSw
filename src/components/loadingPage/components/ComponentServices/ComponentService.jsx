import { MdElectricBolt } from "react-icons/md";
import { IoHardwareChipSharp } from "react-icons/io5";
import { TbAntennaBars5 } from "react-icons/tb";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import CardBenefit from "../ComponentBenefit/CardBenefit";

const ComponentService = () => {
    return (
        <>
            <section className="bg-blue-950 py-28">
                <div className="w-[30%] mx-auto">
                    <h4 className="uppercase text-center text-xl font-semibold text-orange-600">Nuestros Servicios</h4>
                    <h3 className="text-4xl text-center text-white font-bold mt-3">Soluciones que transforman</h3>
                    <p className="text-center text-gray-400 text-xl mt-8">
                        Nuestras soluciones integran IA e IoT para optimizar sus 
                        opearaciones, reducir costos y maximizar la eficiencia de su 
                        negocio. 
                    </p>
    
                </div>
    
                <section className="flex w-[80%] mx-auto gap-8 mt-12">
                    <CardBenefit
                        icono={<MdElectricBolt className="text-white bg-blue-900 text-6xl rounded-md p-2" />}
                        title="Reduccion de Costos Energéticos"
                        subTitle="Optimice su consumo de energia mediante analisis predictivo y automatización inteligente.
                                    Ahorre hasta un 30% en costos operativos."
                        bgColor="bg-blue-700/20"
                        colorTitle="text-white"
                        colorSubTitle="text-gray-200"
                        
                    />
                    <CardBenefit
                        icono={<IoHardwareChipSharp  className="text-white bg-blue-900 text-6xl rounded-md p-2" />}
                        title="Mantenimiento Predictivo"
                        subTitle="Optimice su consumo de energia mediante analisis predictivo y automatización inteligente.
                                    Ahorre hasta un 30% en costos operativos."
                        bgColor="bg-blue-700/20"
                        colorTitle="text-white"
                        colorSubTitle="text-gray-200"
                    />
                    <CardBenefit
                        icono={<TbAntennaBars5  className="text-white bg-blue-900 text-6xl rounded-md p-2" />}
                        title="Optimización de Procesos"
                        subTitle="Optimice su consumo de energia mediante analisis predictivo y automatización inteligente.
                                    Ahorre hasta un 30% en costos operativos."
                        bgColor="bg-blue-700/20"
                        colorTitle="text-white"
                        colorSubTitle="text-gray-200"
                    />
                    <CardBenefit
                        icono={<BsFillRocketTakeoffFill  className="text-white bg-blue-900 text-6xl rounded-md p-2" />}
                        title="Innovación Continua"
                        subTitle="Optimice su consumo de energia mediante analisis predictivo y automatización inteligente.
                                    Ahorre hasta un 30% en costos operativos."
                        bgColor="bg-blue-700/20"
                        colorTitle="text-white"
                        colorSubTitle="text-gray-200"
                    />
                </section>
    
            </section>
        </>        
      )
}

export default ComponentService