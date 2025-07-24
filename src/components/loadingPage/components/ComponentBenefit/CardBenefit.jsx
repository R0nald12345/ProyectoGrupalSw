const CardBenefit = ({icono, title, subTitle, bgColor, colorTitle, colorSubTitle}) => {
  return (
    <>
        <section className={`rounded-md shadow-2xl p-10 ${bgColor} text-black`}>
            {icono}
            <h4 className={`font-bold text-2xl mt-3 ${colorTitle} `}>
                {title}
            </h4>

            <p className={`${colorSubTitle} mt-3`}>
                {subTitle}
            </p>

        </section>
    </>
  )
}

export default CardBenefit