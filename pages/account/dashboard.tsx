import { parseCookies } from 'helpers'
import Layout from '@components/Layout'
import { BACKEND_API_URL } from '@config/index'
import styles from '@styles/Dashboard.module.css'
import DashboardEvent from '@components/DashboardEvent'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function DashboardPage({ events, token }) {
    const router = useRouter()

    const deleteEvent = async (id) => {
        if (confirm('Are you sure?')) {
            const res = await fetch(`${BACKEND_API_URL}/api/events/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await res.json()

            if (!res.ok) {
                toast.error(data.message)
            } else {
                router.reload()
            }
        }
    }

    return (
        <Layout title="User Dashboard">
            <section>
                <div className={styles.dash}>
                    <ToastContainer />
                    <h1 className="section__title">Dashboard</h1>
                    <h3>My Events</h3>

                    {events.map((evt) => (
                        <DashboardEvent
                            key={evt.id}
                            evt={evt}
                            handleDelete={deleteEvent}
                        ></DashboardEvent>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export async function getServerSideProps({ req }) {
    const { token } = parseCookies(req)

    const res = await fetch(`${BACKEND_API_URL}/api/users/me?populate=*`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    const data = await res.json()

    const events = data.events

    return {
        props: { events, token },
    }
}
