import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className='fixed top-0 left-0 w-full bg-white shadow-md z-30 py-4'>

          <section className='w-[90%] flex items-center justify-evenly gap-5 mx-auto'>
            
            <div className='flex gap-4'>
              <span className='text-white font-extrabold text-3xl rounded-lg bg-blue-950 px-5 flex items-center'>S</span>
              <div>
                <p className='text-blue-950 font-semibold text-2xl'>Stratex</p>
                <p className='text-gray-500 '>Smart Solution</p>
              </div>
            </div>
            
            <nav className='flex gap-8'>
              <NavLink to='/' className='text-blue-950 text-xl'>Inicio</NavLink>

              <NavLink to='/servicio' className='text-blue-950  text-xl'>Servicio</NavLink>
              <NavLink to='/servicio' className='text-blue-950  text-xl'>Beneficios</NavLink>
              <NavLink to='/servicio' className='text-blue-950  text-xl'>Industrias</NavLink>

              <NavLink to='/contacto' className='text-blue-950 text-xl'>Contacto</NavLink>

            </nav>

            <NavLink to='/auth' className=' font-semibold text-white text-xl bg-blue-950 px-4 py-2 rounded-lg shadow-lg'>Iniciar Sesion</NavLink>

          </section>

        </header>
  )
}

export default Header