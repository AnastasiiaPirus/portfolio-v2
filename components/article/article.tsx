import Image from "next/image";
import {ArticleType} from "@/app/page";

function Article({
                     title,
                     img,
                     link,
                     color,
                     position
                 }: ArticleType) {


    let size;
    if (position === "left" || position === "right") {
        size = "lg"
    } else {
        size = "sm"
    }

    const corners = {
        left: " lg:rounded-r-lg lg:rounded-tl-none rounded-t-lg ",
        right: " lg:rounded-l-lg lg:rounded-tr-none rounded-t-lg ",
        top: " rounded-t-lg ",
        bottom: " lg:rounded-b-lg lg:rounded-t-none rounded-t-lg "
    }

    return (
        <div className={`${size === 'lg' ? ' lg:w-2/3 ' : ' lg:w-1/3 '} w-full p-2 hover-scale `}>
            <a href={link}>
                <div
                    className={`${position === 'left' ? ' lg:flex-row-reverse ' : position === 'right' ? ' lg:flex-row ' : position === 'top' ? ' flex-col ' : ' lg:flex-col-reverse '}bg-white rounded-lg flex flex-col  items-stretch border-md h-full `}>
                    <div
                        className={`w-full ${size === 'lg' ? ' lg:w-1/2 ' : ' w-full h-1/2 '}  p-4  ${position === 'left' ? corners.left : position === 'right' ? corners.right : position === "top" ? corners.top : corners.bottom} `}
                        style={{backgroundColor: color}}>
                        <div className=" w-full relative ">
                            {size === "lg" ? <h2 className="heading2" style={{whiteSpace: "pre-line"}}>{title}</h2> :
                                <h3 className="heading3">{`${title}`}</h3>}
                        </div>
                    </div>
                    <div
                        className={`w-full ${size === 'lg' ? ' lg:w-1/2 lg:p-16 p-8 ' : ' w-full p-8 '}   flex flex-col justify-between aspect-[2/1]  ${size === 'lg' ? ' lg:aspect-square h-auto ' : ' lg:aspect-[2/1] h-1/2 '} relative`}>
                        <div
                            className={`w-full h-auto  aspect-[2/1] ${size === 'lg' ? 'lg:aspect-square' : 'lg:aspect-[2/1]'} relative`}>
                            <Image src={`/images/articles/${img}`} alt={`${title} screenshot`} fill
                                   sizes="(max-width: 1024px) 100vw, 33vw"
                                   style={{objectFit: "cover"}}/>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Article;