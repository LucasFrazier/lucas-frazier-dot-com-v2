import Layout from '@components/Layout'
import Link from 'next/link'

export default function DevPage() {
    return (
        <Layout title="Dev">
            <section className="text-center center">
                <h1 className="section__title text-center">Dev Portfolio</h1>
                <Link href="/dev/meme-maker">
                    <a className="btn">Meme Maker</a>
                </Link>
                <br />
                <br />
                <Link href="/dev/dice-game">
                    <a className="btn">Dice Game</a>
                </Link>
                <br />
                <br />
                <Link href="/dev/notes-app">
                    <a className="btn">Notes App</a>
                </Link>
            </section>
        </Layout>
    )
}
