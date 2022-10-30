import Layout from '@components/Layout'
import Link from 'next/link'
import { API_URL } from 'config/index'

export default function MusicPage({ nowPlaying }) {
    return (
        <Layout title="Music">
            <section className="text-center">
                <h1 className="section__title text-center">Music Page</h1>
                <br />
                <p>
                    Currently Playing: &quot;{nowPlaying.title}&quot; by
                    {nowPlaying.artist}
                </p>
                <br />
                <img
                    className="center"
                    height="200px"
                    src={nowPlaying.albumImageUrl}
                    alt=""
                />
                <br />
                <Link href="/music/spotify-stats">
                    <a className="btn">Spotify Stats</a>
                </Link>
            </section>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${API_URL}/api/stats/now-playing`)
    const nowPlaying = await res.json()

    return {
        props: { nowPlaying }, // will be passed to the page component as props
    }
}
