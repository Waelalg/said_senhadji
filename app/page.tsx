import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Code2, Brain, Rocket } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center relative">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-glow-blue" />

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/50 animate-pulse-glow backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>Available for Freelance Work</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
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
                  className="gap-2 w-full sm:w-auto group bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                >
                  View My Work <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-primary/50 hover:bg-primary/20 hover:border-primary backdrop-blur-sm"
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
                className="hover:text-primary hover:bg-primary/20 hover:scale-110 transition-all backdrop-blur-sm"
              >
                <a
                  href="https://github.com/SenhadjiMSaid"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-accent hover:bg-accent/20 hover:scale-110 transition-all backdrop-blur-sm"
              >
                <a
                  href="https://www.linkedin.com/in/said-senhadji-ab326a214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary hover:bg-primary/20 hover:scale-110 transition-all backdrop-blur-sm"
              >
                <a href="mailto:ms.senhadji@esi-sba.dz" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-lg mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 rounded-3xl blur-3xl animate-pulse-glow" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-50 blur-xl animate-rotate-slow" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/30 backdrop-blur-sm">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            What I Do
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="group relative space-y-4 text-center p-8 rounded-2xl border-2 border-border/50 hover:border-primary/70 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-2 backdrop-blur-sm bg-card/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deep Learning, NLP, Computer Vision, and Neural Networks
                </p>
              </div>
            </div>

            <div className="group relative space-y-4 text-center p-8 rounded-2xl border-2 border-border/50 hover:border-accent/70 transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 backdrop-blur-sm bg-card/50">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/30 to-primary/30 text-accent mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
                  <Code2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  React, TypeScript, Next.js, Express.js, and modern web technologies
                </p>
              </div>
            </div>

            <div className="group relative space-y-4 text-center p-8 rounded-2xl border-2 border-border/50 hover:border-primary/70 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-2 backdrop-blur-sm bg-card/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                  <Rocket className="h-8 w-8" />
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
