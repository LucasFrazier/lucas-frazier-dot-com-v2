import Link from 'next/link'
import { PER_PAGE } from 'config'

export default function Pagination({ page, total }) {
    const lastPage = Math.ceil(total / PER_PAGE)

    return (
        <>
            {page > 1 && (
                <Link href={`/events?page=${page - 1}`}>
                    <a className="btn">Prev</a>
                </Link>
            )}
            {page < lastPage && (
                <Link href={`/events?page=${page + 1}`}>
                    <a className="btn">Next</a>
                </Link>
            )}
        </>
    )
}
