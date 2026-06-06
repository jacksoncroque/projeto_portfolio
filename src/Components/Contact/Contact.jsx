import styles from "./Contact.module.scss";

import Title from "../Title/Title";
import { MdEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <Title index="04" title="Contato" />

        <div className={styles.containerWrapperContent}>
          <p>
            Aberto a oportunidades, conversas e trocas. Pode me
            chamar por qualquer um destes canais.
          </p>

          <div className={styles.containerWrapperContentItem}>
            <ul>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jackson.crq@gmail.com">
                  <MdEmail /> jackson.crq@gmail.com <GoLinkExternal />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jacksoncroque"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub /> github.com/jacksoncroque <GoLinkExternal />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jacksoncrq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SlSocialLinkedin /> linkedin.com/in/jacksoncrq <GoLinkExternal />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5554991860960?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> WhatsApp <GoLinkExternal />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
