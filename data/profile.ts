export const profileParagraphs = [
    "Frontend engineer with full-stack range, focused on how people use a product and the business goal behind it. I’m building AI products at an early-stage startup: real-time voice interfaces, agent tooling, billing and analytics in Next.js and TypeScript.",
    "Four years shipping React and React Native apps to production. I came to engineering from financial audit at Baker Tilly and KPMG, so I think about the customer and the business first."
]
export const stack = [
    {
        group: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'shadcn/ui', 'React Native', 'Design systems'],
    },
    {
        group: 'AI / LLM',
        items: [
            'OpenAI Realtime API', 'Claude Agent SDK', 'MCP', 'Gemini / Vertex AI',
            'LLM tool calling', 'RAG', 'Prompt engineering',
        ],
    },
    {
        group: 'Backend & data',
        items: ['Node.js', 'Python (FastAPI)', 'REST APIs', 'Server-Sent Events', 'PostgreSQL', 'Supabase', 'Firebase', 'Stripe', 'WorkOS'],
    },
    {
        group: 'Tooling & practices',
        items: ['Git', 'Vercel', 'Sentry', 'Playwright', 'CI/CD', 'Feature flags', 'Core Web Vitals', 'End-to-end testing', 'Multi-tenant architecture'],
    },
]

export const experience = [
    {
        role: 'Senior Frontend Developer',
        org: 'CreatorsAGI · Remote (Toronto)',
        period: 'Feb 2025 — present',
        summary: 'AI startup behind HyperLive: white-labeled AI webinars and sales agents that companies run on their own domains.',
        points: [
            'Own the frontend of both user-facing apps — the visitor-facing app and the admin Studio — taking features from design through the API and AI services they depend on (Next.js, TypeScript, Python).',
            'Built the AI webinar experience from scratch: an AI presenter narrates a company’s slides in real time (OpenAI Realtime API), visitors raise a hand to ask questions by voice, with live captions throughout.',
            'Built chat-based configuration for the AI agent: wrote 10+ MCP tools for Studio’s AI assistant (Claude Agent SDK, Python), so admins set up booking, branding, analytics and slide cues in plain language instead of navigating settings.',
            'Shipped self-serve billing in Studio: Stripe checkout, prepaid credit balance, plan-based feature gating and a trial-expired flow that leads users to upgrade.',
            'Added distributed tracing across Next.js and Python services with Sentry, so the team can see where each chat response spends its time.',
        ],
    },
    {
        role: 'Contract Software Developer — Independent',
        org: 'Toronto, Canada',
        period: 'Apr 2022 — Feb 2025',
        points: [
            'Built the TypeScript/React front end for FormKiQ, an AWS-partnered document management platform handling 50M+ documents — REST API integration and direct-to-S3 uploads via presigned URLs.',
            'Built admin dashboards for mobile game operators: player and revenue analytics, live in-game events and in-game currency configuration.',
            'Shipped a React Native swipe game to Google Play and a Chrome extension (Firebase, Firestore) to the Web Store, owning scoping, delivery and client communication.',
        ],
    },
    {
        role: 'Financial Statement Auditor',
        org: 'Baker Tilly Ukraine · KPMG Canada',
        period: '2018 — 2022',
        points: [
            'Audited financial statements at Baker Tilly Ukraine (2018–2022), then KPMG Canada (2022), before switching to engineering. Worked daily with sensitive client financial data.',
        ],
    },
]
