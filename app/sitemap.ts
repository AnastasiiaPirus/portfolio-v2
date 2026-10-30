import type {MetadataRoute} from 'next'
import {getAllPosts} from '@/lib/api'

const BASE_URL = 'https://www.pirus.dev'

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts(['slug', 'date'])

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        ...['contact', 'privacy'].map((slug) => ({
            url: `${BASE_URL}/${slug}`,
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        })),
        {
            url: `${BASE_URL}/blog`,
            lastModified: posts[0]?.date ? new Date(posts[0].date) : new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...posts.map((post) => ({
            url: `${BASE_URL}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'yearly' as const,
            priority: 0.6,
        })),
    ]
}
