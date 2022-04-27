import styles from "./card.module.css";
import { Button } from "../button/button";
import { mergeClassnames } from "../../utils/merge-classnames";

export function Card({ icon, description, title, className }) {
  return (
    <article className={mergeClassnames(styles.wrapper, className)}>
      <div>{icon}</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Button>Learn more</Button>
    </article>
  );
}
