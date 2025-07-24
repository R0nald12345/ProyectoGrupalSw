import imagenioT from '../../../../img/ladingPage/imagenIoT.png'
import ComponentBenefit from '../../components/ComponentBenefit/ComponentBenefit'
import Contacto from '../ComponentContact/Contacto'
import ComponentService from '../ComponentServices/ComponentService'
import ComponentSolution from '../../components/ComponentSolution/ComponentSolution'
import ComponentPlanes from '../ComponentPlanes/ComponentPlanes'

const PageLoadingPage = () => {
    return (
        <div className="">
            {/* Sección principal */}

            <div className="relative w-full h-[90vh] flex justify-center items-center overflow-hidden">
                {/* Imagen de fondo difuminada */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('https://logisber.com/contenido/subidas/2025/01/el-impacto-del-internet-de-las-cosas-iot-en-la-gestion-de-la-cadena-de-suministro.jpg')] bg-center bg-cover bg-no-repeat filter blur-lg scale-110"></div>
                    <div className="absolute inset-0 bg-black/40"></div> {/* Overlay oscuro */}
                </div>

                <section className="relative z-10 w-[90%] flex gap-16">


                    <div className="w-[50%] p-5 my-auto" >
                        <p className="text-orange-600 text-xl uppercase">Innovación Tecnológica</p>
                        <h1 className="text-center pt-3 text-6xl font-bold text-white">Transformamos su Industria con IA e ioT</h1>
                        <p className="text-gray-400 text-xl mt-8 text-center">Optimizamos sus operaciones mediante solcuiones inteligentes que integran IA con sistemas IoT, maximiazando las eficianeica y reduciendo costos.</p>
                        <div className="mt-10 flex justify-evenly">
                            <button className="bg-[#FF6D00] py-3 px-4 text-xl rounded-md">Solicitar consulta</button>
                            <button className="bg-[#1976D2] py-3 px-4 text-xl text-white rounded-md">Solicitar consulta</button>
                        </div>

                        <section className="flex mt-10 justify-evenly">
                            <div className="">
                                <p className="text-yellow-600 text-5xl font-bold">45%</p>
                                <p className="text-gray-300 text-2xl">Reducción de Costos</p>
                            </div>
                            <div className="">
                                <p className="text-yellow-600 text-5xl font-bold">98%</p>
                                <p className="text-gray-300 text-2xl">Presición en IA</p>
                            </div>
                            <div className="">
                                <p className="text-yellow-600 text-5xl font-bold">24/7</p>
                                <p className="text-gray-300 text-2xl">Monitoreo</p>
                            </div>
                        </section>
                    </div>

                    <div className=" w-[50%] flex items-center justify-center ">
                        <img
                            src={imagenioT}
                            className=' w-full my-auto' />
                    </div>

                </section>

            </div>


            {/* Contenido sobre el fondo */}


            <div>
                <ComponentBenefit />
            </div>

            <div>
                <ComponentService />
            </div>

            <div>
                <ComponentSolution />
            </div>

            <div>
                <ComponentPlanes />
            </div>

            {/* Sección de contacto con margen superior claro */}
            <div className="">
                {/* <Contact/> */}
                <Contacto/>
            </div>
        </div>
    )
}

export default PageLoadingPage