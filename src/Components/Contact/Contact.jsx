import { MdEmail } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FaWhatsapp } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
import { motion } from 'framer-motion';

import Title from '../Title/Title';

import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div
      className={styles.container}
      id="contact"
    >
      <div className={styles.containerWrapper}>
        <Title
          index="04"
          title="Contato"
        />

        <div className={styles.containerWrapperContent}>
          <p>
            Aberto a oportunidades, conversas e trocas. Pode me chamar por qualquer um destes
            canais.
          </p>

          <div className={styles.containerWrapperContentItem}>
            <ul>
              <li>
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jackson.crq@gmail.com"
                  whileHover={{
                    y: -5,
                    color: '#fb2c36',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <MdEmail /> jackson.crq@gmail.com <GoLinkExternal />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://github.com/jacksoncroque"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -5,
                    color: '#fb2c36',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FiGithub /> github.com/jacksoncroque <GoLinkExternal />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://www.linkedin.com/in/jacksoncrq"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -5,
                    color: '#fb2c36',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <SlSocialLinkedin /> linkedin.com/in/jacksoncrq
                  <GoLinkExternal />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://wa.me/5554991860960?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -5,
                    color: '#fb2c36',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <FaWhatsapp /> WhatsApp <GoLinkExternal />
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
