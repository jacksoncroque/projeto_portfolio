import styles from './Title.module.scss';

const Title = ({ index, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <span>{index}</span>
        <h2>{title}</h2>
      </div>
      <div className={styles.containerEmpty}></div>
    </div>
  );
};

export default Title;
