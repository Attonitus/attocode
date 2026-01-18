import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    name: "Platform SaaS",
    image: "/perzona.webp",
    tags: ["Next.js", "PostgreSQL", "Auth"],
    link: "#",
  },
  {
    name: "Herramienta de gestión gerencial",
    image: "/inteligencia.webp",
    tags: ["React.js", "PostgreSQL", "Auth"],
    link: "https://inteligenciagerencial.com.mx/",
  },
  {
    name: "Landing Page",
    image: "/atto_code.webp",
    tags: ["Next.js"],
    link: "https://attocode.lat",
  },
]

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Nuestros Proyectos</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Trabajos recientes que demuestran nuestra experiencia y capacidades
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              target="_blank"
              key={project.name}
              href={project.link}
              className="group overflow-hidden rounded-lg border border-white/20 hover:border-white/40 transition bg-white/2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-white/5">
                <Image
                  width={192}
                  height={50}
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold group-hover:text-white/80 transition">{project.name}</h3>
                  <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-white/60 transition flex-shrink-0" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
