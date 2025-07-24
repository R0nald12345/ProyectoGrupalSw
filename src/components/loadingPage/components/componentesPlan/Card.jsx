const Card = ({ tittle, subTittle, image, logo: IconComponent }) => {
  return (
    <>
        <section className='relative rounded-tl-4xl'>
            <div className='bg-white rounded-xl p-5'>
                <img src={image} alt='imagen' className='rounded-md'/>
                <IconComponent className='text-white p-3 bg-blue-800 text-6xl rounded-md absolute top-43 left-13'/>
                <div className='mt-8'>
                    <h4 className='text-2xl font-bold'>{tittle}</h4>
                    <p className='text-xl'>{subTittle}</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Card