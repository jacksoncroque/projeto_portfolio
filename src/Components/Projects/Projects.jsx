import { FiGithub } from 'react-icons/fi';
import { ExternalLink } from 'lucide-react';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { useRef } from 'react';

import { projects } from './data';
import Title from '../Title';

import styles from './Projects.module.scss';

const Projects = () => {
  const videoRef = useRef();
  const timeoutRef = useRef();

  const handleMouseEnter = (event) => {
    const video = event.currentTarget;

    video.play().catch(() => {});
  };

  const handleMouseLeave = (event) => {
    const video = event.currentTarget;

    video.pause();
    video.currentTime = 0;
    video.load();
  };

  const leftVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const rightVariant = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className={styles.container}>
      <div
        className={styles.containerProjects}
        id="projects"
      ></div>
      <div className={styles.containerWrapper}>
        <Title
          index="01"
          title="Projetos"
        />

        <div className={styles.containerWrapperContent}>
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              className={cn(styles.containerWrapperContentProject, {
                [styles.containerWrapperContentProjectLeft]: index % 2 === 0,
                [styles.containerWrapperContentProjectRight]: index % 2 !== 0,
              })}
              initial={{
                opacity: 0,
                x: isMobile ? 0 : index % 2 === 0 ? -80 : 80,
                y: isMobile ? 40 : 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              {item.video ? (
                <AnimatePresence>
                  <motion.video
                    whileHover={{
                      scale: 1.03,
                      y: -5,
                      boxShadow: '0 20px 50px rgba(255, 0, 0, 0.25)',
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    muted
                    ref={videoRef}
                    src={item.video}
                    poster={item.image}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Seu navegador não suporta o elemento video
                  </motion.video>
                </AnimatePresence>
              ) : (
                <img
                  src={item.image}
                  alt={item.project}
                />
              )}

              <div>
                <h3>{item.project}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div>
                  <a
                    href={item.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub /> Código
                  </a>
                  {item.preview && (
                    <a
                      href={item.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
