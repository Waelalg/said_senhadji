import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 7L2 7" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const SparklesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
    <path d="M19 12l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
  </svg>
)

const BrainIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
)

const CodeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const RocketIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
)

export default function HomePage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center relative">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/30 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] animate-glow-blue" />

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/30 text-purple-300 text-sm font-medium border border-purple-500/70 animate-pulse-glow backdrop-blur-sm">
              <SparklesIcon />
              <span>Available for Freelance Work</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                  SENHADJI Said
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                Web Developer & AI Enthusiast
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                I'm a freelance web developer and AI student passionate about building intelligent, modern web
                applications that solve real-world problems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="gap-2 w-full sm:w-auto group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 text-white"
                >
                  View My Work <ArrowRightIcon />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-purple-500/70 text-foreground hover:bg-purple-600/20 hover:border-purple-400 hover:text-purple-300 backdrop-blur-sm"
                >
                  More About Me
                </Button>
              </Link>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-purple-400 hover:bg-purple-600/20 hover:scale-110 transition-all backdrop-blur-sm"
              >
                <a
                  href="https://github.com/SenhadjiMSaid"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-blue-400 hover:bg-blue-600/20 hover:scale-110 transition-all backdrop-blur-sm"
              >
                <a
                  href="https://www.linkedin.com/in/said-senhadji-ab326a214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-purple-400 hover:bg-purple-600/20 hover:scale-110 transition-all backdrop-blur-sm"
              >
                <a href="mailto:ms.senhadji@esi-sba.dz" aria-label="Email">
                  <MailIcon />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-lg mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 via-blue-600/40 to-purple-600/50 rounded-3xl blur-3xl animate-pulse-glow" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-3xl opacity-60 blur-xl animate-rotate-slow" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-purple-500/70 shadow-2xl shadow-purple-500/40 backdrop-blur-sm">
                <Image
                  src="/images/ai-developer.jpg"
                  alt="AI Development Workspace"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            What I Do
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="group relative space-y-4 text-center p-8 rounded-2xl border-2 border-border/50 hover:border-purple-500/70 transition-all hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 backdrop-blur-sm bg-card/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 text-purple-400 mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                  <BrainIcon />
                </div>
                <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deep Learning, NLP, Computer Vision, and Neural Networks
                </p>
              </div>
            </div>

            <div className="group relative space-y-4 text-center p-8 rounded-2xl border-2 border-border/50 hover:border-blue-500/70 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-2 backdrop-blur-sm bg-card/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 text-blue-400 mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                  <CodeIcon />
                </div>
                <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  React, TypeScript, Next.js, Express.js, and modern web technologies
                </p>
              </div>
            </div>

            <div className="group relative space-y-4 text-center p-8 rounded-2xl border-2 border-border/50 hover:border-purple-500/70 transition-all hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 backdrop-blur-sm bg-card/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 text-purple-400 mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                  <RocketIcon />
                </div>
                <h3 className="text-xl font-semibold mb-2">Available for Hire</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Open to freelance projects and collaboration opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
