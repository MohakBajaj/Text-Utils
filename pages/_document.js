import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <body id="mainbody" className="bg-zinc-900 text-fuchsia-400 md:p-2 mon font-semibold md:overflow-y-hidden">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}