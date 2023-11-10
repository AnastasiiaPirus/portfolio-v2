import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import {getAllPosts} from '@/lib/api'

export default async function BlogPage() {

    const allPosts = await getAllPosts([
        'title',
        'date',
        'slug',
        'coverImage',
        'excerpt',
    ])
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <>
            <div className="container">
                <div className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
                    <h1 className="heading1 md:pr-8">Blog.</h1>
                    <p className="body1">Exploring the Technology, One Post at a Time </p>
                </div>
                {heroPost && (
                    <HeroPost
                        title={heroPost.title}
                        coverImage={heroPost.coverImage}
                        date={heroPost.date}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts}/>}
            </div>
        </>
    )
}
