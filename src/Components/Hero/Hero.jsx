import { ArrowRightIcon } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { IoNewspaperOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

import { ConstJackson } from './ConstJackson/ConstJackson';
import DecryptText from '../DecryptText';
import Card from './ConstJackson/Card';

import styles from './Hero.module.scss';

const MotionArrow = motion(ArrowRightIcon);

const Hero = () => {
  return (
    <div
      className={styles.container}
      id="home"
    >
      <motion.div
        className={styles.containerLeft}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.containerLeftRole}>
          <DecryptText text="// front-end developer" />
        </div>
        <div className={styles.containerLeftName}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Jackson<span>.</span>
          </motion.h1>
        </div>
        <div className={styles.containerLeftDescription}>
          <h3>Nem sempre sei a solução de primeira, mas gosto de descobrir como chegar nela.</h3>
        </div>
        <div className={styles.containerLeftButtons}>
          <motion.button
            onClick={() => {
              location.href = '#projects';
            }}
            whileHover="hover"
          >
            Ver Projetos
            <motion.div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
              variants={{
                hover: {
                  x: 5,
                },
              }}
            >
              <ArrowRightIcon size={16} />
            </motion.div>
          </motion.button>
          <motion.button
            onClick={() => {
              window.location.href = '#contact';
            }}
            whileHover={{
              scale: 1.01,
              boxShadow: '0 0 0 1px #fff',
            }}
            transition={{ duration: 0.2 }}
          >
            Entrar em contato
          </motion.button>
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
            <a
              href="/docs/Jackson_Coelho_Dev.pdf"
              download={'Jackson_Coelho_Dev'}
            >
              <IoNewspaperOutline /> Currículo
            </a>
          </div>
        </div>
      </motion.div>
      <div className={styles.containerRight}>
        <Card>
          <ConstJackson />
        </Card>
      </div>
    </div>
  );
};

export default Hero;
