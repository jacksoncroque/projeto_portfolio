import Title from '../Title';

import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.containerAbout}
        id="about"
      ></div>
      <div className={styles.containerWrapper}>
        <Title
          index="02"
          title="Sobre"
        />

        <div className={styles.containerWrapperContent}>
          <div className={styles.containerWrapperContentInfos}>
            <p>
              Comecei na programação por interesse em tecnologia e logo me identifiquei com o
              desenvolvimento Front-End. O que mais me atrai é transformar ideias em interfaces
              funcionais, responsivas e agradáveis de usar.
            </p>
            <p>
              Atualmente estudo e desenvolvo projetos próprios para aprimorar minhas habilidades,
              aplicando na prática conceitos de componentização, responsividade, consumo de APIs e
              construção de interfaces modernas com React. Busco evoluir constantemente, entendendo
              não apenas como implementar soluções, mas também os motivos por trás das decisões de
              desenvolvimento.
            </p>
            <p>
              Estou em início de carreira e aberto a oportunidades que me permitam continuar
              aprendendo, colaborar com outros desenvolvedores e contribuir para a criação de
              produtos com foco em experiência do usuário e qualidade visual.
            </p>
          </div>
          <div className={styles.containerWrapperContentImage}>
            <img
              src="/images/Jackson.jpg"
              alt="Jackson"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
