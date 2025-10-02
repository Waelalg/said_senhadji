import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Github, Linkedin, MapPin, Calendar } from "lucide-react"

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              SENHADJI Said
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">AI Developer & Full-Stack Engineer</p>
          <Button size="lg" className="gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/20">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </section>

      {/* Resume Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Info */}
          <Card className="p-6 border-primary/20 shadow-lg shadow-primary/5">
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:ms.senhadji@esi-sba.dz" className="hover:text-primary transition-colors">
                  ms.senhadji@esi-sba.dz
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-primary" />
                <a
                  href="https://github.com/SenhadjiMSaid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/SenhadjiMSaid
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-primary" />
                <a
                  href="https://www.linkedin.com/in/said-senhadji-ab326a214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/said-senhadji
                </a>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Sidi Bel Abbes, Algeria</span>
              </div>
            </div>
          </Card>

          {/* Summary */}
          <Card className="p-8 space-y-4 border-primary/20 hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/10">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Passionate AI student and full-stack developer with expertise in machine learning, deep learning, and
              modern web technologies. Currently pursuing advanced studies in Artificial Intelligence at the Higher
              School of Computer Science of Sidi Bel Abbes. Experienced in building intelligent systems, neural
              networks, and scalable web applications using React, TypeScript, and Express.js.
            </p>
          </Card>

          {/* Education */}
          <Card className="p-8 space-y-6 border-accent/20 hover:border-accent transition-all hover:shadow-xl hover:shadow-accent/10">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-xl font-semibold">Master's in Artificial Intelligence</h3>
                    <p className="text-muted-foreground">Higher School of Computer Science of Sidi Bel Abbes</p>
                  </div>
                  <Badge variant="outline" className="gap-1">
                    <Calendar className="h-3 w-3" />
                    2023 - Present
                  </Badge>
                </div>
                <div className="space-y-2 pt-2">
                  <p className="text-sm font-medium">Key Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Deep Learning",
                      "Natural Language Processing",
                      "Computer Vision",
                      "Machine Learning",
                      "Big Data Technologies",
                      "High Performance Computing",
                      "Cloud Computing",
                      "Data Security",
                    ].map((course) => (
                      <Badge
                        key={course}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Technical Skills */}
          <Card className="p-8 space-y-6 border-primary/20 hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/10">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">AI & Machine Learning</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Deep Learning",
                    "Neural Networks",
                    "NLP",
                    "Computer Vision",
                    "MLPs",
                    "TensorFlow",
                    "PyTorch",
                    "Scikit-learn",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "TypeScript", "Next.js", "Express.js", "Node.js", "REST APIs", "GraphQL"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "JavaScript", "TypeScript", "SQL"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "PostgreSQL", "MongoDB", "Redis", "AWS", "Linux"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Projects */}
          <Card className="p-8 space-y-6 border-accent/20 hover:border-accent transition-all hover:shadow-xl hover:shadow-accent/10">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Rakabni - Transportation Platform</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Multidisciplinary project from 2nd year at ESI. A comprehensive transportation and ride-sharing
                  platform built with modern web technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    HTML
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    CSS
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    JavaScript
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">ML-IASD-2CS-ESI-SBA</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Machine Learning projects and implementations from the AI and Data Science curriculum at ESI-SBA.
                  Includes various ML algorithms and data analysis notebooks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Jupyter Notebook
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Machine Learning
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">StockXpert - Inventory Management</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Inventory management system for ESI-SBA. A full-stack application for managing store inventory,
                  tracking products, and generating reports.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Express.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MongoDB
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Languages */}
          <Card className="p-8 space-y-4 border-primary/20 hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/10">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Languages
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold">Arabic</p>
                <p className="text-sm text-muted-foreground">Native</p>
              </div>
              <div>
                <p className="font-semibold">French</p>
                <p className="text-sm text-muted-foreground">Fluent</p>
              </div>
              <div>
                <p className="font-semibold">English</p>
                <p className="text-sm text-muted-foreground">Professional</p>
              </div>
            </div>
          </Card>

          {/* Download CTA */}
          <Card className="p-8 text-center space-y-4 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/30 shadow-xl shadow-primary/10">
            <Download className="h-12 w-12 mx-auto text-primary" />
            <h3 className="text-xl font-bold">Download Full Resume</h3>
            <p className="text-muted-foreground">Get the complete PDF version of my resume</p>
            <Button size="lg" className="gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/20">
              <Download className="h-4 w-4" />
              Download PDF Resume
            </Button>
          </Card>
        </div>
      </section>
    </main>
  )
}
