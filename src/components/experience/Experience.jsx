import styles from "./experience.module.css";
import skills from '../../data/skills.json';
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {skills.map((skill, id) => {
          return (
            <ul key={id} className={styles.description}>
              <li className={styles.images}>
                <img
                  className={styles.imgIcon}
                  src={getImageUrl(skill.imgIcon)}
                  alt={skill.title}
                />
              </li>
              <p className={styles.skillTitle}>{skill.title}</p>
              <p className={styles.border}>
                <p className={styles.scoreLine}>{skill.percent}</p>
              </p>
            </ul>
          );
        })}
      </div>
    </section>
  );
};
