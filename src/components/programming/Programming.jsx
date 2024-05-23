import styles from './programming.module.css';
import {FaExternalLinkAlt} from 'react-icons/fa';

export const Programming = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Programming</h2>
      <div className={styles.description}>
        <a href="https://leetcode.com/kajalmia3490/" target="_">
          LeetCode Profile <FaExternalLinkAlt />
        </a>
        <a href="https://github.com/kajalmia3490" target="_">
          Github Profile <FaExternalLinkAlt />
        </a>
      </div>
    </section>
  );
}
