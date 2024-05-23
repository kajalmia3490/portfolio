import { getImageUrl } from "../../utils";
import styles from "./about.module.css";
import "./about.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("/src/assets/about/pc.png")}
          className={styles.aboutImg}
          alt="pc img"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("/src/assets/about/cursor.png")}
              className={styles.cursorImg}
              alt="cursor img"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with 3 years of experience in building
                and optimized sites.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("/src/assets/about/cursor.png")}
              className={styles.cursorImg}
              alt="cursor img"
            />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have systems as well.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("/src/assets/about/cursor.png")}
              className={styles.cursorImg}
              alt="cursor img"
            />
            <div className={styles.aboutItemText}>
              <h3>UX Designer</h3>
              <p>
                I know user experience very well. I have SEO knowledge that find
                out your website & rank in search engine.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
