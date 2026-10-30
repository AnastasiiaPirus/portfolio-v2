import type {Metadata} from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Divider from '@/components/divider'

export const metadata: Metadata = {
    title: 'About Anastasiia Pirus — Senior Frontend Engineer, AI Products',
    description:
        'Senior frontend engineer in Toronto building AI-first products: generative UI, streaming AI responses to UI, ' +
        'multi-tenant platforms, Stripe billing. Four years shipping React and React Native to production. ' +
        'Former KPMG financial statement auditor.',
    alternates: {canonical: '/about'},
}

// Everything below is transcribed from /public/files/anastasiia-pirus-resume.pdf
// (Anastasiia_Pirus_Resume_Frontend, August 2026). Keep the two in sync.
const stack = [
    {
        group: 'AI / LLM',
        items: [
            'LLM integration', 'Prompt engineering', 'Agent tool calling',
            'Streaming AI responses to UI', 'Generative UI', 'Google Gemini / Vertex AI',
            'AI-assisted development (Claude Code, Cursor)',
        ],
    },
    {
        group: 'Frontend',
        items: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'MUI', 'Design systems'],
    },
    {
        group: 'Backend & data',
        items: ['Node.js', 'PostgreSQL', 'Supabase', 'GraphQL', 'REST APIs', 'Stripe (subscriptions & webhooks)', 'WorkOS AuthKit', 'Python', 'SQL'],
    },
    {
        group: 'Platform & practices',
        items: ['Multi-tenant architecture', 'Vercel', 'Sentry', 'Playwright', 'CI/CD', 'Feature flags', 'Core Web Vitals', 'End-to-end testing'],
    },
]

const experience = [
    {
        role: 'Senior Frontend Developer',
        org: 'CreatorsAGI · Bellevue, WA (remote from Toronto)',
        period: 'Feb 2025 — present',
        points: [
            'On Envoy Studio — CreatorsAGI’s platform for deploying configurable AI agents on clients’ own domains — architected the multi-tenant foundation: per-tenant authentication and onboarding with WorkOS AuthKit, tenant isolation, and dynamic subdomain and custom-domain routing in Next.js, plus a reusable component SDK and design system teams use to compose client-specific experiences.',
            'Built the generative-UI system at the core of the product: structured AI outputs become modular React components, streamed live to client sites over SSE.',
            'Shipped M’adrono (ai.talmido.org) end to end, prototype to production — an AI lesson-planning assistant live since September 2025, with 25,000+ queries from roughly 850 monthly active users.',
            'Built the monetization layer: a Stripe subscription and usage-based credit system on Next.js and Supabase, with webhook-driven sync, credit ledgers, feature gating and a self-serve billing portal.',
            'Drove platform performance and Core Web Vitals — cut LCP by about 97% (~6.5s to under 200ms) across 25+ pages, and reduced response latency by about 40%.',
        ],
    },
    {
        role: 'Contract Software Developer — Independent',
        org: 'Toronto, Canada',
        period: 'Apr 2022 — Feb 2025',
        points: [
            'Built the front end for FormKiQ, an AWS-partnered document platform handling 50M+ documents.',
            'Built and shipped a React Native app end to end — gesture-based swipe interactions, animation and local state — released on the Google Play Store.',
        ],
    },
    {
        role: 'Financial Statement Auditor',
        org: 'KPMG Canada · Baker Tilly Ukraine LLC',
        period: 'Dec 2018 — Aug 2022',
        points: [
            'Worked daily with sensitive client and financial data — the compliance, identity and risk context that customer onboarding and verification flows are built on.',
        ],
    },
]

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
                            <p className="body2 mt-6">
                                Frontend developer focused on how people engage with a product, and on the
                                business goals behind it. Came into engineering from financial audit at KPMG,
                                so the customer and the business come first — and regulated, money-handling
                                products are familiar ground.
                            </p>
                            <p className="body2 mt-4">
                                Over four years, shipped React and React Native applications to production end
                                to end, closing the gap between business needs and technical architecture.
                                Lately that means AI-first products: generative UI, streaming AI responses to
                                the interface, multi-tenant platforms — and weaving AI through the work itself.
                            </p>
                            <p className="body2 mt-4">
                                Based in Toronto, working remotely with a US team. Open to senior frontend roles.{' '}
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
