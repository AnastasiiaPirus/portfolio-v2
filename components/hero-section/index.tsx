import ServicesCards from "@/components/services-cards";
import Image from "next/image";

function HeroSection() {

    return (
        <>
            <div className="w-full bg-[#FFFEFC] overflow-x-hidden">
                <div className="container pt-16 pb-10">
                    <div className="flex flex-col md:flex-row md:min-h-[500px] gap-8">
                        <div className="w-full md:w-1/2 flex flex-col justify-between gap-6">
                            <div>
                                <h1 className="heading1">Anastasiia Pirus</h1>
                                <p className="body1">Senior frontend engineer. AI-first products.</p>
                                <p className="body2 mt-2">
                                    Toronto-based. Building generative UI, streaming AI responses to the
                                    interface, and multi-tenant platforms in React and Next.js.{' '}
                                    <a href="/about" className="underline">More about me</a>.
                                </p>
                            </div>
                            <ServicesCards/>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative w-[500px] h-[500px] max-w-full">
                                <div
                                    className="absolute top-36 -right-2 sm:right-2 w-[150px] h-[150px] bg-[#AFECFF] rounded-full border border-black border-2"/>
                                <div
                                    className="absolute bottom-0 md:right-[50px] w-[400px] h-[400px] max-w-full mx-auto bg-[#FFAFAF] rounded-full border border-black border-2"/>
                                <div
                                    className="absolute top-20 left-8  w-[70px] h-[70px] bg-[#FFE9AF] rounded-full border border-black border-2"/>
                                <div className="absolute w-[400px] h-[500px] md:right-[50px] max-w-full">
                                    <Image src="/images/headshot-grey.png" alt="Anastasiia Pirus"
                                           className='object-contain max-h-full rounded-full bottom-0'
                                           fill/></div>
                                <div
                                    className="absolute -bottom-4 left-8 left-[50px] w-[100px] h-[100px] bg-[#DCFFAF] rounded-full border border-black border-2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;