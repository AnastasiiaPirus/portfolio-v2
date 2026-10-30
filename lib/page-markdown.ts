import {getAllPosts, getPostBySlug, hasPost} from '@/lib/api'
import {experience, profileParagraphs, stack} from '@/data/profile'
import projects from '@/data/projects-lg-tile.json'
import smallProjects from '@/data/projects-sm-tile.json'
import {contactContent, privacyContent, type ContentPart} from '@/lib/trust-content'
import {SITE_URL} from '@/components/structured-data'

const paragraph = (parts: ContentPart[]) => parts.map(part => part.href ? `[${part.text}](${part.href})` : part.text).join('')
const pageLinks = `- [Portfolio](${SITE_URL}/)\n- [About](${SITE_URL}/about)\n- [Contact](${SITE_URL}/contact)\n- [Privacy](${SITE_URL}/privacy)\n- [Blog](${SITE_URL}/blog)\n- [Resume PDF](${SITE_URL}/files/anastasiia-pirus-resume.pdf)\n- [Sitemap](${SITE_URL}/sitemap.xml)\n- [Agent reading guide](${SITE_URL}/llms.txt)`

export const notFoundMarkdown = `# 404 — Page not found\n\nThis address does not match a published page on Anastasiia Pirus’s portfolio. Use the portfolio or About page for professional experience, the blog for articles, or the sitemap to discover current URLs.\n\n${pageLinks}\n`

function blogIndex() {
    return getAllPosts(['title', 'date', 'slug', 'excerpt']).map(post =>
        `## [${post.title}](${SITE_URL}/blog/${post.slug})\n\nPublished: ${post.date.slice(0, 10)}\n\n${post.excerpt}`,
    ).join('\n\n')
}

export function pageMarkdown(pathname: string): string | null {
    const path = pathname.replace(/\/$/, '') || '/'
    if (path === '/') {
        const projectMarkdown = [...projects.projects, ...smallProjects.projects].map(project =>
            `### ${project.title}\n\n${project.description}\n\n${project.links.map(link => `[${link.name}](${link.url})`).join(' · ')}`,
        ).join('\n\n')
        return `# Anastasiia Pirus\n\nSenior frontend engineer. AI-first products.\n\nToronto-based. Building generative UI, streaming AI responses to the interface, and multi-tenant platforms in React and Next.js. [More about me](${SITE_URL}/about).\n\n## Projects\n\n${projectMarkdown}\n\n## Recent articles\n\n${blogIndex()}\n\n## Contact\n\nEmail: [a.pirus2000@gmail.com](mailto:a.pirus2000@gmail.com). Based in Toronto, Canada. Open to senior frontend roles.\n\n## Explore\n\n${pageLinks}\n`
    }
    if (path === '/about') {
        const jobs = experience.map(job => `### ${job.role}\n\n${job.org} · ${job.period}\n\n${job.points.map(point => `- ${point}`).join('\n')}`).join('\n\n')
        const skills = stack.map(group => `### ${group.group}\n\n${group.items.join(', ')}`).join('\n\n')
        return `# Anastasiia Pirus\n\nSenior frontend engineer, building AI-first products.\n\n${profileParagraphs.join('\n\n')}\n\nBased in Toronto. Open to senior frontend roles.\n\n## Experience\n\n${jobs}\n\n## Stack\n\n${skills}\n\n## Education and writing\n\n- Meta Front-End Developer Professional Certificate\n- CS50 — Harvard University\n- M.S. Accounting & Taxation — Odesa National Economic University\n\nMy front-end tutorials on React and Next.js have been read more than 100,000 times, covering the App Router, custom loading and error states, responsive navigation and typography setup. [Read the blog](${SITE_URL}/blog).\n\n## Explore\n\n${pageLinks}\n`
    }
    if (path === '/contact' || path === '/privacy') {
        const content = path === '/contact' ? contactContent : privacyContent
        return `# ${content.title}\n\n${content.subtitle ? `${content.subtitle}\n\n` : ''}${content.intro.map(paragraph).join('\n\n')}\n\n${content.sections.map(section => `## ${section.heading}\n\n${section.paragraphs.map(paragraph).join('\n\n')}`).join('\n\n')}\n\n## Explore\n\n${pageLinks}\n`
    }
    if (path === '/blog') return `# Blog\n\nExploring the Technology, One Post at a Time. Articles by Anastasiia Pirus.\n\n${blogIndex()}\n\n${pageLinks}\n`
    const match = path.match(/^\/blog\/([a-z0-9]+(?:-[a-z0-9]+)*)$/)
    if (match && hasPost(match[1])) {
        const post = getPostBySlug(match[1], ['title', 'date', 'content'])
        return `# ${post.title}\n\nBy Anastasiia Pirus. Published: ${post.date.slice(0, 10)}\n\n${post.content.trim()}\n\n[All articles](${SITE_URL}/blog)\n`
    }
    return null
}
