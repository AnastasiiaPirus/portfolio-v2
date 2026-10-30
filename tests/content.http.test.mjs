import assert from 'node:assert/strict'
import test from 'node:test'

const base = process.env.BASE_URL || 'http://127.0.0.1:3100'

test('The homepage exposes meaningful content without JavaScript and keeps markup overhead below 95 percent', async () => {
    const response = await fetch(new URL('/', base), {headers: {Accept: 'text/html'}})
    assert.equal(response.status, 200)
    const html = await response.text()
    const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    const text = markup
        .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, '')
        .replace(/<[^>]*>/g, ' ')
        .replace(/&(?:amp|lt|gt|quot|#x27|#39|nbsp);/gi, ' ')
        .replace(/\s+/g, ' ').trim()

    assert.match(html, /<h1\b[^>]*>Anastasiia Pirus<\/h1>/)
    assert.ok(text.length >= 500, `Only ${text.length} characters are available without JavaScript`)
    const contentRatio = text.length / markup.length
    assert.ok(contentRatio >= 0.05, `Meaningful text is ${(contentRatio * 100).toFixed(2)}% of HTML excluding scripts and styles; expected at least 5%`)
})

test('Service drawings load as decorative SVG images with their stroke animation', async () => {
    const response = await fetch(new URL('/', base), {headers: {Accept: 'text/html'}})
    const html = await response.text()
    const images = [...html.matchAll(/<img\b[^>]*src="(\/images\/services\/[^"<>]+\.svg)"[^>]*>/g)]
    assert.ok(images.length > 0, 'Service drawings are served separately from the document markup')
    for (const [tag, path] of images) {
        assert.match(tag, /alt=""/)
        assert.match(tag, /aria-hidden="true"/)
        const asset = await fetch(new URL(path, base))
        assert.equal(asset.status, 200, `Drawing is available: ${path}`)
        assert.match(asset.headers.get('content-type') || '', /image\/svg\+xml/)
        const svg = await asset.text()
        assert.match(svg, /<svg\b[^>]*viewBox="[^"]+"/)
        assert.match(svg, /<path\b[^>]*d="[\s\S]+?"/)
        assert.match(svg, /animation:dash 1\.5s linear/)
        assert.match(svg, /@keyframes dash/)
    }
})
