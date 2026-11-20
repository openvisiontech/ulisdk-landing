import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  BookOpen,
  Shield,
  Server,
  MessageSquare,
  Cpu,
  Terminal,
  X,
  ArrowUp
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  IntroDocArt,
  UsersGuideDocArt,
  SsrDocArt,
  CoreServicesDocArt,
  CoreMessagesDocArt,
  ClientServicesDocArt,
  ClientMessagesDocArt
} from './DocsVectorArt';

const TECHNICAL_DOCS = [
  {
    file: 'introduction.md',
    title: 'Introduction to Uli SDK',
    category: 'Overview',
    desc: 'Comprehensive overview of core capabilities, 3-tier infrastructure, exclusive agent control, shared data topics, AI Knowledge Layer, and A2UI.',
    icon: <BookOpen className="w-4 h-4 text-secondary" />,
    art: <IntroDocArt />
  },
  {
    file: 'users_guide.md',
    title: "User's Guide & Workflows",
    category: 'Operational Guide',
    desc: 'End-to-end message interaction sequences covering dynamic ID allocation, routing, control handover, safety triggers, and discovery workflows.',
    icon: <FileText className="w-4 h-4 text-secondary" />,
    art: <UsersGuideDocArt />
  },
  {
    file: 'security_safety_reliability.md',
    title: 'Security, Safety & Reliability',
    category: 'Architecture',
    desc: 'Detailed architecture for certificate-based Zero-Trust data/control access, redundant multi-path E-Stop safety, and two-tiered lifecycle reliability.',
    icon: <Shield className="w-4 h-4 text-secondary" />,
    art: <SsrDocArt />
  },
  {
    file: 'core_services.md',
    title: 'Core Services Reference',
    category: 'Service Specs',
    desc: 'State diagrams, state actions, internal events, transitions, and message protocols for all 26 core subsystem, node, and component services.',
    icon: <Server className="w-4 h-4 text-secondary" />,
    art: <CoreServicesDocArt />
  },
  {
    file: 'core_messages.md',
    title: 'Core Messages Reference',
    category: 'Protocol Specs',
    desc: 'Complete message catalog with hexadecimal IDs, unicast/multicast routing rules, and Cap’n Proto record field specifications.',
    icon: <MessageSquare className="w-4 h-4 text-secondary" />,
    art: <CoreMessagesDocArt />
  },
  {
    file: 'core_clients_services.md',
    title: 'Core Client Services Reference',
    category: 'Client SDK',
    desc: 'Specifications and state diagrams for all 18 client-side services including Dashboard, Discovery Client, Agent Client, Safety Client, and Data Store.',
    icon: <Cpu className="w-4 h-4 text-secondary" />,
    art: <ClientServicesDocArt />
  },
  {
    file: 'core_clients_messages.md',
    title: 'Core Client Messages Reference',
    category: 'Client SDK',
    desc: 'Message definitions and record schemas for client access queries, control queries, state queries, and data topic subscription updates.',
    icon: <Terminal className="w-4 h-4 text-secondary" />,
    art: <ClientMessagesDocArt />
  }
];

function preprocessMarkdown(raw) {
  if (!raw) return '';
  return raw
    .replace(/<a\s+id=["']([^"']+)["']\s*><\/a>/gi, '[](#__anchor__:$1)\n')
    .replace(/^##\s*$/gm, '---');
}

function slugifyHeading(children) {
  const text = React.Children.toArray(children)
    .map((child) => {
      if (typeof child === 'string') return child;
      if (child?.props?.children) return slugifyHeading(child.props.children);
      return '';
    })
    .join(' ')
    .replace(/⬆️/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return text || undefined;
}

const DocsSection = ({ activeDocFile, onOpenDoc, onCloseDoc }) => {
  const [loadedDoc, setLoadedDoc] = useState({ file: null, content: '' });
  const scrollContainerRef = useRef(null);

  const activeDocMeta = TECHNICAL_DOCS.find((d) => d.file === activeDocFile);
  const loading = Boolean(activeDocFile && loadedDoc.file !== activeDocFile);
  const docContent = loadedDoc.file === activeDocFile ? loadedDoc.content : '';

  useEffect(() => {
    if (!activeDocFile) {
      return;
    }

    let cancelled = false;
    const cleanFile = activeDocFile.replace(/^\//, '');

    fetch(`/${cleanFile}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (!cancelled) {
          setLoadedDoc({
            file: activeDocFile,
            content: preprocessMarkdown(text)
          });
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
          }
        }
      })
      .catch((err) => {
        console.error('Error loading technical document:', err);
        if (!cancelled) {
          setLoadedDoc({
            file: activeDocFile,
            content: 'Error loading document content.'
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [activeDocFile]);

  // Lock page scroll while modal is open
  useEffect(() => {
    if (activeDocFile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeDocFile]);

  const handleScrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const markdownComponents = {
    h1: ({ children }) => {
      const id = slugifyHeading(children);
      return (
        <h1 id={id} className="scroll-mt-20">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = slugifyHeading(children);
      return (
        <h2 id={id} className="scroll-mt-20">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = slugifyHeading(children);
      return (
        <h3 id={id} className="scroll-mt-20">
          {children}
        </h3>
      );
    },
    a: ({ href, children, title }) => {
      if (href && href.startsWith('#__anchor__:')) {
        const anchorId = href.replace('#__anchor__:', '');
        return <span id={anchorId} className="block scroll-mt-20" />;
      }
      if (href && href.startsWith('#')) {
        const targetId = href.slice(1);
        return (
          <a
            href={href}
            title={title}
            onClick={(e) => {
              e.preventDefault();
              const container = scrollContainerRef.current;
              if (!container) return;
              const el = container.querySelector(`[id="${CSS.escape(targetId)}"]`);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="text-secondary hover:underline font-medium cursor-pointer"
          >
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:underline font-medium"
        >
          {children}
        </a>
      );
    },
    img: ({ src, alt, title }) => {
      const normalizedSrc = src
        ? src.startsWith('http') || src.startsWith('/')
          ? src
          : `/${src}`
        : '';
      return (
        <span className="my-6 block rounded-2xl border border-gray-200 bg-white p-4 shadow-sm text-center">
          <img
            src={normalizedSrc}
            alt={alt || title || 'Technical diagram'}
            className="mx-auto max-h-[520px] w-auto object-contain"
            loading="lazy"
          />
          {title && (
            <span className="mt-2 block text-xs font-mono text-gray-500">
              {title}
            </span>
          )}
        </span>
      );
    }
  };

  return (
    <section id="docs" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Subtle Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <FileText size={14} /> Complete Technical Library
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Technical Documentation &amp; Specifications
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Click any document card below to inspect architectural guides, sequence diagrams, state machines, and message specifications.
          </p>
        </motion.div>

        {/* 7 Technical Documents Grid with Custom Vector Art */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_DOCS.map((doc, idx) => (
            <motion.div
              key={doc.file}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.07 }}
              onClick={() => onOpenDoc(doc.file)}
              className={`group cursor-pointer rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/60 hover:bg-white/[0.08] p-5 transition duration-300 flex flex-col justify-between shadow-xl ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Vector Art Graphic Banner */}
                <div className="mb-4 rounded-xl overflow-hidden border border-white/10 bg-slate-950/60 group-hover:border-secondary/40 transition">
                  {doc.art}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-secondary">
                    {doc.category}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  {doc.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Interactive Documentation Reader Modal */}
      {activeDocFile && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/85 backdrop-blur-md p-2 sm:p-4 md:p-6"
          onClick={onCloseDoc}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-7xl h-[92vh] bg-white text-primary rounded-2xl overflow-hidden border border-gray-200 flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-xl bg-secondary/10 text-secondary shrink-0">
                  <FileText size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-primary truncate">
                    {activeDocMeta ? activeDocMeta.title : 'Technical Document'}
                  </h3>
                  {activeDocMeta && (
                    <p className="text-xs text-gray-500 font-mono truncate">
                      {activeDocMeta.category}
                    </p>
                  )}
                </div>
              </div>

              {/* Mobile Document Switcher + Actions */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <select
                  value={activeDocFile}
                  onChange={(e) => onOpenDoc(e.target.value)}
                  className="lg:hidden bg-gray-100 border border-gray-300 text-primary text-xs font-semibold rounded-lg px-2.5 py-2 outline-none focus:border-secondary"
                  aria-label="Switch technical document"
                >
                  {TECHNICAL_DOCS.map((d) => (
                    <option key={d.file} value={d.file}>
                      {d.title}
                    </option>
                  ))}
                </select>

                <button
                  onClick={onCloseDoc}
                  className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-full transition cursor-pointer"
                  aria-label="Close documentation reader"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body: Sidebar + Markdown Content */}
            <div className="flex-1 flex overflow-hidden">
              {/* Left Sidebar Document Switcher (Desktop) */}
              <aside className="hidden lg:flex w-72 border-r border-gray-200 bg-gray-50 flex-col p-4 overflow-y-auto shrink-0">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 px-3 mb-2">
                  Technical Documents (7)
                </div>
                <nav className="space-y-1">
                  {TECHNICAL_DOCS.map((d) => {
                    const isSelected = d.file === activeDocFile;
                    return (
                      <button
                        key={d.file}
                        onClick={() => onOpenDoc(d.file)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl transition flex items-start gap-2.5 cursor-pointer ${
                          isSelected
                            ? 'bg-primary text-white shadow-sm'
                            : 'text-gray-700 hover:bg-gray-200/70'
                        }`}
                      >
                        <span className="mt-0.5 shrink-0">{d.icon}</span>
                        <div className="min-w-0">
                          <div className="text-xs font-bold leading-snug truncate">
                            {d.title}
                          </div>
                          <div
                            className={`text-[10px] font-mono truncate ${
                              isSelected ? 'text-gray-300' : 'text-gray-400'
                            }`}
                          >
                            {d.category}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </aside>

              {/* Right Content Area */}
              <div
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-12 bg-gray-50 relative"
              >
                {loading ? (
                  <div className="flex items-center justify-center h-64 text-gray-500 font-mono text-sm">
                    Loading document...
                  </div>
                ) : (
                  <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 shadow-sm">
                    <article className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-secondary/80 prose-code:text-primary prose-pre:bg-primary prose-pre:text-gray-100 prose-th:bg-gray-100 prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={markdownComponents}
                      >
                        {docContent}
                      </ReactMarkdown>
                    </article>
                  </div>
                )}

                {/* Floating Scroll-to-Top button */}
                <button
                  onClick={handleScrollToTop}
                  title="Scroll to top"
                  className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-secondary transition cursor-pointer"
                >
                  <ArrowUp size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default DocsSection;
