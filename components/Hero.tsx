import styles from '@styles/Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <h1 className={`section__title ${styles['section__title--hero']}`}>
                <strong>
                    THE MAN.
                    <br />
                    THE MYTH.
                    <br />
                    THE MUSTACHE.
                </strong>
            </h1>
            <p
                className={`section__subtitle ${styles['section__subtitle--hero']}`}
            >
                Front-End Web Dev &amp; Beyond
            </p>
            <img
                src="headshot512.png"
                alt="Lucas Frazier smiling"
                className={styles['hero__img']}
            />
        </section>
    )
}
