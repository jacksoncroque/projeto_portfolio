import { motion, useMotionValue, useSpring } from 'framer-motion';

import styles from './Card.module.scss';

export default function Card({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, {
    stiffness: 200,
    damping: 20,
  });

  const rotateY = useSpring(x, {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set((mouseX - centerX) / 20);
    y.set(-(mouseY - centerY) / 20);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          position: 'relative',
        }}
      >
        <div className={styles.glare} />
        {children}
      </motion.div>
    </div>
  );
}
