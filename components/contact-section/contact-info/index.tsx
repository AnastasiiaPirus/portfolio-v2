'use client'
import Map from "@/components/svg/Map";
import Email from "@/components/svg/Email";
import GitHub from "@/components/svg/GitHub";
import LinkedIn from "@/components/svg/LinkedIn";
import mailgo from "mailgo";
import {useEffect} from "react";


function ContactInfo() {
    useEffect(() => {
        mailgo();
    }, []);
    return (
        <div className="w-full flex flex-col justify-around">
            <div className="flex flex-row gap-4 md:gap-8 items-center">
                <Map width={70} height={70} color="#000"/>
                <p className="body2" style={{fontWeight: 400}}>Toronto, Canada</p>
            </div>
            <div className="flex flex-row gap-4 md:gap-8 items-center">
                <Email width={70} height={70} color="#000"/>
                <a href="mailto:a.pirus2000@gmail.com"
                   className="body2 underline"
                   style={{fontWeight: 400}}>a.pirus2000@gmail.com</a>
            </div>
            <div className="flex flex-row gap-4 md:gap-8 items-center">
                <GitHub width={70} height={70} color="#000"/>
                <a href="https://github.com/AnastasiiaPirus" rel="noopener noreferrer" target="_blank"
                   className="body2 underline" style={{fontWeight: 400}}>GitHub</a>
            </div>
            <div className="flex flex-row gap-4 md:gap-8 items-center">
                <LinkedIn width={70} height={70} color="#000"/>
                <a href="https://www.linkedin.com/in/anastasia-pirus" className="body2 underline"
                   style={{fontWeight: 400}}>LinkedIn</a>
            </div>
        </div>
    );
}

export default ContactInfo;