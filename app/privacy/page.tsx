import type {Metadata} from 'next'
import {privacyContent} from '@/lib/trust-content'
import TrustPage from '@/components/trust-page'

export const metadata: Metadata = {
    title: 'Privacy information',
    description: 'How contact form submissions, hosting and website analytics are handled on Anastasiia Pirus’s personal portfolio.',
    alternates: {canonical: '/privacy'},
}

export default function PrivacyPage() {
    return <TrustPage content={privacyContent} subtitleClassName="body2"/>
}
