import assert from 'node:assert/strict'
import test from 'node:test'

const base = process.env.BASE_URL || 'http://127.0.0.1:3100'
const slug = 'how-i-stopped-my-doomscrolling-forever'

test('blog navigation and async post rendering remain available as HTML', async () => {
    const index = await fetch(`${base}/blog`, {headers: {Accept: 'text/html'}})
    assert.equal(index.status, 200)
    const indexHtml = await index.text()
    assert.match(indexHtml, new RegExp(`href="/blog/${slug}"`))
    assert.match(indexHtml, /How I stopped my doomscrolling forever/)

    const post = await fetch(`${base}/blog/${slug}`, {headers: {Accept: 'text/html'}})
    assert.equal(post.status, 200)
    const postHtml = await post.text()
    assert.match(postHtml, /<h1[^>]*>How I stopped my doomscrolling forever<\/h1>/)
    assert.match(postHtml, /Like most people my age/)
    assert.match(postHtml, new RegExp(`rel="canonical"[^>]*href="https://www.pirus.dev/blog/${slug}"`))
})

test('a missing blog post returns a real HTTP 404', async () => {
    const response = await fetch(`${base}/blog/this-post-does-not-exist`, {headers: {Accept: 'text/html'}})
    assert.equal(response.status, 404)
})

test('local image optimization still returns an image', async () => {
    const source = '/images/blog/how-i-stopped-my-doomscrolling-forever/cover.jpg'
    const response = await fetch(`${base}/_next/image?url=${encodeURIComponent(source)}&w=640&q=75`)
    assert.equal(response.status, 200)
    assert.match(response.headers.get('content-type'), /^image\//)
    assert.ok((await response.arrayBuffer()).byteLength > 0)
})
