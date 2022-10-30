import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from '@styles/DashboardEvent.module.css'

export default function DashboardEvent({ evt, handleDelete }) {
    return (
        <div className={styles.event}>
            <h4>
                <Link href={`/events/${evt.slug}`}>
                    <a>{evt.name}</a>
                </Link>
            </h4>
            <Link href={`/events/edit/${evt.id}`}>
                <a className={styles.edit}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                    <span>Edit Event</span>
                </a>
            </Link>
            <a
                href="#"
                className={styles.delete}
                onClick={() => handleDelete(evt.id)}
            >
                <FontAwesomeIcon icon={faTimes} />
                <span>Delete</span>
            </a>
        </div>
    )
}
