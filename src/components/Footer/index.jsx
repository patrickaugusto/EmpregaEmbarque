import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.textfooter}>Equipe realizadora</p>
      <ul className={styles.textequipe}>
        <li className={styles.text.li}>Igor Daniel</li>
        <li className={styles.text.li}>Antônio Rodrigues</li>
        <li className={styles.text.li}>Danilo Santana</li>
        <li className={styles.text.li}>Bruna Roberta</li>
        <li className={styles.text.li}>Patrick Augusto</li>
      </ul>
    </footer>
  );
}

export default Footer;
