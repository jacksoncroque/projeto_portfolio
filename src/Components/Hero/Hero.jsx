import { ArrowRightIcon } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { IoNewspaperOutline } from "react-icons/io5";

import styles from "./Hero.module.scss";
import { ConstJackson } from "../ConstJackson/ConstJackson";

const Hero = () => {
  return (
    <div className={styles.container}>
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
            <FiGithub />{" "}
            <a
              href="https://github.com/jacksoncroque"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className={styles.containerLeftContactIcons}>
            <SlSocialLinkedin />{" "}
            <a
              href="https://linkedin.com/in/jacksoncrq"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
          <div className={styles.containerLeftContactIcons}>
            {" "}
            <IoNewspaperOutline />{" "}
            <a
              href="public/docs/Jackson_Coelho_Dev.pdf"
              download={"Jackson_Coelho_Dev"}
            >
              Currículo
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
