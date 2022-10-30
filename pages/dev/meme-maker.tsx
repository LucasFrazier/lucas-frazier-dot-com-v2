import Layout from '@components/Layout'
import dynamic from 'next/dynamic'

const Meme = dynamic(() => import('@components/Meme'), { ssr: false })

export default function MemeMaker() {
    return (
        <Layout title="Meme Maker">
            <section className="MemeMaker">
                <Meme />
            </section>
        </Layout>
    )
}
