import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from '@styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles['footer']}>
            <ul className={styles['social-list']}>
                <li className={styles['social-list__item']}>
                    <a
                        className={styles['social-list__link']}
                        href="mailto:lucasfrazier1@gmail.com"
                    >
                        <FontAwesomeIcon icon={faSquareEnvelope} />
                    </a>
                </li>
                <li className={styles['social-list__item']}>
                    <a
                        className={styles['social-list__link']}
                        href="https://linkedin.com/in/lucasfrazier/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li className={styles['social-list__item']}>
                    <a
                        className={styles['social-list__link']}
                        href="https://github.com/lucasfrazier"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}
