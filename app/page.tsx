import HeroSection from "@/components/hero-section";
import Divider from "@/components/divider";
import ProjectLgTile from "@/components/project-lg-tile";
import Article from "@/components/article/article";
import PROJECTS_LG from "@/data/projects-lg-tile.json";
import PROJECTS_SM from "@/data/projects-sm-tile.json";
import ARTICLES from "@/data/articles-preview.json";
import ProjectSmTile from "@/components/project-sm-tile";

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
export type ArticleType = {
    title: string | string[];
    color: string;
    img: string;
    link: string;
    position: string;
}

export default function Home() {

    const projectsLg: Project[] = PROJECTS_LG.projects;
    const projectsSm: Project[] = PROJECTS_SM.projects;
    const articles: ArticleType[] = ARTICLES.articles;
    return (
        <>
            <HeroSection/>
            <Divider title="Projects"/>
            <div>
                {projectsLg.map((project, index) => (
                    <div key={`${index}, ${project.title}`} className="my-8">
                        <ProjectLgTile title={project.title} description={project.description} color={project.color}
                                       img={project.img} links={project.links}/>
                    </div>
                ))}
            </div>
            <div className="container grid md:grid-cols-2 lg:grid-cols-3  gap-4">
                {projectsSm.map((project, index) => (
                    <div key={`${index}, ${project.title}`} className="h-full">
                        <ProjectSmTile title={project.title} description={project.description} color={project.color}
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
        </>
    )
}
