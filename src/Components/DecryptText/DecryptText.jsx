import { useEffect, useState } from 'react';

const DecryptText = ({ text }) => {
  const [output, setOutput] = useState('');

  useEffect(() => {
    let iteration = 0;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    const interval = setInterval(() => {
      setOutput(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';

            if (index < iteration) {
              return text[index];
            }

            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(''),
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <p>{output}</p>;
};

export default DecryptText;
