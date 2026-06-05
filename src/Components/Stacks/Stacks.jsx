import { Icon } from "@iconify/react";

import { stacks } from "./data";

import Title from "../Title";

import styles from "./Stacks.module.scss";
import { div } from "motion/react-client";

const Stacks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <Title index="03" title={"Tecnologias"} />
        <div className={styles.containerWrapperContent}>
          {stacks.map((stack) => (
            <div key={stack.id}>
              <Icon icon={stack.icon} style={stack.style ?? {}}/>
              <p>{stack.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stacks;
