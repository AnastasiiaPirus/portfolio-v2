import type {Metadata} from 'next'
import Link from 'next/link'
import {ReactNode} from "react";
import {Domine, Josefin_Sans,} from 'next/font/google'
import './globals.css'
import Navigation from "@/components/navigation";
import Divider from "@/components/divider";
import ContactSection from "@/components/contact-section";
import StructuredData from "@/components/structured-data";
import {Analytics} from '@vercel/analytics/react';


const TITLE = 'Anastasiia Pirus — Senior Frontend Engineer, AI Products (React, Next.js)'
const DESCRIPTION =
    'Anastasiia Pirus is a Toronto-based senior frontend engineer building AI-first products: generative UI, ' +
    'streaming AI responses to the interface, multi-tenant platform architecture and Stripe billing, in React and Next.js. ' +
    'Four years shipping to production. Former KPMG financial statement auditor. Open to senior frontend roles.'

export const metadata: Metadata = {
    title: {
        default: TITLE,
        template: '%s | Anastasiia Pirus',
    },
    description: DESCRIPTION,
    metadataBase: new URL("https://www.pirus.dev"),
    authors: [{name: 'Anastasiia Pirus', url: 'https://www.pirus.dev'}],
    creator: 'Anastasiia Pirus',
    keywords: [
        'Anastasiia Pirus',
        'senior frontend engineer Toronto',
        'AI product engineer',
        'generative UI developer',
        'LLM integration frontend',
        'streaming AI responses to UI',
        'React developer Toronto',
        'Next.js developer Canada',
        'TypeScript engineer',
        'multi-tenant SaaS frontend',
    ],
    openGraph: {
        type: 'profile',
        firstName: 'Anastasiia',
        lastName: 'Pirus',
        title: TITLE,
        description: DESCRIPTION,
        url: 'https://www.pirus.dev',
        siteName: 'Anastasiia Pirus',
        locale: 'en_CA',
        images: [{url: '/images/open-graph.png', width: 1200, height: 630, alt: 'Anastasiia Pirus — Senior Frontend Engineer'}],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['/images/open-graph.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large'},
    },
    alternates: {
        canonical: '/',
    }
}

const domine = Domine({subsets: ['latin'], weight: "400", variable: "--font-domine"})
const josefineSans = Josefin_Sans({subsets: ['latin'], weight: ["300", "400"], variable: "--font-josefine-sans"})


export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <StructuredData/>
        </head>
        <body
            className={`${domine.variable} ${josefineSans.variable}`}>
        <Navigation/>
        <main id="main-content">{children}</main>
        <div className="bg-[#EDF2FC] pb-8">
            <Divider title="Contact Me"/>
            <ContactSection/>
        </div>
        <footer className="container py-6">
            <nav aria-label="Site information" className="body2 flex flex-wrap gap-6">
                <Link className="underline" href="/about">About</Link>
                <Link className="underline" href="/contact">Contact</Link>
                <Link className="underline" href="/privacy">Privacy</Link>
            </nav>
        </footer>
        <Analytics/>
        </body>
        </html>
    )
}
