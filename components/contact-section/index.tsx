import ContactInfo from "@/components/contact-section/contact-info";
import ContactForm from "@/components/contact-section/contact-form";

function ContactSection() {
    return (
        <div className="container mt-[-32px]">
            <div className="w-full bg-white rounded-lg border border-black p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3 w-full ">
                        <ContactInfo/>
                    </div>
                    <div className="lg:w-2/3 w-full">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;