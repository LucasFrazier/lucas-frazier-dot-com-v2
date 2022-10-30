import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSquareEnvelope,
    faSignInAlt,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from '@styles/Header.module.css'
import AuthContext from '@context/AuthContext'

export default function Header() {
    const { user, logout }: any = useContext(AuthContext)

    const [navOpen, setNavOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const navLinkTitles = ['home', 'dev', 'music', 'events']

    const toggleNav = () => {
        setNavOpen((prevNavOpen) => !prevNavOpen)
    }

    const navLinkElements = navLinkTitles.map((navLinkTitle, index) => (
        <li
            className={`${styles['nav__item']} ${styles['nav__link']}`}
            onClick={toggleNav}
            key={index}
        >
            <Link href={`/${navLinkTitle}`}>
                <a className={styles['nav__link']}>
                    {navLinkTitle.replace('-', ' ')}
                </a>
            </Link>
        </li>
    ))

    useEffect(() => {
        const bodyClassList = document.body.classList

        navOpen
            ? bodyClassList.add(styles['nav-open'])
            : bodyClassList.remove(styles['nav-open'])
    }, [navOpen])

    useEffect(() => {
        const watchWidth = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', watchWidth)

        windowWidth >= 1024 &&
            navOpen &&
            setNavOpen((prevNavOpen) => !prevNavOpen)

        return () => window.removeEventListener('resize', watchWidth)
    }, [windowWidth, navOpen])

    return (
        <header className={styles.header}>
            <button
                className={styles['nav-toggle']}
                aria-label="toggle navigation"
                onClick={toggleNav}
            >
                <span className={styles.hamburger}></span>
            </button>
            <Link href="/">
                <a className={styles.logo}>LUCASFRAZIER.COM</a>
            </Link>
            <nav className={`nav ${styles.nav}`}>
                <ul className={styles['nav__list']}>
                    {navLinkElements}
                    <li>
                        {user ? (
                            <>
                                <button
                                    onClick={() => logout()}
                                    className="btn"
                                >
                                    Logout{' '}
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </button>{' '}
                                <Link href="/account/dashboard">
                                    <a className="btn">
                                        Dashboard{' '}
                                        <FontAwesomeIcon icon={faSignInAlt} />
                                    </a>
                                </Link>
                            </>
                        ) : (
                            <Link href="/account/login">
                                <a className="btn">
                                    Login <FontAwesomeIcon icon={faSignInAlt} />
                                </a>
                            </Link>
                        )}
                    </li>
                    <li className={styles['social-list__item']}>
                        <a
                            className={styles['social-list__link']}
                            href="mailto:lucasfrazier1@gmail.com"
                        >
                            <FontAwesomeIcon icon={faSquareEnvelope} />
                        </a>
                        <a
                            className={styles['social-list__link']}
                            href="https://linkedin.com/in/lucasfrazier/"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            className={styles['social-list__link']}
                            href="https://github.com/lucasfrazier"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
