import test from 'node:test'
import assert from 'node:assert/strict'

const base = process.env.BASE_URL || 'http://127.0.0.1:3100'
const local = ['localhost', '127.0.0.1', '[::1]'].includes(new URL(base).hostname)

test('Vercel keeps both negotiated representations separate in shared caches', {
    skip: local ? 'Vercel response transforms run at the deployment edge; verify with BASE_URL set to the deployment URL' : false,
}, async () => {
    for (const path of ['/', '/about', '/blog', '/contact', '/privacy']) {
        for (const accept of ['text/html', 'text/markdown']) {
            const response = await fetch(new URL(path, base), {headers: {Accept: accept}})
            assert.equal(response.status, 200, `${path} ${accept}`)
            assert.match(response.headers.get('content-type') || '', new RegExp(`^${accept}`))
            const vary = (response.headers.get('vary') || '').toLowerCase().split(',').map(s => s.trim())
            assert.ok(vary.includes('accept'), `${path} ${accept}: missing Vary: Accept`)
            assert.ok(vary.includes('accept-encoding'), `${path} ${accept}: missing Vary: Accept-Encoding`)
            if (accept === 'text/html') assert.ok(vary.includes('rsc'), 'Preserve Next.js RSC cache variation')
        }
    }
})
