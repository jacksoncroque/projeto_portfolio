import { FiGithub } from "react-icons/fi";
import { ExternalLink } from "lucide-react";
import cn from "classnames";
import { useRef } from "react";

import { projects } from "./data";

import Title from "../Title";

import styles from "./Projects.module.scss";

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

  return (
    <div className={styles.container} id="projects">
      <div className={styles.containerWrapper}>
        <Title index="01" title="Projetos" />

        <div className={styles.containerWrapperContent}>
          {projects.map((item, index) => (
            <div
              key={item.id}
              className={cn(styles.containerWrapperContentProject, {
                [styles.containerWrapperContentProjectLeft]: index % 2 === 0,
                [styles.containerWrapperContentProjectRight]: index % 2 !== 0,
              })}
            >
              {item.video ? (
                <video
                  muted
                  ref={videoRef}
                  src={item.video}
                  poster={item.image}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  crossOrigin="anonymous"
                >
                  Seu navegador não suporta o elemento video
                </video>
              ) : (
                <img src={item.image} alt={item.project} />
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
                  <a href={item.code} target="_blank" rel="noopener noreferrer">
                    <FiGithub /> Código
                  </a>
                  {item.preview && (
                    <a href={item.preview}>
                      <ExternalLink /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
