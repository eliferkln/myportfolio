import styles from "../../../styles/GetInTouch.module.css";

export default function GetInTouch() {
  return (
    <div className={styles.container} id="contact">
      <a
        href="https://www.linkedin.com/in/hanifeerkalan/"
        target="_blank"
        rel="noreferrer"
      >
        <button className={styles.button}>Contact Me</button>
      </a>
      <h6 className={styles.message}>Feel free to send me a message </h6>
    </div>
  );
}
