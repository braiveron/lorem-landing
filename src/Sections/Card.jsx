import React, { useState } from "react";
import {
  IoChevronForward,
  IoTerminalSharp,
  IoRocket,
  IoFingerPrint,
  IoConstruct,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

const hoverEffect = {
  whileHover: {
    scale: 1.5,
    rotate: 630,
    borderRadius: "100%",
  },
  whileTap: {
    scale: 0.8,
    rotate: 630,
    borderRadius: "100%",
  },
};

function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div className="service_container">
      <div className="title_wrapper">
        <motion.span
          className="service_title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          Nuestros Servicios
        </motion.span>
        <motion.h2
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Transformacion Digital
          <br />
          Combinando Imaginacon y Tecnologia
        </motion.h2>
      </div>

      <motion.div
        className="service_card"
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "#e7daf8" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "#2F32F5", size: "22px" }}>
              <IoRocket />
            </IconContext.Provider>
          </motion.span>
          <h3>
            Diseño UX/UI
            <br />
            Para Moviles y Web
          </h3>
          <span onClick={openModal}>
            <span>conoce mas</span>
            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </span>
        </motion.div>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-content">
                <h2>Diseño UX/ UI</h2>
                <p>
                  Especializados en crear y mejorar experiencias digitales,
                  encontramos el equilibrio entre usuario, empresa y entorno en
                  línea. Nuestro enfoque minucioso en UX/UI resulta en
                  soluciones web visualmente atractivas y valiosas para tus
                  visitantes, convirtiéndolos en clientes satisfechos.
                </p>
                <span onClick={closeModal}>Cerrar</span>
              </div>
            </div>
          </div>
        )}
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "#EEE59A" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "#C74F35", size: "22px" }}>
              <IoConstruct />
            </IconContext.Provider>
          </motion.span>
          <h3>Maquetacion Web</h3>
          <span onClick={openModal}>
            <span>conoce mas</span>
            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </span>
        </motion.div>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-content">
                <h2>Maquetacion Web</h2>
                <p>
                  Somos el equipo de desarrollo Frontend perfecto para proyectos
                  que demandan un alto nivel de diseño y complejidad. Estamos
                  aquí para brindarte el soporte adicional que necesitas para
                  llevar a cabo tus proyectos web de manera efectiva y
                  visualmente impactante.
                </p>
                <span onClick={closeModal}>Cerrar</span>
              </div>
            </div>
          </div>
        )}
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "#e7daf8" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "#5700cf", size: "22px" }}>
              <IoTerminalSharp />
            </IconContext.Provider>
          </motion.span>
          <h3>
            Desarrollo de Apps
            <br />
            Moviles y Web
          </h3>
          <span onClick={openModal}>
            <span>conoce mas</span>
            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </span>
        </motion.div>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-content">
                <h2>Desarrollo de Apps Moviles y Web</h2>
                <p>
                  Creamos soluciones digitales que se adaptan perfectamente a
                  cualquier dispositivo, brindando una experiencia fluida y
                  efectiva tanto en smartphones como en computadoras. Somos
                  especialistas en generar soluciones a medida y diseño
                  personalizado para cada cliente logrando maximizar los
                  resultados deseados.
                </p>
                <span onClick={closeModal}>Cerrar</span>
              </div>
            </div>
          </div>
        )}
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "#FDE0DB" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "#AF1280", size: "22px" }}>
              <IoFingerPrint />
            </IconContext.Provider>
          </motion.span>
          <h3>
            Diseño de Marca
            <br />
            (Logo & Packaging)
          </h3>
          <span onClick={openModal}>
            <span>conoce mas</span>
            <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </span>
        </motion.div>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-content">
                <h2>Diseño de Marca (Logo y Packaging)</h2>
                <p>
                  Transformamos tu identidad en una poderosa narrativa visual.
                  Creamos logotipos distintivos y diseños de packaging
                  cautivadores que comunican tu esencia y atraen a tu audiencia,
                  dejando una impresión duradera.
                </p>
                <span onClick={closeModal}>Cerrar</span>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Card;
