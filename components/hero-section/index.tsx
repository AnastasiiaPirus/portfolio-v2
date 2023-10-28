import ServicesCards from "@/components/services-cards";
import Image from "next/image";

function HeroSection() {
  
    return (
        <>
            <div className="w-full bg-[#FFFEFC]">
                <div className="container pt-16 pb-10">
                    <div className="flex flex-col md:flex-row md:h-[500px] gap-8">
                        <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
                            <div>
                                <h1 className="heading1">Anastasiia Pirus</h1>
                                <p className="body1">I’m a web developer.</p>
                            </div>
                            <ServicesCards/>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Image src="/images/hero.jpg" alt="hero" width={500} height={500}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;