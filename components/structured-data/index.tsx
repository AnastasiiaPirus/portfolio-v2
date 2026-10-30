export const SITE_URL = 'https://www.pirus.dev'
export const PERSON_ID = `${SITE_URL}/#anastasiia-pirus`

// Every fact below is sourced from the CV in /public/files and the project list
// in /data. Keep them in sync — a machine-readable claim that contradicts the CV
// is worse than no claim at all.
const person = {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Anastasiia Pirus',
    givenName: 'Anastasiia',
    familyName: 'Pirus',
    // Common misspellings, so entity resolution still lands on her.
    alternateName: ['Anastasia Pirus', 'A. Pirus', 'Anastasiia Pirus Toronto'],
    url: SITE_URL,
    image: `${SITE_URL}/images/headshot-grey.png`,
    email: 'mailto:a.pirus2000@gmail.com',
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Job opportunities and professional inquiries',
        email: 'a.pirus2000@gmail.com',
        url: `${SITE_URL}/contact`,
        availableLanguage: ['English', 'Ukrainian'],
    },
    jobTitle: 'Senior Frontend Engineer',
    description:
        'Senior frontend engineer in Toronto building AI-first products — generative UI, streaming AI ' +
        'responses to the interface and multi-tenant platforms in React and Next.js. ' +
        'Over four years shipping React and React Native to production. Former financial statement auditor at KPMG and Baker Tilly.',
    worksFor: {
        '@type': 'Organization',
        name: 'CreatorsAGI',
        url: 'https://www.creatorsagi.com',
    },
    hasOccupation: {
        '@type': 'Occupation',
        name: 'Senior Frontend Engineer',
        occupationLocation: {'@type': 'City', name: 'Toronto'},
        skills: 'React, Next.js, TypeScript, generative UI, streaming AI responses to UI, LLM integration, agent tool calling, multi-tenant architecture, Stripe billing',
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Toronto',
        addressRegion: 'ON',
        addressCountry: 'CA',
    },
    // The identity graph. This is how an answer engine confirms that the
    // pirus.dev person, the GitHub account and the LinkedIn profile are one entity.
    sameAs: [
        'https://www.linkedin.com/in/anastasia-pirus',
        'https://github.com/AnastasiiaPirus',
        'https://medium.com/@a.pirus',
        'https://www.upwork.com/freelancers/~01babc62492315e639',
        'https://play.google.com/store/apps/details?id=com.royalpath.voidverse',
    ],
    knowsAbout: [
        // AI first — this is the current positioning and the vocabulary job
        // descriptions in this space actually use.
        'LLM integration', 'Prompt engineering', 'Agent tool calling',
        'Streaming AI responses to UI', 'Generative UI', 'Google Gemini', 'Vertex AI',
        'Server-Sent Events', 'AI-assisted development',
        'React', 'Next.js', 'TypeScript', 'JavaScript', 'React Native',
        'Tailwind CSS', 'shadcn/ui', 'Design systems',
        'Node.js', 'PostgreSQL', 'Supabase', 'GraphQL', 'REST APIs',
        'Stripe subscriptions and webhooks', 'WorkOS AuthKit',
        'Multi-tenant SaaS architecture', 'Core Web Vitals', 'Playwright',
        'Financial statement audit',
    ],
    knowsLanguage: ['English', 'Ukrainian'],
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Odesa National Economic University',
    },
    hasCredential: [
        {
            '@type': 'EducationalOccupationalCredential',
            name: 'Meta Front-End Developer Professional Certificate',
            credentialCategory: 'certificate',
            recognizedBy: {'@type': 'Organization', name: 'Meta'},
        },
        {
            '@type': 'EducationalOccupationalCredential',
            name: 'CS50',
            credentialCategory: 'certificate',
            recognizedBy: {'@type': 'Organization', name: 'Harvard University'},
        },
        {
            '@type': 'EducationalOccupationalCredential',
            name: "Master of Science, Accounting and Taxation",
            credentialCategory: 'degree',
            recognizedBy: {'@type': 'Organization', name: 'Odesa National Economic University'},
        },
    ],
    seeks: {
        '@type': 'Demand',
        name: 'Senior frontend engineering roles, AI products',
        availableAtOrFrom: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Toronto',
                addressRegion: 'ON',
                addressCountry: 'CA',
            },
        },
    },
}

const profilePage = {
    '@context': 'https://schema.org',
    '@graph': [
        person,
        {
            '@type': 'ProfilePage',
            '@id': `${SITE_URL}/#profilepage`,
            url: SITE_URL,
            name: 'Anastasiia Pirus — Senior Frontend Engineer, AI Products, Toronto',
            mainEntity: {'@id': PERSON_ID},
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: 'Anastasiia Pirus',
            publisher: {'@id': PERSON_ID},
            inLanguage: 'en',
        },
    ],
}

export default function StructuredData() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(profilePage)}}
        />
    )
}
