import type {Metadata} from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Divider from '@/components/divider'
import {experience, profileParagraphs, stack} from '@/data/profile'

export const metadata: Metadata = {
    title: 'About Anastasiia Pirus — Senior Frontend Engineer, AI Products',
    description:
        'Senior frontend engineer in Toronto building AI-first products: generative UI, streaming AI responses to UI, ' +
        'multi-tenant platforms. Over four years shipping React and React Native to production. ' +
        'Former KPMG financial statement auditor.',
    alternates: {canonical: '/about'},
}

// Keep the profile, skills and experience in sync with /public/files/anastasiia-pirus-resume.pdf.

export default function AboutPage() {
    return (
        <>
            <div className="w-full bg-[#FFFEFC]">
                <div className="container pt-16 pb-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-2/3">
                            <h1 className="heading1">Anastasiia Pirus</h1>
                            <p className="body1 mt-2">
                                Senior frontend engineer, building AI-first products.
                            </p>
                            {profileParagraphs.map((paragraph, index) => (
                                <p key={paragraph} className={`body2 ${index === 0 ? 'mt-6' : 'mt-4'}`}>
                                    {paragraph}
                                </p>
                            ))}
                            <p className="body2 mt-4">
                                Based in Toronto. Open to senior frontend roles.{' '}
                                <a className="underline" href="mailto:a.pirus2000@gmail.com">Email me</a>{' '}or{' '}
                                <a className="underline" href="https://calendar.app.google/V2xq2ief2Xrw8DDr6"
                                   target="_blank" rel="noopener noreferrer">book a call</a>.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3">
                            <div className="relative w-[260px] h-[260px] max-w-full mx-auto">
                                <div className="absolute inset-0 bg-[#AFECFF] rounded-full border border-black border-2"/>
                                <Image src="/images/headshot-grey.png"
                                       alt="Portrait of Anastasiia Pirus, senior frontend engineer in Toronto"
                                       className="object-contain rounded-full" fill/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Divider title="Experience"/>
            <div className="container">
                {experience.map((job) => (
                    <section key={`${job.org}-${job.period}`} className="border-md p-6 md:p-8 my-6">
                        <h2 className="heading3">{job.role}</h2>
                        <p className="body2 mt-1" style={{fontWeight: 400}}>
                            {job.org} · <time>{job.period}</time>
                        </p>
                        <ul className="mt-4 list-disc ps-6">
                            {job.points.map((point) => (
                                <li key={point} className="body2 mt-2">{point}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>

            <Divider title="Stack"/>
            <div className="container grid md:grid-cols-2 gap-4">
                {stack.map((section) => (
                    <section key={section.group} className="border-md p-6">
                        <h2 className="heading3">{section.group}</h2>
                        <ul className="mt-3 flex flex-row flex-wrap gap-x-3 gap-y-1">
                            {section.items.map((item) => (
                                <li key={item} className="body2">{item}</li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>

            <Divider title="Education & Writing"/>
            <div className="container grid md:grid-cols-2 gap-4 mb-8">
                <section className="border-md p-6">
                    <h2 className="heading3">Education</h2>
                    <ul className="mt-3 list-disc ps-6">
                        <li className="body2 mt-2">Meta Front-End Developer Professional Certificate</li>
                        <li className="body2 mt-2">CS50 — Harvard University</li>
                        <li className="body2 mt-2">M.S. Accounting &amp; Taxation — Odesa National Economic University</li>
                    </ul>
                </section>
                <section className="border-md p-6">
                    <h2 className="heading3">Writing</h2>
                    <p className="body2 mt-3">
                        My front-end tutorials on React and Next.js have been read more than 100,000 times,
                        covering the App Router, custom loading and error states, responsive navigation and
                        typography setup.
                    </p>
                    <p className="body2 mt-4">
                        <Link className="underline" href="/blog">Read the blog</Link>
                    </p>
                </section>
            </div>
        </>
    )
}
