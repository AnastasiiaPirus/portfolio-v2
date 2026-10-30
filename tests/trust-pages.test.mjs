import assert from 'node:assert/strict'
import test from 'node:test'

const base = process.env.BASE_URL || 'http://127.0.0.1:3100'

async function readHtml(path) {
    const response = await fetch(new URL(path, base), {headers: {Accept: 'text/html'}})
    assert.equal(response.status, 200, `${path} must be a public page`)
    assert.match(response.headers.get('content-type') || '', /text\/html/)
    return response.text()
}

function mainContent(html) {
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)
    assert.ok(main, 'Trust pages expose their own main content')
    return main[1].replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

for (const path of ['/contact', '/privacy']) {
    test(`${path} provides substantial server-rendered content and a canonical URL`, async () => {
        const html = await readHtml(path)
        assert.ok(mainContent(html).length >= 500, `${path} needs useful text without JavaScript`)
        assert.match(html, new RegExp(`<link(?=[^>]*rel="canonical")(?=[^>]*href="https://www\\.pirus\\.dev${path}")[^>]*>`))
        assert.ok(/<h1\b[^>]*>[^<]+<\/h1>/.test(html), 'The page has an accessible title')
    })
}

test('Contact gives people a direct email and paths to verify professional experience', async () => {
    const html = await readHtml('/contact')
    assert.match(html, /href="mailto:a\.pirus2000@gmail\.com"/)
    assert.match(html, /href="\/about"/)
    assert.match(html, /href="\/files\/anastasiia-pirus-resume\.pdf"/)
})

test('Privacy identifies the providers handling submissions and website analytics', async () => {
    const html = await readHtml('/privacy')
    assert.match(html, /href="https:\/\/formspree\.io\/legal\/privacy-policy\/"/)
    assert.match(html, /href="https:\/\/vercel\.com\/docs\/analytics\/privacy-policy"/)
    assert.match(html, /href="mailto:a\.pirus2000@gmail\.com"/)
})

test('The personal identity exposes a usable contact point and a verified city-level address', async () => {
    const html = await readHtml('/')
    const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    const nodes = scripts.flatMap(([, json]) => {
        const parsed = JSON.parse(json)
        return parsed['@graph'] || [parsed]
    })
    const person = nodes.find(node => node['@type'] === 'Person' && node.name === 'Anastasiia Pirus')
    assert.ok(person, 'The portfolio identifies its owner as a Person')
    assert.equal(person.url, 'https://www.pirus.dev')
    assert.equal(person.address['@type'], 'PostalAddress')
    assert.equal(person.address.addressLocality, 'Toronto')
    assert.equal(person.address.addressCountry, 'CA')
    const points = Array.isArray(person.contactPoint) ? person.contactPoint : [person.contactPoint]
    assert.ok(points.some(point => point?.['@type'] === 'ContactPoint'
        && point.email?.replace(/^mailto:/, '') === 'a.pirus2000@gmail.com'
        && point.contactType?.length > 0), 'A contact point identifies both the address and its purpose')
})

test('llms.txt gives agents specific use cases and links to contact and privacy details', async () => {
    const response = await fetch(new URL('/llms.txt', base))
    assert.equal(response.status, 200)
    const content = await response.text()
    assert.match(content, /^# Anastasiia Pirus\s/m)
    assert.match(content, /^## When to use this site\s/m)
    assert.match(content, /https:\/\/www\.pirus\.dev\/contact/)
    assert.match(content, /https:\/\/www\.pirus\.dev\/privacy/)
    assert.match(content, /explicit approval/i)
})
