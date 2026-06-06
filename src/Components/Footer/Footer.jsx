import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div>
          <p>&copy; {new Date().getFullYear()} Jackson</p>
          <p>Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
