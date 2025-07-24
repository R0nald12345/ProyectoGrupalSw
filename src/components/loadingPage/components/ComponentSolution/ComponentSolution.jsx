import CardSolution from "./CardSolution"
import { IoStorefrontSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { IoHardwareChipSharp } from "react-icons/io5";

const ComponentSolution = () => {
  return (
    <section className="py-28 bg-white">
        <div className="w-1/3 mx-auto space-y-5">
            <h4 className="uppercase text-blue-950 text-xl font-bold text-center">
                Industrias que Trasnformamos
            </h4>
            <h3 className="text-4xl font-bold text-center">
                Soluciones Específicas para su Sector
            </h3>
            <p className="text-gray-600 text-center">
                Nuestras soluciones se adaptan a diversas industrias, cada una cons sus sector
                propios desafios y oportunidades únicas
            </p>
        </div>
        <section className="w-[70%] mx-auto flex gap-10 mt-12">
            <section className="w-1/2  space-y-8">
                <CardSolution
                    icono={<FaBuilding className="text-white rounded-lg bg-purple-800 text-6xl p-3"/>}
                    title="Ciudades Inteligentes"
                    subTitle="Transformamos espacios urbanos con soluciones IoT integradas para una mejor gestión, eficiencia energética y calidad de vida de los ciudadanos"
                    datails1="40% reducción en consumo energético"
                    datails2="60% mejora en gestión de tráfico"
                    datails3="30% menos emisiones CO2"
                    bgColor="bg-purple-100"
                />
                <CardSolution
                    icono={<IoStorefrontSharp className="text-white rounded-lg bg-blue-800 text-6xl p-3"/>} 
                    title="Ciudades Inteligentes"
                    subTitle="Transformamos espacios urbanos con soluciones IoT integradas para una mejor gestión, eficiencia energética y calidad de vida de los ciudadanos"
                    datails1="40% reducción en consumo energético"
                    datails2="60% mejora en gestión de tráfico"
                    datails3="30% menos emisiones CO2"
                    bgColor="bg-blue-100"
                />
            </section>
            <section className="w-1/2 space-y-8">
                <CardSolution
                    icono={<FaHouseChimney className="text-white rounded-lg bg-green-800 text-6xl p-3" />}
                    title="Ciudades Inteligentes"
                    subTitle="Transformamos espacios urbanos con soluciones IoT integradas para una mejor gestión, eficiencia energética y calidad de vida de los ciudadanos"
                    datails1="40% reducción en consumo energético"
                    datails2="60% mejora en gestión de tráfico"
                    datails3="30% menos emisiones CO2"
                    bgColor="bg-green-100"
                />
                <CardSolution
                    icono={<IoHardwareChipSharp className="text-white rounded-lg bg-orange-600 text-6xl p-3" />}
                    title="Industria 4.0"
                    subTitle="Transformamos espacios urbanos con soluciones IoT integradas para una mejor gestión, eficiencia energética y calidad de vida de los ciudadanos"
                    datails1="40% reducción en consumo energético"
                    datails2="60% mejora en gestión de tráfico"
                    datails3="30% menos emisiones CO2"
                    bgColor="bg-orange-100"
                />
            </section>
        </section>
    </section>
  )
}

export default ComponentSolution