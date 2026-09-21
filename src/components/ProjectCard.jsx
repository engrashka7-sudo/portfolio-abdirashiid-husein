import { ArrowUpRight, Github } from 'lucide-react'
import { motion } from 'framer-motion'

export function ProjectCard({ project, onOpen }) {
  return <motion.article className="real-project-card" layout whileHover={{ y: -7 }} transition={{ duration: .22 }}>
    <button className={`project-thumbnail project-visual-${project.visual}`} onClick={() => onOpen(project)} aria-label={`View details for ${project.name}`}>
      {project.video ? <video className="project-video" src={project.video} muted loop playsInline preload="metadata" aria-label={`${project.name} motion graphics preview`} onMouseEnter={(event) => event.currentTarget.play()} onMouseLeave={(event) => { event.currentTarget.pause(); event.currentTarget.currentTime = 0 }} /> : project.image && <img src={project.image} alt={`${project.name} project preview`} onError={(event) => { event.currentTarget.style.display = 'none' }} />}
      {!project.video && <div className="placeholder-ui"><span className="placeholder-brand">{project.name.split(' ').slice(0, 2).join(' ')}</span><div className="placeholder-lines"><i /><i /><i /></div><b>{project.type}</b></div>}
      <div className="thumbnail-overlay"><span>View project <ArrowUpRight size={18} /></span>{project.github && <Github size={21} />}</div>
    </button>
    <div className="real-project-info"><p className="project-category">{project.categoryLabel}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="project-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}<i>•</i><span>{project.type}</span></div><div className="project-actions"><button onClick={() => onOpen(project)} className="project-view">View Project <ArrowUpRight size={16} /></button>{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="project-github"><Github size={16} /> GitHub</a>}</div></div>
  </motion.article>
}
