import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
        <p className={styles.titulofooter}>Equipe realizadora</p>
        <ul className={styles.equipe}>

          <li className={styles.textLi}>Antônio Rodrigues<img src="../../../dist/assets/imagem/github.png" alt="iconGithub" className={styles.iconGit} />
            <img src="../../../dist/assets/imagem/linkedin.png" alt="iconLinkedin" className={styles.iconLink} /></li>

          <li className={styles.textLi}>Bruna Roberta<img src="../../../dist/assets/imagem/github.png" alt="iconGithub" className={styles.iconGit} />
            <img src="../../../dist/assets/imagem/linkedin.png" alt="iconLinkedin" className={styles.iconLink} /></li>

          <li className={styles.textLi}>
            Danilo Santana
            <img src="../../../dist/assets/imagem/github.png" alt="iconGithub" className={styles.iconGit} />
            <img src="../../../dist/assets/imagem/linkedin.png" alt="iconLinkedin" className={styles.iconLink} />
          </li>

          <li className={styles.textLi}>Igor Daniel<img src="../../../dist/assets/imagem/github.png" alt="iconGithub" className={styles.iconGit} />
            <img src="../../../dist/assets/imagem/linkedin.png" alt="iconLinkedin" className={styles.iconLink} /></li>

          <li className={styles.textLi}>Patrick Augusto<img src="../../../dist/assets/imagem/github.png" alt="iconGithub" className={styles.iconGit} />
            <img src="../../../dist/assets/imagem/linkedin.png" alt="iconLinkedin" className={styles.iconLink} /></li>

        </ul>
    </footer>
  );
}

export default Footer;
