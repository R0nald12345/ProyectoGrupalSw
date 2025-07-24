const Contacto = () => {

  return (

    <section className="bg-blue-950 py-20">

      <div className="w-[40%] mx-auto">
        <h4 className='text-orange-600 text-3xl text-center'>Contacto</h4>
        <h3 className="text-white text-4xl font-semibold text-center mt-3"> Listo para Transformar su Negocio</h3>
        <p className="text-white text-2xl text-center mt-4">Contactenos para descubir como nuestras solcuiones de IA e IOT pueden optimizar sus operaciones</p>
        <div className="bg-gray-600/40 p-10 rounded-md shadow-2xs m-10">

          <form className=" text-center  mx-auto  mb-5 ">
            <div>
              <p className="text-white font-semibold text-xl flex justify-start">Correo Electrónico</p>

              <input
                placeholder="sugmail.com"
                className="text-gray-300 mt-2 flex justify-start bg-gray-400/50 w-full rounded-md py-2 px-4"
                type="email"
              />

              <p className="text-white font-semibold text-xl flex justify-start mt-5">Correo Electrónico</p>

              <input
                placeholder="sugmail.com"
                className="text-gray-300 mt-2 flex justify-start bg-gray-400/50 w-full rounded-md py-2 px-4"
                type="email"
              />

              <input
                type="submit"
                className="bg-yellow-700 w-full mt-5 py-3 rounded-lg"
              />

            </div>
          </form>

          <hr className="text-gray-500" />
          <p className="text-gray-500 text-xl text-center mt-3">pumaronal2016@gmail.com</p>
        </div>


      </div>


    </section>

  )
}

export default Contacto