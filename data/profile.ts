export const profileParagraphs = [
    "Front-end developer focused on how people engage with a product, and on the business goals behind it. I came into engineering from financial audit at KPMG, so I think about the customer and the business first and I’m comfortable in regulated, money-handling products.",
    "Over four years I’ve shipped React and React Native apps to production end to end, closing the gap between business needs and technical architecture. Lately building AI-first products and weaving AI through my own work processes."
]
export const stack = [
    {
        group: 'AI / LLM',
        items: [
            'LLM integration', 'Prompt engineering', 'Agent tool calling',
            'Agent-to-UI (A2UI) streaming', 'Google Gemini / Vertex AI',
            'AI-assisted development (Claude Code, Cursor)',
        ],
    },
    {
        group: 'Frontend',
        items: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'MUI', 'Design systems'],
    },
    {
        group: 'Languages',
        items: ['TypeScript', 'JavaScript', 'SQL', 'Python', 'HTML', 'CSS'],
    },
    {
        group: 'Backend & data',
        items: ['Node.js', 'GraphQL', 'REST APIs', 'PostgreSQL', 'Supabase', 'Stripe (subscriptions & webhooks)', 'WorkOS AuthKit', 'Google Cloud (GCP)'],
    },
    {
        group: 'Platform & practices',
        items: ['Git', 'Vercel', 'Sentry', 'Playwright', 'CI/CD', 'Feature flags', 'Core Web Vitals', 'End-to-end testing', 'Multi-tenant architecture'],
    },
]

export const experience = [
    {
        role: 'Senior Frontend Developer',
        org: 'CreatorsAGI · Bellevue, WA, USA',
        period: 'Feb 2025 — present',
        points: [
            'On Envoy Studio — CreatorsAGI’s platform for deploying configurable AI agents on clients’ own domains — architected the multi-tenant foundation: per-tenant authentication and onboarding with WorkOS AuthKit, tenant isolation, and dynamic subdomain and custom-domain routing in Next.js, plus a reusable component SDK and design system teams use to compose client-specific experiences.',
            'Built the generative-UI system at the core of the product: structured AI outputs become modular React components, streamed live to client sites over SSE via an agent-to-UI (A2UI) layer.',
            'Shipped M’adrono (ai.talmido.org) end to end, prototype to production — an AI lesson-planning assistant live since September 2025, with 25,000+ queries from roughly 850 monthly active users.',
            'Drove platform performance and Core Web Vitals — cut LCP by about 97% (~6.5s to under 200ms) across 25+ pages, and reduced response latency by about 40%.',
        ],
    },
    {
        role: 'Contract Software Developer — Independent',
        org: 'Toronto, Canada',
        period: 'Apr 2022 — Feb 2025',
        points: [
            'Built the TypeScript/React front end for FormKiQ, an AWS-partnered document platform handling 50M+ documents — REST API integration and file upload/download via S3 presigned URLs.',
            'Built admin dashboards for mobile game operators, covering analytics plus tools to manage games, schedule live in-game events and configure in-game currencies.',
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
