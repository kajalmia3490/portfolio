import styles from "./project.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Project = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        {projects.map((project, id) => {
          return (
            <div className={styles.description} key={id}>
              <img src={getImageUrl(project.screenshots)} alt={project.title} />
              <p className={styles.projectTitle}>{project.title}</p>
              <p className={styles.tech}>Tech: {project.tech}</p>
              <p className={styles.linkGroup}>
                <a href={project.demo} target="_">
                  Live Page <FaExternalLinkAlt />
                </a>
                <a href={project.source} target="_">
                  Source Code <FaExternalLinkAlt />
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
