import Image from "next/image";

type Props = {
    title: string
    coverImage: string
    date: string
}

const PostHeader = ({title, coverImage, date}: Props) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric',})
    return (
        <>
            <h1 className="heading1 mb-12 text-center md:text-left">
                {title}
            </h1>
            <div className="hidden md:block md:mb-12">
            </div>
            <div className="mb-8 md:mb-16 sm:mx-0 w-full aspect-[16/9] relative">
                <Image src={coverImage} alt={title} fill sizes="100vw" className="object-cover"/>
            </div>
            <div className="">
                <p className="mb-6 body1">
                    {formattedDate}
                </p>
            </div>
        </>
    )
}

export default PostHeader
