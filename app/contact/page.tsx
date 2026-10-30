import type {Metadata} from 'next'
import {contactContent} from '@/lib/trust-content'
import TrustPage from '@/components/trust-page'

export const metadata: Metadata = {
    title: 'Contact Anastasiia Pirus',
    description: 'Contact Anastasiia Pirus, a senior frontend engineer in Toronto building React, Next.js and AI-first products.',
    alternates: {canonical: '/contact'},
}

export default function ContactPage() {
    return <TrustPage content={contactContent} subtitleClassName="body1"/>
}
