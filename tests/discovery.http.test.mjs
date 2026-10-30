import test from 'node:test'
import assert from 'node:assert/strict'

const base = process.env.BASE_URL || 'http://127.0.0.1:3100'

test('homepage GET and HEAD advertise existing discovery resources for HTML and Markdown', async () => {
    for (const method of ['GET', 'HEAD']) {
        for (const accept of ['text/html', 'text/markdown']) {
            const response = await fetch(new URL('/', base), {method, headers: {Accept: accept}})
            assert.equal(response.status, 200)
            const links = response.headers.get('link') || ''
            assert.match(links, /<\/llms\.txt>;\s*rel="describedby";\s*type="text\/plain"/)
            assert.match(links, /<\/about>;\s*rel="author";\s*type="text\/html"/)
            assert.match(links, /<\/privacy>;\s*rel="privacy-policy";\s*type="text\/html"/)
        }
    }
    const guide = await fetch(new URL('/llms.txt', base))
    assert.equal(guide.status, 200)
    assert.match(guide.headers.get('content-type') || '', /^text\/plain/)
    assert.match(await guide.text(), /^# Anastasiia Pirus\s/m)
})

test('absent well-known resources return 404 instead of page-negotiation errors', async () => {
    for (const [path, accept] of [
        ['/.well-known', 'application/json'],
        ['/.well-known/api-catalog', 'application/linkset+json'],
        ['/.well-known/ai-catalog.json', 'application/json'],
        ['/.well-known/openid-configuration', 'application/json'],
        ['/.well-known/mcp/server-card.json', 'text/markdown'],
    ]) {
        for (const method of ['GET', 'HEAD']) {
            const response = await fetch(new URL(path, base), {method, headers: {Accept: accept}})
            assert.equal(response.status, 404, `${method} ${path} (${accept})`)
            const vary = (response.headers.get('vary') || '').toLowerCase().split(',').map(value => value.trim())
            assert.ok(!vary.includes('accept'), `${path} bypasses document cache variation`)
        }
    }
})

test('the well-known exemption does not swallow similarly named document paths', async () => {
    const response = await fetch(new URL('/.well-known-other', base), {headers: {Accept: 'application/json'}})
    assert.equal(response.status, 406)
})
