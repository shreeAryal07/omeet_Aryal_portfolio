import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Database,
  FileSpreadsheet,
  GraduationCap,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeader } from './components/SectionHeader'
import {
  contactEmail,
  experienceItems,
  navigation,
  profileHighlights,
  profilePhotoPath,
  projects,
  skillGroups,
  socialLinks,
} from './data/site'

function GitHubIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.31-3.37-1.31-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.25-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.37 9.37 0 0 1 12 6.75c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.04 2.74-1.04.55 1.4.2 2.45.1 2.7.64.72 1.02 1.64 1.02 2.76 0 3.96-2.35 4.82-4.58 5.07.36.32.68.96.68 1.94v2.88c0 .26.18.59.69.48A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

function FacebookIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.2c0-.9.3-1.5 1.7-1.5H16v-2.8c-.3-.1-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V9.9H7v3.1h2.3v8h4.2Z" />
    </svg>
  )
}

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
}

const currentYear = new Date().getFullYear()

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={profilePhotoPath}
              alt="Portrait of Omeet Aryal"
              className="h-10 w-10 shrink-0 rounded-full border border-cyan-400/40 object-cover object-center"
            />
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Omeet
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeNav === item.href ? 'location' : undefined}
                onClick={() => setActiveNav(item.href)}
                className={`nav-link relative py-2 text-sm font-medium transition ${
                  activeNav === item.href
                    ? 'text-cyan-100'
                    : 'text-slate-300 hover:text-cyan-200'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 md:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div id="mobile-navigation" className="border-t border-white/10 bg-slate-950 px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={activeNav === item.href ? 'location' : undefined}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                    activeNav === item.href
                      ? 'bg-cyan-400/10 text-cyan-100'
                      : 'text-slate-200 hover:bg-slate-900 hover:text-cyan-200'
                  }`}
                  onClick={() => {
                    setActiveNav(item.href)
                    setMenuOpen(false)
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" />
                Data-driven thinking
              </div>

              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Omeet Aryal
              </h1>
              <p className="mt-4 text-xl font-medium text-cyan-200">
                Aspiring Data Analyst | Building Toward Data Science
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                I explore data, build analytical projects, and create visualizations that turn
                information into meaningful insights. Through Python, Excel, SQL, and Power BI,
                I am developing practical skills in data analysis and working toward a career in
                data science.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore My Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  Connect With Me
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 text-slate-300">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon]
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm transition hover:border-cyan-500 hover:text-cyan-200"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-emerald-500/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-cyan-100/15 bg-[linear-gradient(145deg,rgba(15,30,48,0.96),rgba(5,15,29,0.96)_55%,rgba(7,30,34,0.94))] p-5 shadow-[0_28px_90px_rgba(2,12,27,0.65),0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-2xl sm:p-7">
                <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-14 h-52 w-52 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-5 flex items-end justify-between gap-3">
                    <div>
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                        Insights
                      </p>
                      <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        Tools for thoughtful analysis
                      </h2>
                    </div>
                    <BarChart3 className="mb-1 h-5 w-5 shrink-0 text-teal-200" aria-hidden="true" />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        name: 'Python',
                        detail: 'Explore datasets and build visual summaries.',
                        icon: Code2,
                        cardTone:
                          'border-cyan-300/15 hover:border-cyan-200/35',
                        iconTone:
                          'border-cyan-300/20 bg-cyan-400/10 text-cyan-200 group-hover:bg-cyan-400/15',
                        arrowTone: 'group-hover:text-cyan-200',
                      },
                      {
                        name: 'Excel',
                        detail: 'Organize and prepare data for analysis.',
                        icon: FileSpreadsheet,
                        cardTone:
                          'border-emerald-300/15 hover:border-emerald-200/35',
                        iconTone:
                          'border-emerald-300/20 bg-emerald-400/10 text-emerald-200 group-hover:bg-emerald-400/15',
                        arrowTone: 'group-hover:text-emerald-200',
                      },
                      {
                        name: 'SQL',
                        detail: 'Query and shape structured data.',
                        icon: Database,
                        cardTone:
                          'border-teal-300/15 hover:border-teal-200/35',
                        iconTone:
                          'border-teal-300/20 bg-teal-400/10 text-teal-200 group-hover:bg-teal-400/15',
                        arrowTone: 'group-hover:text-teal-200',
                      },
                      {
                        name: 'Data Analysis',
                        detail: 'Find patterns and communicate useful insights.',
                        icon: BarChart3,
                        cardTone: 'border-sky-300/15 hover:border-sky-200/35',
                        iconTone:
                          'border-sky-300/20 bg-sky-400/10 text-sky-200 group-hover:bg-sky-400/15',
                        arrowTone: 'group-hover:text-sky-200',
                      },
                    ].map(({ name, detail, icon: Icon, cardTone, iconTone, arrowTone }) => (
                      <div
                        key={name}
                        className={`insight-card group relative flex min-h-28 items-start gap-3 overflow-hidden rounded-2xl border bg-white/[0.035] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-lg transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07] hover:shadow-[0_12px_30px_rgba(2,8,23,0.3),0_0_22px_rgba(34,211,238,0.08)] ${cardTone}`}
                      >
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition duration-300 group-hover:scale-105 ${iconTone}`}>
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block pr-5 text-sm font-semibold text-slate-100">
                            {name}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-slate-400">
                            {detail}
                          </span>
                        </span>
                        <ArrowUpRight className={`absolute right-3 top-3 h-4 w-4 text-slate-500 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${arrowTone}`} aria-hidden="true" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 sm:p-5">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="text-base font-semibold tracking-tight text-white">
                          Problem Solving
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          A clear, repeatable path from raw data to useful insight.
                        </p>
                      </div>
                      <span className="rounded-full border border-teal-200/15 bg-teal-300/[0.07] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-100/80">
                        Workflow
                      </span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {['Clean data', 'Explore trends', 'Visualize insights'].map((step, index) => (
                        <div key={step} className="flex items-center gap-3 rounded-xl bg-white/[0.035] px-3 py-2.5">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-300/10 text-xs font-semibold text-cyan-100 shadow-[0_0_16px_rgba(34,211,238,0.08)]">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="text-sm font-medium text-slate-200">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="About Me"
            title="Learning through practice, curiosity, and clear analysis."
            description="I am a BSc CSIT student in Nepal with a growing interest in data analysis and data science. My learning journey is focused on building useful projects, understanding data deeply, and turning information into meaningful decisions."
          />

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                My academic path is helping me build a strong foundation in computing, logic, and
                analytical problem solving. I enjoy working with real datasets, identifying patterns,
                and finding ways to communicate results clearly through dashboards and visual
                summaries.
              </p>
              <p>
                I am especially interested in Python, data cleaning, EDA, statistics, and data
                visualization. I want to keep learning by creating practical projects that connect
                technical skills with real-world questions.
              </p>
            </div>

            <div className="grid gap-4">
              {profileHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {item.label}
                  </p>
                  <p className="mt-3 text-xl font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Skills"
            title="A practical skill set built for analysis and impact."
            description="My current strengths are focused on data preparation, storytelling, and using tools that help me learn by doing."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                  {group.title.includes('Programming') ? <Database className="h-5 w-5" /> : group.title.includes('Visualization') ? <BarChart3 className="h-5 w-5" /> : group.title.includes('Foundations') ? <BriefcaseBusiness className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                </div>
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Projects"
            title="Projects that strengthen my analytical workflow."
            description="One repository is published; the other cards are clearly marked project ideas pending dataset selection or source verification."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Leadership and Activities"
            title="Growing beyond the classroom through participation and responsibility."
            description="I am learning how to contribute, collaborate, and support others while building my technical skills and communication strengths."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {experienceItems.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-200">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                  {item.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-24 pt-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-cyan-500/20 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Contact
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                  Let’s connect and build something meaningful.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  I am actively learning, exploring data projects, and looking for opportunities to
                  grow through practical work and collaboration.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${contactEmail}`}
                  aria-label={`Email ${contactEmail}`}
                  className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="break-all">{contactEmail}</span>
                </a>
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon]
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-cyan-400 hover:text-cyan-200"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold uppercase tracking-[0.24em] text-slate-200">Omeet Aryal</p>
            <p className="mt-2">Aspiring Data Analyst | Building Toward Data Science</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-cyan-200">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>

          <p>© {currentYear} Omeet Aryal</p>
        </div>
      </footer>
    </div>
  )
}

export default App
