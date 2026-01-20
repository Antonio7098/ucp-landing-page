import { Docs, loadDocs } from 'documentation-template';
import { Book, Zap, Network, Fingerprint, Brain, Shield } from 'lucide-react';

const modules = import.meta.glob('/docs/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const rawDocs = loadDocs({ modules, contentPath: '/docs' });
type DocEntry = (typeof rawDocs)[number];

function extractTitleFromContent(content: string): string | undefined {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : undefined;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function stripLeadingTitle(content: string, title?: string): string {
  if (!title) return content;
  const pattern = new RegExp(`^#\\s+${escapeRegExp(title)}\\s*(?:\\r?\\n)+`, 'i');
  if (pattern.test(content)) {
    return content.replace(pattern, '').trimStart();
  }
  return content;
}

const docs = rawDocs
  .map((doc: DocEntry) => {
  let slug = doc.slug.replace(/^\/+/, '/');

  if (slug.endsWith('/readme')) {
    slug = slug.replace(/\/readme$/, '');
  }

  if (slug !== '/' && slug.endsWith('/')) {
    slug = slug.slice(0, -1);
  }

  if (!slug.startsWith('/')) {
    slug = `/${slug}`;
  }

  if (slug === '') {
    slug = '/';
  }

  const title = doc.meta?.title ?? extractTitleFromContent(doc.content);
  const sanitizedContent = stripLeadingTitle(doc.content, title);

  return {
    ...doc,
    slug,
    meta: {
      ...doc.meta,
      title,
    },
    content: sanitizedContent,
  };
})
  .sort((a: DocEntry, b: DocEntry) => {
    const priority: Record<string, number> = {
      '/': 0,
      '/getting-started/quick-start': 1,
      '/getting-started/installation': 2,
    };
    const rankA = priority[a.slug] ?? 1000;
    const rankB = priority[b.slug] ?? 1000;
    if (rankA !== rankB) {
      return rankA - rankB;
    }
    return a.slug.localeCompare(b.slug);
  });


const ucpDocsConfig = {
  name: 'UCP Documentation',
  description: 'Unified Content Protocol - A modern protocol for managing structured content as directed acyclic graphs',
  logo: { 
    text: 'UCP',
    icon: <Network className="w-5 h-5" />
  },
  navigation: [
    {
      title: 'Getting Started',
      children: [
        { title: 'Installation', href: '/docs/getting-started/installation' },
        { title: 'Quick Start', href: '/docs/getting-started/quick-start' },
        { title: 'Core Concepts', href: '/docs/getting-started/concepts' },
      ]
    },
    {
      title: 'UCM Core',
      children: [
        { title: 'Blocks', href: '/docs/ucm-core/blocks' },
        { title: 'Content Types', href: '/docs/ucm-core/content-types' },
        { title: 'Documents', href: '/docs/ucm-core/documents' },
        { title: 'Edges', href: '/docs/ucm-core/edges' },
        { title: 'Metadata', href: '/docs/ucm-core/metadata' },
        { title: 'ID Generation', href: '/docs/ucm-core/id-generation' },
      ]
    },
    {
      title: 'UCM Engine',
      children: [
        { title: 'Operations', href: '/docs/ucm-engine/operations' },
        { title: 'Transactions', href: '/docs/ucm-engine/transactions' },
        { title: 'Snapshots', href: '/docs/ucm-engine/snapshots' },
        { title: 'Validation', href: '/docs/ucm-engine/validation' },
      ]
    },
    {
      title: 'UCL Parser',
      children: [
        { title: 'Syntax', href: '/docs/ucl-parser/syntax' },
        { title: 'Commands', href: '/docs/ucl-parser/commands' },
        { title: 'Expressions', href: '/docs/ucl-parser/expressions' },
      ]
    },
    {
      title: 'Translators',
      children: [
        { title: 'Markdown', href: '/docs/translators/markdown' },
        { title: 'HTML', href: '/docs/translators/html' },
      ]
    },
    {
      title: 'API & Tools',
      children: [
        { title: 'UCP API', href: '/docs/ucp-api' },
        { title: 'LLM Utilities', href: '/docs/ucp-llm' },
        { title: 'Observability', href: '/docs/ucp-observe' },
      ]
    },
    {
      title: 'Examples',
      children: [
        { title: 'Basic', href: '/docs/examples/basic' },
        { title: 'Intermediate', href: '/docs/examples/intermediate' },
        { title: 'Advanced', href: '/docs/examples/advanced' },
      ],
    },
    {
      title: 'Conformance',
      href: '/docs/conformance'
    }
  ],
  search: {
    enabled: true,
    placeholder: 'Search UCP documentation...'
  }
};

export function DocsPage() {
  return (
    <Docs 
      config={ucpDocsConfig} 
      docs={docs}
      basePath="/docs"
      homePage={{
        features: [
          {
            title: 'Content-Addressed IDs',
            description: 'Deterministic, collision-free identifiers for content blocks.',
            href: '/docs/ucm-core/id-generation',
            icon: <Fingerprint className="h-5 h-5" />,
          },
          {
            title: 'Graph Relationships',
            description: 'Rich semantic edges between content blocks with 30+ relationship types.',
            href: '/docs/ucm-core/edges',
            icon: <Network className="h-5 h-5" />,
          },
          {
            title: 'LLM Optimization',
            description: 'Built-in token estimation and context management for GPT, Claude, and Llama.',
            href: '/docs/ucp-llm',
            icon: <Brain className="h-5 h-5" />,
          },
          {
            title: 'Immutable by Design',
            description: 'Every change creates a new version with full history preserved.',
            href: '/docs/ucm-engine/snapshots',
            icon: <Shield className="h-5 h-5" />,
          },
          {
            title: 'Markdown Support',
            description: 'Write documentation in Markdown with full GFM support and syntax highlighting.',
            href: '/docs/translators/markdown',
            icon: <Book className="h-5 h-5" />,
          },
          {
            title: 'Fast & Lightweight',
            description: 'Built with modern tools for instant development and optimized production builds.',
            href: '/docs/getting-started/installation',
            icon: <Zap className="h-5 h-5" />,
          },
        ]
      }}
    />
  );
}
