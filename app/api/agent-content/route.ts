import {pageMarkdown, notFoundMarkdown} from '@/lib/page-markdown'

export function GET(request: Request) {
    const path = new URL(request.url).searchParams.get('path') || '/'
    const content = pageMarkdown(path)
    return new Response(content ?? notFoundMarkdown, {
        status: content === null ? 404 : 200,
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            'Vary': 'Accept, Accept-Encoding',
            'Cache-Control': 'public, max-age=0, must-revalidate',
        },
    })
}

export function HEAD(request: Request) {
    const response = GET(request)
    return new Response(null, {status: response.status, headers: response.headers})
}
