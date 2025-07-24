import { FaServer } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Card from "./Card";

export default function CardsGeneral() {
  
  const ref = useRef(null);
  const controls = useAnimation();
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev - 350; // Mueve 350px a la izquierda
        if (newPosition <= -1050) return 0; // Reinicia cuando llega al final
        return newPosition;
      });
    }, 2000); // Se mueve cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({ x: position, transition: { duration: 1, ease: "easeInOut" } });
  }, [position, controls]);

  return (
    <div className="w-[75%] overflow-hidden mx-auto">
      <motion.ul
        ref={ref}
        drag="x"
        dragConstraints={{ left: -100, right: 0 }} // Permite arrastrar manualmente
        animate={controls} // Aplica la animación automática
        className="flex gap-5 cursor-grab active:cursor-grabbing select-none"
      >
        {[...Array(4)].map((_, index) => ( 
          <motion.li key={index} className="min-w-[350px]">
            <Card
              tittle={"Lorem Lorem"}
              subTittle={"kajsbdfkjhassdf kjhhasdlkf lkjahsdfhasdfkj lkajhsdfhjasdf"}
              image={"https://i.pinimg.com/736x/0f/72/57/0f7257b8d0bfe488a1a15448981fee06.jpg"}
              logo={FaServer}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
