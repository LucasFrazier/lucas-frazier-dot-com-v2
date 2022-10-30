import Layout from '@components/Layout'
import { API_URL } from 'config'

interface TopArtist {
    name: string
    url: string
    coverImage: {
        height: number
        url: string
        width: number
    }
    followers: number
}

interface TopTrack {
    title: string
    artist: string
    url: string
    coverImage: {
        height: number
        url: string
        width: number
    }
}

interface SpotifyStatsPageProps {
    topArtists: TopArtist[]
    topTracks: TopTrack[]
}

export default function SpotifyStatsPage(props: SpotifyStatsPageProps) {
    const { topArtists, topTracks } = props

    const topArtistElements = topArtists.map((topArtist, index) => (
        <li key={index}>{topArtist.name}</li>
    ))

    const topTrackElements = topTracks.map((topTrack, index) => (
        <li key={index}>{topTrack.title}</li>
    ))

    return (
        <Layout title="Spotify Stats">
            <section className="center">
                <h1 className="section__title text-center">Spotify Stats</h1>
                <br />
                <h2 className="section__subtitle text-center">Top Artists</h2>
                <ol>{topArtistElements}</ol>
                <br />
                <h3 className="section__subtitle text-center">Top Tracks</h3>
                <ol>{topTrackElements}</ol>
            </section>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${API_URL}/api/stats/artists`)
    const topArtists = await res.json()

    const res2 = await fetch(`${API_URL}/api/stats/tracks`)
    const topTracks = await res2.json()

    return {
        props: { topArtists, topTracks }, // passed to page component as props
    }
}
