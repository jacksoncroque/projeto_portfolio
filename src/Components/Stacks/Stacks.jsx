import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

import { stacks } from './data';
import Title from '../Title';

import styles from './Stacks.module.scss';

const Stacks = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.containerSkills}
        id="skills"
      ></div>
      <div className={styles.containerWrapper}>
        <Title
          index="03"
          title={'Tecnologias'}
        />
        <div className={styles.containerWrapperContent}>
          {stacks.map((stack) => (
            <motion.div
              key={stack.id}
              whileHover={{
                boxShadow: '0 0 0 1px #fb2c36',
                scale: 1.02,
              }}
              transition={{ duration: 0.2 }}
            >
              <Icon
                icon={stack.icon}
                style={stack.style ?? {}}
              />
              <p>{stack.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stacks;
