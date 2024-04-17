import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <p className={styles.textfooter}>Equipe realizadora</p>
            <ul className={styles.textequipe}>
                <li>Igor Daniel</li>
                <li>Antônio Rodrigues</li>
                <li>Danilo Santana</li>
                <li className={styles.text}>Bruna Roberta</li>
                <li>Patrick Augusto</li>
            </ul>
        </footer>
    )
}

export default Footer