import Link from 'next/link'
import Image from "next/image";

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    slug: string
}

const HeroPost = ({
                      title,
                      coverImage,
                      date,
                      excerpt,
                      slug,
                  }: Props) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric',})

    return (
        <>
            <div className="mb-8 md:mb-16">
                <div className="w-full aspect-[16/9] relative">
                    <Image src={coverImage} alt={title} fill sizes="100vw" className="object-cover"/>
                </div>

            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                    <h2 className="mb-4 heading2">
                        <Link
                            as={`/blog/${slug}`}
                            href="/blog/[slug]"
                            className="hover:underline"
                        >
                            {title}
                        </Link>
                    </h2>
                    <div className="mb-4 md:mb-0 body2">
                        {formattedDate}
                    </div>
                </div>
                <div>
                    <p className="body2 mb-4">{excerpt}</p>
                </div>
            </div>
        </>
    )
}

export default HeroPost
