import Image from "next/image";
import {Project} from "@/app/page";

function ProjectSmTile({
                           title,
                           description,
                           color,
                           img,
                           links
                       }: Project) {
    return (
        <div className="h-full">
            <div
                className="w-full h-full bg-[#fff] rounded-lg flex flex-col border-black border-solid border justify-between ">

                <div className="w-full p-4 rounded-t-lg"
                     style={{backgroundColor: color}}>
                    <h3 className="heading3 text-center ">{title}</h3>

                    <div className=" w-full aspect-[4/3] relative ">
                        <Image src={`/images/projects/${img}.png`} alt={`${title} screenshot`} fill
                               sizes="(max-width: 768px) 100vw, 50vw"
                               style={{objectFit: "contain"}}/>
                    </div>

                </div>
                <p className="body2 m-4 whitespace-pre-line ">{description}</p>


                <div className="flex flex-row justify-center gap-4 flex-wrap  my-4 ">
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
    );
}

export default ProjectSmTile;