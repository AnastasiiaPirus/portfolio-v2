import HeroSection from "@/components/hero-section";
import Divider from "@/components/divider";
import Project from "@/components/project";

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
        }
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
        </>
    )
}
