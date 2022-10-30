import styles from '@styles/About.module.css'

export default function About() {
    return (
        <section className={styles['about-me']} id="about">
            <h2 className={`section__title ${styles['section__title--about']}`}>
                THE TRUTH
            </h2>
            <p
                className={`section__subtitle ${styles['section__subtitle--about']}`}
            >
                Dev by Day. Musician by Night.
            </p>

            <div className={styles['about-me__body']}>
                <p>
                    Whether I&apos;m coding a new feature or experimenting with
                    a new riff, my greatest strength is the ability to focus my
                    creative energy to produce results.
                </p>
                <p>
                    I am an artist, but I am also a doer. I have the vision, and
                    I have the discipline to get it done.
                </p>
            </div>

            <img
                src="about.jpg"
                alt="Lucas Frazier playing guitar and serenading his dog"
                className={styles['about-me__img']}
            />
        </section>
    )
}
