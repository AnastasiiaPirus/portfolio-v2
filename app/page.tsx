import HeroSection from "@/components/hero-section";
import Divider from "@/components/divider";
import Project from "@/components/project";
import Article from "@/components/article/article";
import PROJECTS from "@/data/projects.json";
import ARTICLES from "@/data/articles-preview.json";
import ContactSection from "@/components/contact-section";

export type Project = {
    title: string;
    description: string;
    color: string;
    img: string;
    links: {
        name: string;
        url: string;
    }[];
}
export type Article = {
    title: string;
    color: string;
    img: string;
    link: string;
    position: "left" | "right" | "top" | "bottom";
}

export default function Home() {

    const projects: Project[] = PROJECTS.projects;
    const articles: Article[] = ARTICLES.articles;
    return (
        <>
            <HeroSection/>
            <Divider title="Projects"/>
            <div>
                {projects.map((project, index) => (
                    <div key={`${index}, ${project.title}`} className="my-8">
                        <Project title={project.title} description={project.description} color={project.color}
                                 img={project.img} links={project.links}/>
                    </div>
                ))}
            </div>
            <Divider title="Recent Articles"/>
            <div className="container">
                <div className=" flex flex-col lg:flex-row flex-wrap w-full  ">
                    {articles.map((article, index) => (
                        <Article title={article.title} color={article.color} img={article.img}
                                 link={article.link} position={article.position} key={`${index}, ${article.title}`}/>
                    ))}
                </div>
            </div>
            <div className="bg-[#EDF2FC] pb-8">
                <Divider title="Contact Me"/>
                <ContactSection/>
            </div>

        </>
    )
}
