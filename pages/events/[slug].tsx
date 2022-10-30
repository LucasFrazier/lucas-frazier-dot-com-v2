import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@components/Layout'
import { BACKEND_API_URL } from 'config/index'
import styles from '@styles/Event.module.css'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import AuthContext from '@context/AuthContext'

export default function EventPage({ evt }) {
    const { user } = useContext(AuthContext)

    const router = useRouter()

    const deleteEvent = async (e) => {
        if (confirm('Are you sure?')) {
            const res = await fetch(`${BACKEND_API_URL}/api/events/${evt.id}`, {
                method: 'DELETE',
            })
            const data = await res.json()

            if (!res.ok) {
                toast.error(data.message)
            } else {
                router.push('/events')
            }
        }
    }

    console.log(evt)
    return (
        <Layout>
            <section>
                <div className={styles.event}>
                    {user && (
                        <div className={styles.controls}>
                            <Link href={`/events/edit/${evt.id}`}>
                                <a>
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </a>
                            </Link>
                            <a
                                href="#"
                                className={styles.delete}
                                onClick={deleteEvent}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </a>
                        </div>
                    )}

                    <span>
                        {new Date(evt.attributes.date).toLocaleDateString(
                            'en-US'
                        )}{' '}
                        at {evt.attributes.time}
                    </span>
                    <h1 className="section__title">{evt.attributes.name}</h1>
                    <ToastContainer />
                    {evt && (
                        <div className={styles.image}>
                            <Image
                                src={
                                    evt.attributes.image.data
                                        ? evt.attributes.image.data.attributes
                                              .formats.medium.url
                                        : '/headshot512.png'
                                }
                                width={960}
                                height={600}
                            />
                        </div>
                    )}

                    <h3>Performers:</h3>
                    <p>{evt.attributes.performers}</p>
                    <h3>Description:</h3>
                    <p>{evt.attributes.description}</p>
                    <h3>Venue: {evt.attributes.venue}</h3>
                    <p>{evt.attributes.address}</p>

                    <Link href="/events">
                        <a className="btn">{'<'} Go Back</a>
                    </Link>
                </div>
            </section>
        </Layout>
    )
}

// export async function getStaticPaths() {
//     const res = await fetch(`${BACKEND_API_URL}/api/events?populate=*`)
//     const events = await res.json()

//     const paths = events.data.map((evt) => ({
//         params: { slug: evt.attributes.slug },
//     }))

//     return {
//         paths,
//         fallback: true,
//     }
// }

// export async function getStaticProps({ params: { slug } }) {
//     const res = await fetch(
//         `${BACKEND_API_URL}/api/events?populate=*&filters[slug]=${slug}`
//     )
//     const events = await res.json()

//     return {
//         props: {
//             evt: events.data[0],
//         },
//         revalidate: 1,
//     }
// }

export async function getServerSideProps({ query: { slug } }) {
    const res = await fetch(
        `${BACKEND_API_URL}/api/events?populate=*&filters[slug]=${slug}`
    )
    const events = await res.json()

    return {
        props: {
            evt: events.data[0],
        },
    }
}
