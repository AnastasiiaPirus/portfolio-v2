import {ReactElement} from "react";
import Link from "next/link";
import Image from "next/image";


const Navbar = ({
                    toggle
                }: {
    toggle: () => void;
}): ReactElement => {

    return (
        <>
            <div className="sticky top-0 z-50 h-20 bg-[#FFFEFC]">
                <div className="flex justify-between items-center container h-full">
                    <Link href='/'>
                        <Image src="/images/logo.png" width={84} height={45} alt="A.P."/>
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center md:hidden"
                        onClick={toggle}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                            />
                        </svg>
                    </button>
                    <ul
                        className="justify-end gap-x-6 heading5 w-full hidden md:flex "
                        id="navbar-default"
                    >
                        <li><a href="/files/anastasiia-pirus-resume.pdf" target="_blank" rel="noopener noreferrer">
                            <p className="lg-button-text pe-5 ">Download CV</p></a></li>
                        <li><a href="/blog">
                            <p className="lg-button-text pe-5 ">Blog</p></a></li>
                    </ul>
                    <Link href="https://calendar.app.google/V2xq2ief2Xrw8DDr6" rel="noopener noreferrer" target="_blank"
                          className="no-underline hidden md:block">
                        <button className="hidden md:block lg-button"><p className="lg-button-text ">
                            Book a call</p>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
