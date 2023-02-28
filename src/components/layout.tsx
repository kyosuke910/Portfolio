import Head from 'next/head'
import Link from 'next/link'
 
type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
}
 
export default function Layout({ children, title, description }: Props) {
    const pageTitle = title || 'ページタイトル'
    return (
        <div className="wrap">
            <Head>
                <title>{ pageTitle }</title>
                <meta name="description" content={ description || 'ホームページ概要' } />
            </Head>
            <header>
                <h1>{ pageTitle }</h1>
                <p>ここはヘッダーです</p>
            </header>
            <nav>
                    <button><Link href="/">Home</Link></button>
			&nbsp;&nbsp;
                    <button><Link href="/page1">page1</Link></button>
			&nbsp;&nbsp;
                    <button><Link href="/page2">page2</Link></button>
			&nbsp;&nbsp;
                    <button><Link href="/page3">page3</Link></button>
			&nbsp;&nbsp;
            </nav>
            <main>{ children }</main>
            <footer>ここはフッターです。</footer>
        </div>
    )
}
