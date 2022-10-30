import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Source+Sans+Pro:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
                <div id="modal-root"></div>
            </body>
        </Html>
    )
}
