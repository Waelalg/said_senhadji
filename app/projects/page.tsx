"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    name: "Rakabni",
    description:
      "Multidisciplinary project from 2nd year at ESI. A comprehensive transportation and ride-sharing platform built with modern web technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/SenhadjiMSaid/Rakabni",
    liveUrl: null,
    category: "Web Development",
  },
  {
    id: 2,
    name: "ML-IASD-2CS-ESI-SBA",
    description:
      "Machine Learning projects and implementations from the AI and Data Science curriculum at ESI-SBA. Includes various ML algorithms and data analysis notebooks.",
    technologies: ["Python", "Jupyter Notebook", "Machine Learning", "Data Science"],
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/SenhadjiMSaid/ML-IASD-2CS-ESI-SBA",
    liveUrl: null,
    category: "AI/ML",
  },
  {
    id: 3,
    name: "Software Engineering for Data Science",
    description:
      "Comprehensive project demonstrating software engineering techniques applied to data science workflows. Covers best practices, design patterns, and scalable solutions.",
    technologies: ["Python", "Jupyter Notebook", "Software Engineering", "Data Science"],
    stars: 0,
    forks: 0,
    githubUrl: "https://github.com/SenhadjiMSaid/Software-Engineering-for-Data-Science",
    liveUrl: null,
    category: "Data Science",
  },
  {
    id: 4,
    name: "StockXpert",
    description:
      "Inventory management system for ESI-SBA. A full-stack application for managing store inventory, tracking products, and generating reports.",
    technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    stars: 2,
    forks: 0,
    githubUrl: "https://github.com/StockXpert/StockXpert",
    liveUrl: null,
    category: "Web Development",
  },
]

const categories = ["All", "AI/ML", "Web Development", "Data Science"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen pt-16">
      {/* Header with Image */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12">
          <div className="space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of my work in AI, machine learning, and web development. Each project represents a unique
              challenge and learning experience from my studies at ESI-SBA.
            </p>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] max-w-md mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-3xl animate-pulse-glow" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/20 backdrop-blur-sm">
                <Image
                  src="/images/ai-workspace.jpg"
                  alt="AI Development Workspace"
                  width={500}
                  height={375}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30"
                    : "hover:border-primary/50 backdrop-blur-sm"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="p-6 space-y-4 border-2 border-border/50 hover:border-primary/70 transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 group backdrop-blur-sm bg-card/50"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-balance group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {project.name}
                    </h3>
                    <Badge variant="secondary" className="shrink-0 bg-primary/20 text-primary border border-primary/50">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-accent/50 hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-primary" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4 text-accent" />
                      <span>{project.forks}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="hover:bg-primary hover:text-primary-foreground transition-all bg-transparent border-primary/50 hover:border-primary hover:shadow-lg hover:shadow-primary/30"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="hover:bg-accent hover:text-accent-foreground transition-all bg-transparent border-accent/50 hover:border-accent hover:shadow-lg hover:shadow-accent/30"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Card className="max-w-3xl mx-auto p-8 text-center space-y-6 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/30 shadow-xl shadow-primary/20 backdrop-blur-sm">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary shadow-lg shadow-primary/20">
            <Github className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              More on GitHub
            </h2>
            <p className="text-muted-foreground">
              Check out my GitHub profile for more projects, contributions, and open source work
            </p>
          </div>
          <Button
            size="lg"
            asChild
            className="hover:scale-105 transition-transform bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
          >
            <a href="https://github.com/SenhadjiMSaid" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              Visit GitHub Profile
            </a>
          </Button>
        </Card>
      </section>
    </main>
  )
}
