import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

import styles from './ConstJackson.module.scss';

export const ConstJackson = () => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    async function highlight() {
      const html = await codeToHtml(
        `const JacksonCoelhoRoque = {
  role: "Frontend Developer",
  stacks: ["React", "JavaScript", "SASS"],
  learning: ["Next.js", "TypeScript"]
}`,
        {
          lang: 'javascript',
          theme: 'github-dark',
        },
      );

      setHtml(html);
    }

    highlight();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperDots}>
          <span />
          <span />
          <span />
        </div>

        <span>jackson.js</span>
      </div>

      <div
        className={styles.containerContent}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};
