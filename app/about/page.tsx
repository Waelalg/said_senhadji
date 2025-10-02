import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function AboutPage() {
  const technologies = {
    "AI & Machine Learning": [
      {
        name: "TensorFlow",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      {
        name: "Scikit-learn",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
    ],
    "Frontend Development": [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    ],
    "Backend Development": [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    "Tools & Technologies": [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ],
  }

  const expertise = [
    "Deep Learning & Neural Networks",
    "Natural Language Processing (NLP)",
    "Computer Vision & Image Processing",
    "Machine Learning Algorithms",
    "Big Data Technologies",
    "High Performance Computing",
    "Cloud & Fog Computing",
    "Data Visualization & Analytics",
    "Full-Stack Web Development",
    "RESTful API Development",
    "Database Design & Management",
    "Software Engineering Best Practices",
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* About Hero with Image */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-balance">About Me</h1>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm <span className="text-foreground font-semibold">SENHADJI Said</span>, a passionate{" "}
                  <span className="text-foreground font-semibold">AI student</span> at the{" "}
                  <span className="text-primary font-semibold">
                    Higher School of Computer Science of Sidi Bel Abbes
                  </span>
                  , where I'm pursuing advanced studies in Artificial Intelligence and Computer Science.
                </p>

                <p>
                  My journey in technology is driven by a deep fascination with{" "}
                  <span className="text-foreground font-semibold">
                    Machine Learning, Deep Learning, and Natural Language Processing
                  </span>
                  . I love exploring how AI can transform the way we interact with technology.
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-3xl" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                  <Image
                    src="/images/ai-education.jpg"
                    alt="AI Education and Learning"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              As a <span className="text-foreground font-semibold">freelance web developer</span>, I combine my AI
              expertise with modern web technologies to build intelligent, scalable applications. I specialize in{" "}
              <span className="text-foreground font-semibold">React.js, TypeScript, Next.js, and Express.js</span>,
              creating seamless user experiences backed by powerful AI capabilities.
            </p>

            <p>
              I'm constantly learning and experimenting with cutting-edge technologies, from{" "}
              <span className="text-foreground font-semibold">Computer Vision</span> to{" "}
              <span className="text-foreground font-semibold">Cloud Computing</span>, always seeking to push the
              boundaries of what's possible with code.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Areas of Expertise</h2>
            <p className="text-lg text-muted-foreground">Strong knowledge and hands-on experience in</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all cursor-default hover:scale-105 border border-border hover:border-transparent"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Technologies & Tools</h2>
            <p className="text-lg text-muted-foreground">The technologies I work with daily</p>
          </div>

          <div className="space-y-12">
            {Object.entries(technologies).map(([category, tools]) => (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {category}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                  {tools.map((tool) => (
                    <Card
                      key={tool.name}
                      className="p-6 flex flex-col items-center justify-center gap-3 border-2 hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all hover:scale-110 group"
                    >
                      <div className="relative w-12 h-12 group-hover:scale-110 transition-transform">
                        <Image src={tool.logo || "/placeholder.svg"} alt={tool.name} fill className="object-contain" />
                      </div>
                      <span className="text-sm font-medium text-center">{tool.name}</span>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Contributions */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-transparent to-accent/5">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">GitHub Activity</h2>
            <p className="text-lg text-muted-foreground">My contribution graph</p>
          </div>

          <Card className="p-6 overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10">
            <div className="w-full aspect-[3/1] bg-muted rounded-lg flex items-center justify-center">
              <img
                src="https://ghchart.rshah.org/8b5cf6/SenhadjiMSaid"
                alt="GitHub Contribution Graph"
                className="w-full h-auto"
              />
            </div>
          </Card>

          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="p-6 text-center space-y-2 border-2 border-primary/30 hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </Card>
            <Card className="p-6 text-center space-y-2 border-2 border-accent/30 hover:border-accent transition-all hover:shadow-xl hover:shadow-accent/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-sm text-muted-foreground">Commits This Year</div>
            </Card>
            <Card className="p-6 text-center space-y-2 border-2 border-primary/30 hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/20">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-sm text-muted-foreground">Open Source Contributions</div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
