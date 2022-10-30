import styles from '@styles/Work.module.css'

export default function Work() {
    return (
        <section className={styles['my-work']} id="work">
            <h2 className={`section__title ${styles['section__title--work']}`}>
                THE PROOF
            </h2>
            <p
                className={`section__subtitle ${styles['section__subtitle--work']}`}
            >
                Professional and Personal Portfolio
            </p>
            <div className={styles.portfolio}>
                <a
                    href="https://www.eachandevery.com"
                    className={styles['portfolio__item']}
                >
                    <img
                        src="portfolio-01.png"
                        alt=""
                        className={styles['portfolio__img']}
                    />
                </a>
                <a href="/dice-game" className={styles['portfolio__item']}>
                    <img
                        src="portfolio-02.png"
                        alt=""
                        className={styles['portfolio__img']}
                    />
                </a>
                <a
                    href="https://www.shopgemz.com"
                    className={styles['portfolio__item']}
                >
                    <img
                        src="portfolio-03.png"
                        alt=""
                        className={styles['portfolio__img']}
                    />
                </a>
                <a href="/notes-app" className={styles['portfolio__item']}>
                    <img
                        src="portfolio-04.png"
                        alt=""
                        className={styles['portfolio__img']}
                    />
                </a>
                <a
                    href="https://www.keepitanchored.com"
                    className={styles['portfolio__item']}
                >
                    <img
                        src="portfolio-05.png"
                        alt=""
                        className={styles['portfolio__img']}
                    />
                </a>
                <a href="/meme-maker" className={styles['portfolio__item']}>
                    <img
                        src="portfolio-06.png"
                        alt=""
                        className={styles['portfolio__img']}
                    />
                </a>
            </div>
        </section>
    )
}
