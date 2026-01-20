import {
  Github,
  Twitter,
  ChevronRight,
  Boxes,
  GitBranch,
  Fingerprint,
  Brain,
  FileCode2,
  Layers,
  Network,
  Sparkles,
  Zap,
  Shield,
  History,
  Code2,
  Terminal,
  Package,
} from 'lucide-react';

import {
  Container,
  Section,
  SectionTitle,
  Hero,
  HeroBackground,
  FeatureCard,
  FeatureGrid,
  FeatureShowcase,
  IconBox,
  LogoCloud,
  CodeTabs,
  CTASection,
  CTABanner,
  Navbar,
  NavButton,
  Footer,
  StatsSection,
  GradientText,
} from '../components/landing';

const rustBlockCode = `// Create a content block with semantic metadata
use ucm_core::{Block, ContentType, Metadata};

let block = Block::builder()
    .content("Graph-based content management")
    .content_type(ContentType::Text)
    .role("intro.hook")
    .namespace("docs")
    .build()?;

// ID is deterministic - same content = same ID
println!("Block ID: {}", block.id());`;

const rustDocCode = `// Build a document as a directed acyclic graph
use ucm_core::{Document, Edge, EdgeType};

let mut doc = Document::new("Getting Started Guide");

// Add blocks to the document
doc.add_block(intro_block)?;
doc.add_block(code_example)?;

// Create semantic relationships
doc.add_edge(Edge::new(
    intro_block.id(),
    code_example.id(),
    EdgeType::Elaborates,
))?;`;

const uclCode = `# UCL - Token-efficient command language
# Perfect for LLM interactions

APPEND TO intro
  CONTENT "Understanding the graph model"
  ROLE body.explanation
END

LINK source -> target
  TYPE references
  WEIGHT 0.8
END

SNAPSHOT "v1.0"
  MESSAGE "Initial release"
END`;

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="text-base font-semibold text-muted-foreground/50 tracking-tight">
      {name}
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Banner */}
      <CTABanner
        variant="accent"
        action={
          <a href="/docs" className="hover:text-foreground flex items-center gap-1 text-sm font-medium">
            Read the docs <ChevronRight className="w-4 h-4" />
          </a>
        }
      >
        Introducing UCP 1.0 — Content as a graph, optimized for LLMs
      </CTABanner>

      {/* Navigation */}
      <Navbar
        logo={
          <a href="/" className="flex items-center gap-2.5 font-bold text-xl">
            <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Network className="w-5 h-5 text-white" />
            </div>
            <span className="tracking-tight">UCP</span>
          </a>
        }
        links={[
          {
            label: 'Documentation',
            children: [
              { label: 'Getting Started', href: '/docs/getting-started/quick-start' },
              { label: 'UCM Core', href: '/docs/ucm-core' },
              { label: 'UCM Engine', href: '/docs/ucm-engine' },
              { label: 'UCL Parser', href: '/docs/ucl-parser' },
              { label: 'Translators', href: '/docs/translators/markdown' },
              { label: 'API & Tools', href: '/docs/ucp-api' },
              { label: 'LLM Utilities', href: '/docs/ucp-llm' },
              { label: 'Observability', href: '/docs/ucp-observe' },
              { label: 'Examples', href: '/docs/examples/basic' },
              { label: 'Conformance', href: '/docs/conformance' },
            ],
          },
        ]}
        actions={
          <a
            href="https://github.com/Antonio7098/unified-content-protocol"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border hover:bg-accent transition-colors"
            aria-label="UCP on GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="w-5 h-5" />
          </a>
        }
      />

      {/* Hero Section */}
      <Hero
        size="xl"
        layout="split"
        contentAlign="left"
        containerSize="xl"
        className="pt-24 md:pt-32"
        badge={undefined}
        title={
          <>
            <span className="block whitespace-nowrap">Unified Content</span>
            <span className="block">Protocol</span>
          </>
        }
        subtitle="A modern protocol for managing structured content as directed acyclic graphs. Graph-based relationships, LLM-optimized, immutable by design."
        actions={[
          {
            label: 'Get Started',
            href: '/docs/getting-started/quick-start',
            variant: 'primary',
          },
          {
            label: 'View on GitHub',
            href: 'https://github.com/Antonio7098/unified-content-protocol',
            variant: 'ghost',
            icon: <Github className="w-4 h-4" />,
            iconPosition: 'left',
          },
        ]}
        backgroundElement={
          <HeroBackground variant="radial" primaryColor="rgba(139, 92, 246, 0.08)" secondaryColor="rgba(59, 130, 246, 0.05)" />
        }
      />

      {/* Logo Cloud */}
      <LogoCloud
        title="Built for modern content systems"
        variant="muted"
        logos={[
          { name: 'Documentation', logo: <LogoPlaceholder name="Documentation" /> },
          { name: 'Knowledge Bases', logo: <LogoPlaceholder name="Knowledge Bases" /> },
          { name: 'CMS Platforms', logo: <LogoPlaceholder name="CMS Platforms" /> },
          { name: 'AI Applications', logo: <LogoPlaceholder name="AI Applications" /> },
          { name: 'Research Tools', logo: <LogoPlaceholder name="Research Tools" /> },
        ]}
      />

      {/* Developer-first Section */}
      <Section theme="muted" spacing="xl">
        <Container>
          <SectionTitle
            label="Developer Experience"
            title="Elegant APIs, powerful abstractions"
            align="center"
            className="mb-16"
          />

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <p className="text-lg text-muted-foreground mb-8">
                UCP provides a clean, type-safe API for building content graphs. Every operation is predictable, every ID is deterministic.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <NavButton variant="primary" href="/docs">
                  Read the docs
                </NavButton>
                <NavButton variant="ghost" href="/docs/examples/basic" icon={<Code2 className="w-4 h-4" />}>
                  View examples
                </NavButton>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: <Fingerprint className="w-5 h-5" />,
                    title: 'Content-Addressed IDs',
                    description: 'Deterministic, collision-free identifiers',
                  },
                  {
                    icon: <Network className="w-5 h-5" />,
                    title: 'Graph Relationships',
                    description: 'Rich semantic edges between blocks',
                  },
                  {
                    icon: <Brain className="w-5 h-5" />,
                    title: 'LLM Optimization',
                    description: 'Built-in token estimation for GPT, Claude',
                  },
                  {
                    icon: <FileCode2 className="w-5 h-5" />,
                    title: 'UCL Language',
                    description: 'Token-efficient command syntax',
                  },
                  {
                    icon: <History className="w-5 h-5" />,
                    title: 'Immutable History',
                    description: 'Full audit trail with snapshots',
                  },
                  {
                    icon: <Layers className="w-5 h-5" />,
                    title: '8 Content Types',
                    description: 'Text, code, tables, math, media & more',
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <IconBox
                      icon={feature.icon}
                      variant="outlined"
                      color="primary"
                      size="md"
                    />
                    <div>
                      <h4 className="font-medium text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <CodeTabs
                tabs={[
                  { label: 'Blocks', code: rustBlockCode, language: 'rust' },
                  { label: 'Documents', code: rustDocCode, language: 'rust' },
                  { label: 'UCL', code: uclCode, language: 'bash' },
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Graph Model Section */}
      <FeatureShowcase
        label="The core model"
        title={
          <>
            Content as a <GradientText gradient="purple-blue">Graph</GradientText>
            <br />
            <span className="text-muted-foreground">not just a tree</span>
          </>
        }
        description="Traditional content systems force hierarchical structures. UCP embraces the natural interconnectedness of information with directed acyclic graphs, semantic relationships, and rich metadata."
        layout="left"
        action={
          <NavButton variant="primary" href="/docs/getting-started/concepts">
            Learn the concepts
          </NavButton>
        }
        features={[
          {
            icon: <Boxes className="w-5 h-5" />,
            title: 'Atomic Blocks',
            description: 'Paragraphs, code, tables, images — each a self-contained unit with metadata',
          },
          {
            icon: <GitBranch className="w-5 h-5" />,
            title: 'Semantic Edges',
            description: 'References, elaborations, contradictions — explicit relationships between content',
          },
          {
            icon: <Sparkles className="w-5 h-5" />,
            title: '30+ Semantic Roles',
            description: 'intro.hook, body.evidence, conclusion.summary — rich categorization',
          },
          {
            icon: <Shield className="w-5 h-5" />,
            title: 'Immutable by Design',
            description: 'Every change creates a new version with full history preserved',
          },
        ]}
        media={
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl">
              {/* Graph Visualization */}
              <svg viewBox="0 0 300 200" className="w-full h-auto">
                {/* Edges */}
                <line x1="150" y1="40" x2="80" y2="100" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
                <line x1="150" y1="40" x2="220" y2="100" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
                <line x1="80" y1="100" x2="60" y2="160" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
                <line x1="80" y1="100" x2="120" y2="160" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
                <line x1="220" y1="100" x2="180" y2="160" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
                <line x1="220" y1="100" x2="240" y2="160" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
                {/* Cross-link */}
                <path d="M120 160 Q150 140 180 160" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="4 2" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                {/* Nodes */}
                <circle cx="150" cy="40" r="16" fill="url(#gradient)" />
                <circle cx="80" cy="100" r="12" className="fill-violet-500/80" />
                <circle cx="220" cy="100" r="12" className="fill-blue-500/80" />
                <circle cx="60" cy="160" r="8" className="fill-violet-400/60" />
                <circle cx="120" cy="160" r="8" className="fill-violet-400/60" />
                <circle cx="180" cy="160" r="8" className="fill-blue-400/60" />
                <circle cx="240" cy="160" r="8" className="fill-blue-400/60" />
                {/* Labels */}
                <text x="150" y="44" textAnchor="middle" className="fill-white text-[8px] font-medium">Doc</text>
              </svg>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">Blocks form a DAG with semantic edges</p>
              </div>
            </div>
          </div>
        }
      />

      {/* Feature Grid */}
      <FeatureGrid
        label="Core Features"
        title="Everything you need for structured content"
        subtitle="From atomic blocks to complete documents, UCP provides a comprehensive toolkit for content management."
        columns={3}
        className="bg-muted/30"
      >
        {[
          {
            icon: <Boxes className="w-5 h-5" />,
            title: 'UCM Core',
            description: 'The foundational data model — blocks, documents, edges, and metadata.',
          },
          {
            icon: <Zap className="w-5 h-5" />,
            title: 'UCM Engine',
            description: 'Operations, transactions, snapshots, and validation for document manipulation.',
          },
          {
            icon: <Terminal className="w-5 h-5" />,
            title: 'UCL Parser',
            description: 'A token-efficient command language designed for LLM interactions.',
          },
          {
            icon: <FileCode2 className="w-5 h-5" />,
            title: 'Translators',
            description: 'Convert to and from Markdown, HTML, and other formats seamlessly.',
          },
          {
            icon: <Brain className="w-5 h-5" />,
            title: 'LLM Utilities',
            description: 'Context management, token estimation for GPT-4, Claude, and Llama.',
          },
          {
            icon: <Package className="w-5 h-5" />,
            title: 'High-Level API',
            description: 'Simple client interface for common operations and integrations.',
          },
        ].map((feature, index) => (
          <FeatureCard
            key={index}
            icon={<IconBox icon={feature.icon} variant="gradient" color="primary" />}
            title={feature.title}
            description={feature.description}
            variant="bordered"
          />
        ))}
      </FeatureGrid>

      {/* Stats Section */}
      <StatsSection
        title="Built for scale and reliability"
        stats={[
          { value: '10M+', label: 'Blocks', description: 'collision-free' },
          { value: '8', label: 'Content Types', description: 'supported' },
          { value: '30+', label: 'Semantic Roles', description: 'built-in' },
          { value: '100+', label: 'Error Codes', description: 'for debugging' },
        ]}
        variant="bordered"
        columns={4}
      />

      {/* CTA Section */}
      <CTASection
        variant="card"
        title="Ready to structure your content?"
        description="Start building with UCP today. Graph-based, LLM-ready, and designed for the future of content management."
        actions={[
          { label: 'Get Started', href: '/docs/getting-started/quick-start', variant: 'primary' },
          { label: 'View Documentation', href: '/docs', variant: 'outline' },
        ]}
      />

      {/* Footer */}
      <Footer
        logo={
          <a href="/" className="flex items-center gap-2.5 font-bold text-xl">
            <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Network className="w-5 h-5 text-white" />
            </div>
            <span className="tracking-tight">UCP</span>
          </a>
        }
        description="A modern protocol for managing structured content as directed acyclic graphs."
        sections={[
          {
            title: 'Documentation',
            links: [
              { label: 'Getting Started', href: '/docs/getting-started/quick-start' },
              { label: 'Core Concepts', href: '/docs/getting-started/concepts' },
              { label: 'UCM Core', href: '/docs/ucm-core' },
              { label: 'Examples', href: '/docs/examples/basic' },
            ],
          },
          {
            title: 'Components',
            links: [
              { label: 'UCM Engine', href: '/docs/ucm-engine' },
              { label: 'UCL Parser', href: '/docs/ucl-parser' },
              { label: 'Translators', href: '/docs/translators' },
              { label: 'API Reference', href: '/docs/ucp-api' },
            ],
          },
          {
            title: 'Resources',
            links: [
              { label: 'LLM Utilities', href: '/docs/ucp-llm' },
              { label: 'Observability', href: '/docs/ucp-observe' },
              { label: 'Conformance', href: '/docs/conformance' },
              { label: 'GitHub', href: 'https://github.com/Antonio7098/unified-content-protocol' },
            ],
          },
        ]}
        socialLinks={[
          { label: 'GitHub', href: 'https://github.com/Antonio7098/unified-content-protocol', icon: <Github className="w-5 h-5" /> },
          { label: 'Twitter', href: 'https://twitter.com', icon: <Twitter className="w-5 h-5" /> },
        ]}
        copyright={`© ${new Date().getFullYear()} Unified Content Protocol. Open source.`}
        bottomLinks={[
          { label: 'License', href: '#' },
          { label: 'Contributing', href: '#' },
        ]}
      />
    </div>
  );
}
