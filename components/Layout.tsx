import Head from 'next/head'
import dynamic from 'next/dynamic'
import Footer from './Footer'
// import styles from '@styles/Layout.module.css'

const Header = dynamic(() => import('./Header'), { ssr: false })

type Props = {
    title?: string
    description?: string
    keywords?: string
    children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({
    title = 'lucasfrazier.com',
    description = `Learn more about Lucas Frazier's life and work`,
    keywords = 'lucas, frazier, lucas frazier, developer, musician, cincinnati',
    children,
}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
