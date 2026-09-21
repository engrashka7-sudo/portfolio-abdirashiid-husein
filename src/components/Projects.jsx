import { useMemo, useState } from 'react'
import { Reveal, SectionTitle } from './ui'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import { projectFilters, projects } from '../data/projects'
import { PortfolioGallery } from './PortfolioGallery'

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const visibleProjects = useMemo(() => projects.filter((project) => activeFilter === 'All' || project.filter === activeFilter), [activeFilter])

  return <section id="projects" className="section projects-section real-projects-section"><div className="shell">
    <div className="projects-heading real-project-heading"><Reveal><SectionTitle eyebrow="Selected Work" title={<>Selected <em>Work.</em></>} /></Reveal><Reveal delay={.15}><p>A collection of creative and technical projects.</p></Reveal></div>
    <Reveal delay={.2}><div className="project-filters" role="tablist" aria-label="Filter projects">{projectFilters.map((filter) => <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}>{filter}</button>)}</div></Reveal>
    <div className="real-project-grid">{visibleProjects.map((project, index) => <Reveal key={project.id} delay={Math.min(index * .07, .28)}><ProjectCard project={project} onOpen={setSelectedProject} /></Reveal>)}</div>
    <PortfolioGallery />
  </div><ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /></section>
}
