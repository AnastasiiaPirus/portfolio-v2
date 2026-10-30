import Link from 'next/link'
import type {ContentPart, TrustPageContent} from '@/lib/trust-content'

function renderParts(parts: ContentPart[]) {
    return parts.map((part, index) => part.href ? (
        part.href.startsWith('/') ? <Link key={index} className="underline" href={part.href}>{part.text}</Link> :
            <a key={index} className="underline" href={part.href}
               target={part.href.startsWith('https:') ? '_blank' : undefined}
               rel={part.href.startsWith('https:') ? 'noopener noreferrer' : undefined}>{part.text}</a>
    ) : part.text)
}

export default function TrustPage({content, subtitleClassName}: {
    content: TrustPageContent
    subtitleClassName: 'body1' | 'body2'
}) {
    return (
        <div className="container pt-16 pb-10">
            <h1 className="heading1">{content.title}</h1>
            <p className={`${subtitleClassName} mt-4`}>{content.subtitle}</p>
            {content.intro.map((paragraph, index) => (
                <p key={index} className="body2 mt-6 max-w-3xl">{renderParts(paragraph)}</p>
            ))}
            {content.sections.map((section, index) => (
                <section key={section.heading} className={`border-md p-6 md:p-8 ${index === 0 ? 'mt-8' : 'mt-6'}`}>
                    <h2 className="heading3">{section.heading}</h2>
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="body2 mt-4">{renderParts(paragraph)}</p>
                    ))}
                </section>
            ))}
        </div>
    )
}
