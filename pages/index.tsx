import Layout from '@components/Layout'
import Hero from '@components/Hero'
import Services from '@components/Services'
import Work from '@components/Work'
import About from '@components/About'

export default function HomePage() {
    return (
        <Layout>
            <Hero />
            <Services />
            <Work />
            <About />
        </Layout>
    )
}
