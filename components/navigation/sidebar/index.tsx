import {ReactElement} from "react";
import Link from "next/link";

const Sidebar = ({
                     isOpen,
                     toggle
                 }: {
    isOpen: boolean;
    toggle: () => void;
}): ReactElement => {

    return (
        <>
            <div
                className="sidebar-container fixed w-full h-full overflow-hidden justify-center"
                style={{
                    opacity: `${isOpen ? "100%" : "0.5"}`,
                    top: ` ${isOpen ? "0" : "-100%"}`,
                    backgroundColor: "#FFFEFC",
                    zIndex: "1000",
                    display: "grid",
                    paddingTop: "120px",
                    left: 0
                }}
            >
                <button className="absolute right-0 p-5" onClick={toggle}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                        />
                    </svg>
                    <span className="sr-only">Close Navigation Menu</span>
                </button>
                <div className="absolute w-full bottom-0 pb-[120px]">
                    <ul
                        className="sidebar-nav pl-0 text-center heading3 leading-relaxed"
                        onClick={toggle}
                    >
                        <li>
                            <a href="/files/anastasiia-pirus-resume.pdf" target="_blank" rel="noopener noreferrer">
                                <p className="lg-button-text my-4">Download CV</p>
                            </a>
                        </li>
                        <li>
                            <a href="/blog">
                                <p className="lg-button-text my-4">Blog</p>
                            </a>
                        </li>
                        <li>
                            <Link href="https://calendar.app.google/V2xq2ief2Xrw8DDr6" rel="noopener noreferrer"
                                  target="_blank"
                                  className="no-underline">
                                <button className="lg-button my-4"><p className="lg-button-text mt-2">
                                    Book a call</p>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
