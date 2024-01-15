import type {Metadata} from 'next'
import {ReactNode} from "react";
import {Domine, Josefin_Sans,} from 'next/font/google'
import './globals.css'
import Navigation from "@/components/navigation";
import Divider from "@/components/divider";
import ContactSection from "@/components/contact-section";
import {Analytics} from '@vercel/analytics/react';


export const metadata: Metadata = {
    title: 'Anastasiia Pirus - Portfolio of web developer',
    description: 'Anastasiia Pirus. Web developer in Canada.',
    metadataBase: new URL("https://www.pirus.dev"),
    openGraph: {
        title: 'Anastasiia Pirus - Portfolio of web developer',
        description: 'Anastasiia Pirus. Web developer in Canada.',
        images: ['images/open-graph.png']
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
        <body
            className={`${domine.variable} ${josefineSans.variable}`}>
        <Navigation/>
        {children}
        <div className="bg-[#EDF2FC] pb-8">
            <Divider title="Contact Me"/>
            <ContactSection/>
        </div>
        <Analytics/>
        </body>
        </html>
    )
}
