import Image from "next/image";
import {Project} from "@/app/page";

function ProjectLgTile({
                           title,
                           description,
                           color,
                           img,
                           links
                       }: Project) {
    return (
        <div className="container">
            <div
                className="w-full bg-[#fffefc] rounded-lg flex flex-col md:flex-row items-stretch border-black border-solid border ">
                <div className="w-full md:w-1/2 p-4 md:rounded-l-lg rounded-t-lg md:rounded-tr-none "
                     style={{backgroundColor: color}}>
                    <div className=" w-full aspect-[4/3] relative ">
                        <Image src={`/images/projects/${img}.png`} alt={`${title} screenshot`} fill
                               sizes="(max-width: 768px) 100vw, 50vw"
                               style={{objectFit: "contain"}}/>
                    </div>

                </div>
                <div className="w-full md:w-1/2 sm:p-8 p-4 lg:p-16 flex flex-col justify-between  h-auto">

                    <h3 className="heading3">{title}</h3>
                    <p className="body2 mt-4 whitespace-pre-line ">{description}</p>


                    <div className="flex flex-row justify-start gap-4 flex-wrap  my-4 ">
                        {links.map((link, index) => (
                            <a key={`${index}, ${link.name}`}
                               target="_blank" rel="noopener noreferrer"
                               href={link.url}>
                                <div className="md-button md-button-text">
                                    {link.name}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectLgTile;