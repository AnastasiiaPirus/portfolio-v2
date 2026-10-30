import PostBody from '@/components/post-body'
import {getPostBySlug} from '@/lib/api'
import type {Metadata} from 'next'
import markdownToHtml from '@/lib/markdownToHtml'
import PostHeader from '@/components/post-header'
import {PERSON_ID, SITE_URL} from '@/components/structured-data'

type Props = {
    params: { slug: string; }
}

export async function generateMetadata(
    {params}: Props
): Promise<Metadata> {
    const post = getPostBySlug(params.slug, [
        'title',
        'coverImage',
        'excerpt'
    ])

    return {
        title: `${post.title} | Development with A.Pirus`,
        description: post.excerpt,
        openGraph: {
            title: `${post.title} | Development with A.Pirus`,
            description: post.excerpt,
            images: [post.coverImage]
        },
        alternates: {
            canonical: `/blog/${params.slug}`,
        }
    };
}

export default async function Post({params}: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'content',
        'coverImage',
    ])

    const content = await markdownToHtml(post.content || '')

    // Attribute every article to the same Person node the homepage declares, so the
    // writing counts toward one identity rather than an unlinked byline.
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: post.coverImage ? [`${SITE_URL}${post.coverImage}`] : undefined,
        datePublished: post.date,
        dateModified: post.date,
        author: {'@id': PERSON_ID},
        publisher: {'@id': PERSON_ID},
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/blog/${post.slug}`,
        },
    }

    return (
        <div className="container">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}}
            />
            <article className="mb-32">
                <PostHeader
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                />
                <PostBody content={content}/>
            </article>
        </div>
    )
}

type Params = {
    params: {
        slug: string
    }
}
