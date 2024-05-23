import styles from "./contact.module.css";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.description}>
        <div className={styles.subTitle}>
          <h1>Contact</h1>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.contactItems}>
          <li>
            <SiGmail className={styles.contactIcon} />
            <a href="mailto:kajalmia3490@gmail.com" target="_">
              Gmail <FaExternalLinkAlt />
            </a>
          </li>
          <li>
            <FaLinkedin className={styles.contactIcon} />
            <a href="https://www.linkedin.com/in/kajalmia/" target="_">
              Linkedin <FaExternalLinkAlt />
            </a>
          </li>
          <li>
            <FaGithub className={styles.contactIcon} />
            <a href="https://github.com/kajalmia3490" target="_">
              GitHub <FaExternalLinkAlt />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
