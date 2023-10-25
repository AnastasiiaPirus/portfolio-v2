'use client'
import {useState, useEffect} from "react";


function ServicesCards() {
    const initialSlides = [
        {
            id: 1,
            text: "Creating custom websites",
            display: "block",
        },
        {
            id: 2,
            text: "Making mobile games",
            display: "none",
        },
        {
            id: 3,
            text: "Writing articles and tutorials",
            display: "none",
        },
        {
            id: 4,
            text: "Freelancing on Upwork",
            display: "none",
        },
        {
            id: 5,
            text: "Developing web-apps",
            display: "none",
        }
    ]
    const [slides, setSlides] = useState(initialSlides)
    let slideIndex = 1

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            const newSlides = [...slides]
            newSlides[i].display = "none";
            setSlides(newSlides)
        }
        slideIndex = slideIndex + 1
        console.log(slideIndex)
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        const newSlides = [...slides]
        newSlides[slideIndex - 1].display = "block";
        setSlides(newSlides)
        setTimeout(showSlides, 3000); // Change image every 2 seconds
    }

    useEffect(() => {
        showSlides();
    }, []);


    return (
        <div className="bg-red-300">
            {slides.map(slide => (
                <div key={slide.text} style={{display: slide.display}}>
                    {slide.id}
                </div>
            ))}
        </div>
    );

}

export default ServicesCards;