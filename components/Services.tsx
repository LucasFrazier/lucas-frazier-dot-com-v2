import styles from '@styles/Services.module.css'

export default function Services() {
    return (
        <section className={styles['my-services']} id="services">
            <h2
                className={`section__title ${styles['section__title--services']}`}
            >
                THE SKILLS
            </h2>
            <div className={styles.services}>
                <div className={styles.service}>
                    <h3>Front-End Web Dev</h3>
                    <p>
                        Using HTML, CSS, and Javascript to build modern,
                        responsive websites.
                    </p>
                </div>
                <div className={styles.service}>
                    <h3>Ecommerce</h3>
                    <p>
                        Extending platform functionality to meet business goals.
                    </p>
                </div>
                <div className={styles.service}>
                    <h3>UX/UI</h3>
                    <p>
                        Accessibility. Usability. Testing. You are not the user,
                        and neither am I.
                    </p>
                </div>
                <div className={styles.service}>
                    <h3>Agile</h3>
                    <p>
                        A user-centered, iterative approach to project
                        management.
                    </p>
                </div>
            </div>
        </section>
    )
}
