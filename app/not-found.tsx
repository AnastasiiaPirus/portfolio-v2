import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="container py-16">
            <h1 className="heading1">404 — Page not found</h1>
            <p className="body2 my-6">This address does not match a published page. Use these links to continue.</p>
            <ul className="body2 flex flex-col gap-3">
                <li><Link className="underline" href="/">Portfolio home</Link></li>
                <li><Link className="underline" href="/about">About Anastasiia Pirus</Link></li>
                <li><Link className="underline" href="/blog">Blog</Link></li>
                <li><a className="underline" href="/sitemap.xml">Sitemap</a></li>
                <li><a className="underline" href="/llms.txt">Agent reading guide</a></li>
            </ul>
        </div>
    )
}
