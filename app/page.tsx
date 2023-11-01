import HeroSection from "@/components/hero-section";
import Divider from "@/components/divider";
import Project from "@/components/project";
import Article from "@/components/article/article";

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

    const projects: Project[] = [
        {
            title: "Timer App",
            description: "Gamified productivity timer. Build with Python (Flask), HTML5, CSS, Bootstrap, JS, and SQLite. User can choose a time, start, pause and stop the timer. Collect new animals on your field by reaching new milestones.",
            color: "#FFE9AF",
            img: "TimerApp",
            links: [
                {name: "Github", url: "https://github.com/AnastasiiaPirus/Timer-App"},
                {name: "Visit Page", url: "https://apirus.pythonanywhere.com/"},
                {name: "Demo", url: "https://youtu.be/5miYYUGP3cc"}
            ]
        },
        {
            title: "Timer App",
            description: "Gamified productivity timer. Build with Python (Flask), HTML5, CSS, Bootstrap, JS, and SQLite. User can choose a time, start, pause and stop the timer. Collect new animals on your field by reaching new milestones.",
            color: "#FFE9AF",
            img: "TimerApp",
            links: [
                {name: "Github", url: "https://github.com/AnastasiiaPirus/Timer-App"},
                {name: "Visit Page", url: "https://apirus.pythonanywhere.com/"},
                {name: "Demo", url: "https://youtu.be/5miYYUGP3cc"}
            ]
        }
    ]
    const articles: Article[] = [
        {
            title: "The Ultimate Arsenal of Tools for Work and Study of Front-End Developer",
            color: "#B5C8AD",
            img: "1.png",
            link: "https://medium.com/@a.pirus/the-ultimate-arsenal-of-tools-for-work-and-study-of-front-end-developer-30f02887d3df",
            position: "right"
        },
        {
            title: "Custom Loading and 404 Pages in Next.js 13 Tutorial",
            color: "#FDE0EE",
            img: "2.png",
            link: "https://medium.com/@a.pirus/custom-loading-and-404-pages-in-next-js-13-tutorial-f864dd0f8801",
            position: "top"
        },
        {
            title: "How to create a responsive Navigation bar in Next.js 13",
            color: "#66C79A",
            img: "3.jpg",
            link: "https://medium.com/@a.pirus/how-to-create-a-responsive-navigation-bar-in-next-js-13-e5540789a017",
            position: "bottom"
        },
        {
            title: "Check out more articles here! \n" +
                "\n" +
                "It’s FREE!",
            color: "#E1AD02",
            img: "4.jpg",
            link: "https://medium.com/@a.pirus",
            position: "left"
        },
    ]


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
            <div className="container mx-auto ">
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
