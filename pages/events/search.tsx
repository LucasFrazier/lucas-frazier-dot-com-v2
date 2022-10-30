import { useRouter } from 'next/router'
import Link from 'next/link'
import qs from 'qs'
import EventItem from '@components/EventItem'
import Layout from '@components/Layout'
import { BACKEND_API_URL } from 'config/index'

export default function SearchPage({ events }) {
    const router = useRouter()

    return (
        <Layout>
            <section>
                <h1 className="section__title text-center">Search Results</h1>
                <h2 className="section__subtitle text-center">
                    {' '}
                    for &quot;{router.query.term}&quot;
                </h2>
                {events.data.length === 0 && <h3>No events to show</h3>}

                {events.data.map((evt) => (
                    <EventItem key={evt.id} evt={evt} />
                ))}

                <Link href="/events">
                    <a className="btn">Back to Events</a>
                </Link>
            </section>
        </Layout>
    )
}

export async function getServerSideProps({ query: { term } }) {
    const query = qs.stringify(
        {
            filters: {
                $or: [
                    {
                        name: {
                            $contains: term,
                        },
                    },
                    {
                        performers: {
                            $contains: term,
                        },
                    },
                    {
                        description: {
                            $contains: term,
                        },
                    },
                    {
                        venue: {
                            $contains: term,
                        },
                    },
                ],
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    )

    const res = await fetch(
        `${BACKEND_API_URL}/api/events?populate=*&sort=date:ASC&${query}`
    )
    const events = await res.json()

    return {
        props: { events },
    }
}
