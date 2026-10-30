import {NextRequest, NextResponse} from 'next/server'
import {preferredRepresentation} from '@/lib/accept'

const machineFiles = new Set(['/robots.txt', '/sitemap.xml', '/llms.txt', '/favicon.ico'])
const discoveryLinks = '</llms.txt>; rel="describedby"; type="text/plain", ' +
    '</about>; rel="author"; type="text/html", ' +
    '</privacy>; rel="privacy-policy"; type="text/html"'

export function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname
    if (!['GET', 'HEAD'].includes(request.method) || machineFiles.has(path) ||
        path.startsWith('/images/') || path.startsWith('/files/') ||
        path === '/.well-known' || path.startsWith('/.well-known/') ||
        request.headers.get('rsc') === '1') {
        return NextResponse.next()
    }

    const representation = preferredRepresentation(request.headers.get('accept'))
    if (representation === null) {
        return new NextResponse('Not Acceptable. Available representations: text/html, text/markdown.\n', {
            status: 406,
            headers: {'Content-Type': 'text/plain; charset=utf-8', 'Vary': 'Accept, Accept-Encoding'},
        })
    }

    const response = representation === 'markdown'
        ? (() => {
            const destination = request.nextUrl.clone()
            destination.pathname = '/api/agent-content'
            destination.searchParams.set('path', path)
            return NextResponse.rewrite(destination)
        })()
        : NextResponse.next()

    response.headers.append('Link', discoveryLinks)
    response.headers.append('Vary', 'Accept, Accept-Encoding')
    return response
}

export const config = {matcher: ['/((?!api(?:/|$)|_next(?:/|$)|_vercel(?:/|$)).*)']}
