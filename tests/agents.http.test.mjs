import test from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync, readdirSync} from 'node:fs'
import matter from 'gray-matter'

const base = process.env.BASE_URL || 'http://127.0.0.1:3100'
const local = ['localhost', '127.0.0.1', '[::1]'].includes(new URL(base).hostname)
const request = (path, accept, options = {}) => fetch(`${base}${path}`, {
    ...options,
    headers: {...(accept ? {accept} : {}), ...options.headers},
})
const vary = (response) => response.headers.get('vary')?.toLowerCase().split(',').map(s => s.trim()) || []
const text = html => html.replace(/<(script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()

test('homepage delivers meaningful semantic content without JavaScript', async () => {
    const response = await request('/', 'text/html')
    const html = await response.text()
    assert.equal(response.status, 200)
    assert.match(html, /<main\b/)
    assert.match(html, /<h1\b[^>]*>Anastasiia Pirus<\/h1>/)
    const prose = text(html)
    assert.ok(prose.length >= 500)
    assert.match(prose, /Envoy Studio/)
    assert.match(prose, /How I stopped my doomscrolling forever/)
})

test('homepage metadata identifies the personal site without JavaScript', async () => {
    const html = await (await request('/', 'text/html')).text()
    assert.match(html, /<html\b[^>]*lang="en"/)
    assert.match(html, /<link(?=[^>]*rel="canonical")(?=[^>]*href="https:\/\/www\.pirus\.dev\/?")[^>]*>/)
    assert.match(html, /<meta(?=[^>]*property="og:type")(?=[^>]*content="profile")[^>]*>/)
    assert.match(html, /<meta(?=[^>]*property="og:image")(?=[^>]*content="https:\/\/www\.pirus\.dev\/images\/open-graph\.png")[^>]*>/)
})

for (const [accept, type] of [
    ['text/markdown', 'markdown'],
    ['text/html', 'html'],
    ['*/*', 'html'],
    ['text/*', 'html'],
    ['text/markdown, text/html', 'markdown'],
    ['text/html, text/markdown', 'html'],
    ['text/markdown;q=0.2, text/html;q=0.9', 'html'],
    ['text/html;q=0.2, text/markdown;q=0.9', 'markdown'],
    ['text/markdown;q=0, */*;q=1', 'html'],
    ['text/html;q=0, */*;q=1', 'markdown'],
    ['text/markdown; charset=utf-8', 'markdown'],
]) {
    test(`negotiates ${accept} as ${type}`, async () => {
        const response = await request('/', accept)
        assert.equal(response.status, 200)
        assert.match(response.headers.get('content-type') || '', new RegExp(`^text/${type}`))
        // Next overwrites HTML Vary headers; vercel.json appends them at the deployment edge.
        if (type === 'markdown' || !local) assert.ok(vary(response).includes('accept'))
        const body = await response.text()
        assert.match(body, /Anastasiia Pirus/)
        if (type === 'markdown') {
            assert.match(body, /^# Anastasiia Pirus/m)
            assert.doesNotMatch(body, /<!DOCTYPE|<script|<html/i)
        }
    })
}

for (const accept of ['application/json', 'text/html;q=0,text/markdown;q=0', 'text/markdown;variant=unknown']) {
    test(`rejects unsupported representations: ${accept}`, async () => {
        const response = await request('/', accept)
        assert.equal(response.status, 406)
        assert.ok(vary(response).includes('accept'))
        assert.match(await response.text(), /text\/html.*text\/markdown/s)
    })
}

test('markdown is available for every published page and article', async () => {
    const sitemap = await (await request('/sitemap.xml')).text()
    const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => new URL(url).pathname)
    assert.ok(paths.length > 5)
    for (const path of paths) {
        const response = await request(path, 'text/markdown')
        assert.equal(response.status, 200, path)
        assert.match(response.headers.get('content-type') || '', /^text\/markdown/, path)
        assert.ok(vary(response).includes('accept'), path)
        assert.ok((await response.text()).trim().length > 100, path)
    }
})

test('markdown preserves the requested page and complete article content', async () => {
    for (const [path, expected] of [
        ['/about', ['# Anastasiia Pirus', 'S3 presigned URLs', 'Financial Statement Auditor']],
        ['/contact', ['# Contact Anastasiia Pirus', 'Jobs and collaboration', 'mailto:a.pirus2000@gmail.com']],
        ['/privacy', ['# Privacy information', 'Formspree', 'application logs']],
        ['/blog', ['# Blog', 'How I stopped my doomscrolling forever', '/blog/lets-reverse-our-brain-rot']],
    ]) {
        const body = await (await request(path, 'text/markdown')).text()
        for (const phrase of expected) assert.ok(body.includes(phrase), `${path} is missing ${phrase}`)
    }
    for (const file of readdirSync('_posts').filter(file => file.endsWith('.md'))) {
        const source = matter(readFileSync(`_posts/${file}`, 'utf8'))
        const path = `/blog/${file.slice(0, -3)}`
        const body = await (await request(path, 'text/markdown')).text()
        assert.ok(body.startsWith(`# ${source.data.title}\n`), `${path} has the article title`)
        assert.ok(body.includes(source.content.trim()), `${path} preserves the complete published article`)
    }
})

test('unknown URLs return a markdown recovery document with HTTP 404', async () => {
    for (const path of ['/__agent-test-missing', '/blog/__agent-test-missing']) {
        const response = await request(path, 'text/markdown')
        assert.equal(response.status, 404, path)
        assert.match(response.headers.get('content-type') || '', /^text\/markdown/, path)
        const body = await response.text()
        assert.match(body, /^# .*404/m)
        assert.match(body, /\]\([^)]*\/sitemap\.xml\)/)
        assert.match(body, /\]\([^)]*\/llms\.txt\)/)
    }
})

test('HTML 404s keep HTTP 404 and useful recovery links', async () => {
    const response = await request('/__agent-test-missing', 'text/html')
    assert.equal(response.status, 404)
    const body = await response.text()
    assert.match(body, /href="\/sitemap.xml"/)
    assert.match(body, /href="\/llms.txt"/)
})

test('HEAD negotiates the same markdown headers without returning a body', async () => {
    const response = await request('/', 'text/markdown', {method: 'HEAD'})
    assert.equal(response.status, 200)
    assert.match(response.headers.get('content-type') || '', /^text\/markdown/)
    assert.ok(vary(response).includes('accept'))
    assert.equal(await response.text(), '')
})

test('the markdown endpoint cannot read arbitrary filesystem paths', async () => {
    for (const path of ['/blog/../../package.json', '/blog/../tools-for-work', '/package.json']) {
        const response = await request(`/api/agent-content?path=${encodeURIComponent(path)}`, 'text/markdown')
        assert.equal(response.status, 404)
        assert.match(response.headers.get('content-type') || '', /^text\/markdown/)
        assert.match(await response.text(), /^# .*404/m)
    }
})

test('assets, machine files and API method handling are preserved', async () => {
    for (const path of ['/files/anastasiia-pirus-resume.pdf', '/images/headshot-grey.png', '/robots.txt', '/sitemap.xml', '/llms.txt']) {
        const response = await request(path, 'text/markdown')
        assert.equal(response.status, 200, path)
        assert.doesNotMatch(response.headers.get('content-type') || '', /^text\/markdown/, path)
    }
    assert.equal((await request('/api/contact-form', 'application/json')).status, 405)
})

test('RSC navigation requests bypass document negotiation', async () => {
    const response = await request('/about?_rsc=test', 'text/x-component', {headers: {RSC: '1'}})
    assert.equal(response.status, 200)
    assert.match(response.headers.get('content-type') || '', /^text\/x-component/)
})
