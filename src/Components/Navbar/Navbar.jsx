import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperName}>
          <span>/</span>
          <a href="#home" >jackson</a>
        </div>
        <div className={styles.containerWrapperLinks}>
          <ul>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#journey">Jornada</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>

        <button className="" onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.containerMobile}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div>
              <div className={styles.containerWrapperName}>
                <span>/</span>
                <span>menu</span>
                <span>/</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className={styles.containerMobileButton}
              >
                <X />
              </button>
            </div>
            <div className={styles.containerMobileLinks}>
              <ul>
                <li>
                  <a href="#projects">Projetos</a>
                </li>
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#journey">Jornada</a>
                </li>
                <li>
                  <a href="#contact">Contato</a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
