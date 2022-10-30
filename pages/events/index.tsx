import Link from 'next/link'
import EventItem from '@components/EventItem'
import Search from '@components/Search'
import { BACKEND_API_URL, PER_PAGE } from 'config/index'
import Layout from '@components/Layout'
import Pagination from '@components/Pagination'
import AuthContext from '@context/AuthContext'
import { useContext } from 'react'

export default function EventsPage({ events, page, total }) {
    const { user, login } = useContext(AuthContext)

    return (
        <Layout>
            <section>
                <h1 className="section__title text-center">Events</h1>
                {user && (
                    <Link href="/events/add">
                        <a className="btn">Add Event</a>
                    </Link>
                )}
                <Search />
                {events.data.length === 0 && <h3>No events to show</h3>}
                {events.data.map((evt) => (
                    <EventItem key={evt.id} evt={evt} />
                ))}
                <Pagination page={page} total={total} />
            </section>
        </Layout>
    )
}

export async function getServerSideProps({ query: { page = 1 } }) {
    // Calculate start page
    const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

    // Fetch total/count
    // const totalRes = await fetch(`${BACKEND_API_URL}/api/events`)
    // const event = await totalRes.json()

    // Fetch events
    const eventRes = await fetch(
        `${BACKEND_API_URL}/api/events?populate=*&sort=date:ASC&pagination[start]=${start}&pagination[limit]=${PER_PAGE}`
    )
    const events = await eventRes.json()
    const total = events.meta.pagination.total

    return {
        props: { events, page: +page, total },
    }
}
