import { ArrowRightIcon } from "lucide-react";

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
      </div>
      <div className={styles.containerRight}>
        <ConstJackson />
      </div>
    </div>
  );
};

export default Hero;
