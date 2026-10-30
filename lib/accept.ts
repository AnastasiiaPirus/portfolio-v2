import Negotiator from 'negotiator'

const representations = ['text/html; charset=utf-8', 'text/markdown; charset=utf-8']

export function preferredRepresentation(accept: string | null): 'html' | 'markdown' | null {
    const selected = new Negotiator({headers: {accept: accept || '*/*'}}).mediaType(representations)
    if (!selected) return null
    return selected.startsWith('text/markdown') ? 'markdown' : 'html'
}
