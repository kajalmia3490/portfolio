import { getImageUrl } from "../../utils";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kajal</h1>
        <p className={styles.description}>
          I'm a Frontend Web Application Developer with 3 years of experience
          using Javascript & React JS. Reach out if you would like to learn
          more!
        </p>
        <a href="mailto:kajalmia3490@gmail.com" className={styles.hireBtn}>
          Hire Me
        </a>
      </div>
      <img
        src={getImageUrl(
          "https://avatars.githubusercontent.com/u/103885309?v=4"
        )}
        alt="hero-img"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
