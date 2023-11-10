import Link from 'next/link'
import Image from "next/image";

type Props = {
    title: string
    coverImage: string
    date: string
    excerpt: string
    slug: string
}

const PostPreview = ({
                         title,
                         coverImage,
                         date,
                         excerpt,
                         slug,
                     }: Props) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric',})
    return (
        <div>
            <div className="mb-5 w-full aspect-[16/9] relative ">
                <Image src={coverImage} alt={title} fill style={{objectFit: "cover"}}
                       sizes="(max-width: 768px) 100vw, 50vw"/>
            </div>
            <h3 className=" mb-3 heading3 ">
                <Link
                    as={`/blog/${slug}`}
                    href="/blog/[slug]"
                    className="hover:underline"
                >
                    {title}
                </Link>
            </h3>
            <div className="body2 mb-4">
                {formattedDate}
            </div>
            <p className="body2 mb-4">{excerpt}</p>
        </div>
    )
}

export default PostPreview
