export type ContentPart = {text: string; href?: string}
export type TrustPageContent = {
    title: string
    subtitle?: string
    intro: ContentPart[][]
    sections: {heading: string; paragraphs: ContentPart[][]}[]
}

export const contactContent: TrustPageContent = {
    title: 'Contact Anastasiia Pirus',
    subtitle: 'Senior frontend engineer. Based in Toronto, Canada.',
    intro: [[
        {text: 'I’m open to senior frontend roles, especially work on React, Next.js and AI-first products. My experience includes generative UI, streaming agent responses into interfaces, multi-tenant platforms and taking applications from prototype to production. You can read my '},
        {text: 'experience and skills', href: '/about'},
        {text: ' or download my '},
        {text: 'resume', href: '/files/anastasiia-pirus-resume.pdf'},
        {text: ' before getting in touch.'},
    ]],
    sections: [
        {
            heading: 'Jobs and collaboration',
            paragraphs: [[
                {text: 'For a role or project, tell me about the team, what you are building and the engineering work you need help with. A job description, product link, technical stack and an outline of the scope are useful context. Please share only information you have permission to disclose; public links are enough for an initial conversation.'},
            ]],
        },
        {
            heading: 'Get in touch',
            paragraphs: [
                [
                    {text: 'Email '},
                    {text: 'a.pirus2000@gmail.com', href: 'mailto:a.pirus2000@gmail.com'},
                    {text: ', use the contact form below, or '},
                    {text: 'book a call', href: 'https://calendar.app.google/V2xq2ief2Xrw8DDr6'},
                    {text: '. You can also find me on '},
                    {text: 'LinkedIn', href: 'https://www.linkedin.com/in/anastasia-pirus'},
                    {text: ' and '},
                    {text: 'GitHub', href: 'https://github.com/AnastasiiaPirus'},
                    {text: '.'},
                ],
                [
                    {text: 'The form asks for your name, email address and message so I can respond to your inquiry. Read the '},
                    {text: 'privacy information', href: '/privacy'},
                    {text: ' for details about the services that handle submissions and website analytics.'},
                ],
            ],
        },
    ],
}

export const privacyContent: TrustPageContent = {
    title: 'Privacy information',
    subtitle: 'Updated October 30, 2026.',
    intro: [[
        {text: 'This is Anastasiia Pirus’s personal portfolio and blog. You can read the public pages and download the resume without creating an account. This page describes the contact and analytics services used by the website. For privacy questions, email '},
        {text: 'a.pirus2000@gmail.com', href: 'mailto:a.pirus2000@gmail.com'},
        {text: '.'},
    ]],
    sections: [
        {
            heading: 'Contact messages',
            paragraphs: [
                [{text: 'When you submit the contact form, your name, email address and message are sent to this website’s server and forwarded to Formspree, the service used to handle form submissions. These details allow me to receive and respond to your inquiry. The current form handling also writes submission details to application logs on the hosting service. Please avoid sending passwords, payment details or confidential documents through the form.'}],
                [
                    {text: 'Formspree processes submissions under its '},
                    {text: 'privacy policy', href: 'https://formspree.io/legal/privacy-policy/'},
                    {text: '. If you contact me by email instead, your message is handled by the email providers involved. For questions or requests about information you sent, include enough context to identify the inquiry, such as its approximate date. Retention of copies held by service providers depends on their policies and the account settings used to handle the inquiry.'},
                ],
            ],
        },
        {
            heading: 'Hosting and analytics',
            paragraphs: [
                [{text: 'Vercel hosts this website and processes technical request information to deliver pages and operate its infrastructure. The site also includes Vercel Web Analytics to understand aggregate website use, such as which pages people visit and how they reach the site. Vercel documents Web Analytics as using aggregated data without third-party cookies.'}],
                [
                    {text: 'Read Vercel’s '},
                    {text: 'Web Analytics privacy documentation', href: 'https://vercel.com/docs/analytics/privacy-policy'},
                    {text: ' and '},
                    {text: 'privacy policy', href: 'https://vercel.com/legal/privacy-policy'},
                    {text: ' for its data handling details.'},
                ],
            ],
        },
        {
            heading: 'Links to other services',
            paragraphs: [[
                {text: 'Project, article, GitHub, LinkedIn and appointment-booking links may take you to other websites. Those services apply their own privacy policies when you visit or use them. See the '},
                {text: 'contact page', href: '/contact'},
                {text: ' for the available ways to get in touch with me.'},
            ]],
        },
    ],
}
