import Link from 'next/link'
import Layout from '@components/Layout'

export default function NotFoundPage() {
    return (
        <Layout title="Page Not Found">
            <section className="text-center">
                <h1 className="section__title">404</h1>
                <p className="section__subtitle">This page does not exist.</p>
                <br />
                <Link href="/">
                    <a className="btn">Back to Home</a>
                </Link>
            </section>
        </Layout>
    )
}
