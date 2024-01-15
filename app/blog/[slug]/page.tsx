import PostBody from '@/components/post-body'
import {getPostBySlug} from '@/lib/api'
import type {Metadata} from 'next'
import markdownToHtml from '@/lib/markdownToHtml'
import PostHeader from '@/components/post-header'

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

    return (
        <div className="container">
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
