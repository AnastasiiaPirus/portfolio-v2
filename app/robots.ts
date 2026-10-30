import type {MetadataRoute} from 'next'

// Explicitly welcome the AI crawlers that feed answer engines and recruiter
// screening tools. Most default to allowed, but stating it prevents a future
// blanket disallow and documents the intent.
const AI_CRAWLERS = [
    'GPTBot',            // OpenAI training + ChatGPT browsing
    'OAI-SearchBot',     // ChatGPT search index
    'ChatGPT-User',      // ChatGPT on-demand fetch
    'ClaudeBot',         // Anthropic
    'Claude-User',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',   // Gemini / AI Overviews
    'Applebot-Extended',
    'meta-externalagent',
    'Bytespider',
    'cohere-ai',
]

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {userAgent: '*', allow: '/'},
            ...AI_CRAWLERS.map((userAgent) => ({userAgent, allow: '/'})),
        ],
        sitemap: 'https://www.pirus.dev/sitemap.xml',
        host: 'https://www.pirus.dev',
    }
}
