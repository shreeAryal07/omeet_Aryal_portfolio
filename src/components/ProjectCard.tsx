import { ArrowUpRight, Code2, MonitorPlay } from 'lucide-react'
import type { Project } from '../data/site'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card-enter group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20 transition duration-300 ease-out hover:-translate-y-1 hover:border-white/15 hover:shadow-xl hover:shadow-slate-950/40 sm:p-7">
      <img
        src={project.imageSrc}
        alt={project.imageAlt}
        className="mb-5 aspect-video w-full rounded-2xl object-cover object-center"
      />
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          {project.status}
        </span>
      </div>

      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-cyan-100">
          {project.title}
        </h3>
        <p className="mt-2 text-sm font-medium leading-6 text-slate-400">
          {project.objective}
        </p>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          {project.status === 'Published project' ? 'Tools used' : 'Tools to explore'}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-200 ring-1 ring-inset ring-white/5"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {project.learned ? (
        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            What I learned
          </p>
          <ul className="space-y-2 text-sm leading-6 text-slate-300">
            {project.learned.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-auto flex flex-wrap gap-3 pt-7">
        {project.projectUrl ? (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2.5 text-sm font-medium text-white transition duration-200 hover:bg-slate-700"
          >
            View Project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
        {project.sourceUrl ? (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition duration-200 hover:bg-cyan-300"
          >
            Source Code
            <Code2 className="h-4 w-4" />
          </a>
        ) : null}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2.5 text-sm font-medium text-white transition duration-200 hover:bg-slate-700"
          >
            Live Dashboard
            <MonitorPlay className="h-4 w-4" />
          </a>
        ) : null}
      </div>
    </article>
  )
}
