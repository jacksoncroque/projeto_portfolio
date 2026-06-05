import { ArrowRightIcon } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoNewspaperOutline } from "react-icons/io5";

import { ConstJackson } from "./ConstJackson/ConstJackson";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container} id="home">
      <div className={styles.containerLeft}>
        <div className={styles.containerLeftRole}>
          <span>// front-end developer</span>
        </div>
        <div className={styles.containerLeftName}>
          <h1>
            Jackson<span>.</span>
          </h1>
        </div>
        <div className={styles.containerLeftDescription}>
          <h3>
            Nem sempre sei a solução de primeira, mas gosto de descobrir como
            chegar nela.
          </h3>
        </div>
        <div className={styles.containerLeftButtons}>
          <button>
            Ver Projetos
            <ArrowRightIcon />
          </button>
          <button>Entrar em contato</button>
        </div>
        <div className={styles.containerLeftContact}>
          <div className={styles.containerLeftContactIcons}>
            <a
              href="https://github.com/jacksoncroque"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub /> GitHub
            </a>
          </div>
          <div className={styles.containerLeftContactIcons}>
            <a
              href="https://linkedin.com/in/jacksoncrq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialLinkedin /> Linkedin
            </a>
          </div>
          <div className={styles.containerLeftContactIcons}>
            {" "}
            <a
              href="public/docs/Jackson_Coelho_Dev.pdf"
              download={"Jackson_Coelho_Dev"}
            >
              <IoNewspaperOutline /> Currículo
            </a>
          </div>
        </div>
      </div>
      <div className={styles.containerRight}>
        <ConstJackson />
      </div>
    </div>
  );
};

export default Hero;
