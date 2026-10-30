'use client'
import {useState, useEffect} from "react";
import ServiceCard from "@/components/services-cards/service-card";
import Url from "@/components/svg/Url";
import Mobile from "@/components/svg/Mobile";
import Writing from "@/components/svg/Writing";
import Freelancing from "@/components/svg/Freelancing";
import Developing from "@/components/svg/Developing";


function ServicesCards() {
    const initialSlides = [
        {
            id: 1,
            text: "Building AI-first products",
            display: "block",
            icon: <Developing/>
        },
        {
            id: 2,
            text: "Shipping React & Next.js apps",
            display: "none",
            icon: <Url/>
        },
        {
            id: 3,
            text: "Taking products from idea to launch",
            display: "none",
            icon: <Freelancing/>
        },
        {
            id: 4,
            text: "Turning complex data into clear UI",
            display: "none",
            icon: <Mobile/>
        },
        {
            id: 5,
            text: "Making the web fast",
            display: "none",
            icon: <Writing/>
        }
    ]
    const [slides, setSlides] = useState(initialSlides)
    const [slideIndex, setSlideIndex] = useState(1)

    // start showing slides
    // useEffect(() => {
    //     showSlides();
    // }, []);

    //update slide every 3 seconds
    useEffect(() => {
        setTimeout(showSlides, 3000);
    }, [slideIndex])


    function showSlides() {
        // console.log("call showSlides")
        for (let i = 0; i < slides.length; i++) {
            const newSlides = [...slides]
            newSlides[i].display = "none";
            setSlides(newSlides)
        }
        const newSlides = [...slides]
        newSlides[slideIndex - 1].display = "block";
        setSlides(newSlides)
        const newSlideIndex = slideIndex + 1
        if (newSlideIndex > slides.length) {
            setSlideIndex(1)
        } else {
            setSlideIndex(newSlideIndex)
        }
    }


    return (
        <div className="max-w-full w-[500px]">
            {slides.map((slide, index) => (
                <div key={slide.text}>
                    <ServiceCard text={slide.text} display={slide.display} index={index} icon={slide.icon}/>
                </div>
            ))}
        </div>
    );

}

export default ServicesCards;