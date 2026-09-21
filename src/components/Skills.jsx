import { motion } from 'framer-motion'
import { Aperture, Braces, Clapperboard, Code2, Database, Film, FileCode2, Figma, GitBranch, MonitorSmartphone, Palette, PenTool, ServerCog, Share2, Sparkles, TerminalSquare, WandSparkles } from 'lucide-react'
import { Reveal, SectionTitle } from './ui'

const multimediaSkills = [
  [Palette, 'Graphic Design', 'Visual design crafted to communicate clearly and leave an impression.'],
  [Clapperboard, 'Video Editing', 'Thoughtful editing that gives visual stories pace, clarity and flow.'],
  [WandSparkles, 'Motion Graphics', 'Purposeful motion that brings ideas and visual systems to life.'],
  [Film, 'Visual Storytelling', 'Turning concepts into engaging, coherent visual narratives.'],
  [PenTool, 'Branding', 'Building visual foundations that help ideas feel distinct and consistent.'],
  [Share2, 'Social Media Design', 'Creating considered visual content for social media communication.'],
]

const developmentSkills = [
  [FileCode2, 'HTML', 'Semantic structure for accessible, well-organized web experiences.'],
  [Aperture, 'CSS', 'Responsive layouts and visual detail built for every screen size.'],
  [Braces, 'JavaScript', 'Interactive interfaces and practical browser-based functionality.'],
  [Code2, 'React', 'Component-based interfaces for modern web applications.'],
  [ServerCog, 'Node.js', 'JavaScript-powered server-side development.'],
  [TerminalSquare, 'Express.js', 'Structured web application routes and backend foundations.'],
  [Database, 'MongoDB', 'Flexible data storage for web-based applications.'],
  [GitBranch, 'REST APIs', 'Connecting systems through clear, resource-based interfaces.'],
  [GitBranch, 'Git & GitHub', 'Version control and collaborative code workflows.'],
  [MonitorSmartphone, 'Responsive Web Design', 'Interfaces made to work smoothly across devices.'],
]

function SkillGroup({ label, title, skills, variant }) {
  return <div className={`skill-group skill-group-${variant}`}>
    <div className="skill-group-head"><p><span /> {label}</p><h3>{title}</h3><span>{String(skills.length).padStart(2, '0')} skills</span></div>
    <div className="premium-skill-grid">{skills.map(([Icon, name, description], index) => <motion.article key={name} className="premium-skill-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: Math.min(index * .045, .34), duration: .4 }} whileHover={{ y: -5 }}><div className="skill-card-top"><div className="premium-skill-icon"><Icon size={20} /></div><span>{String(index + 1).padStart(2, '0')}</span></div><h4>{name}</h4><p>{description}</p><div className="skill-card-line"><i /></div></motion.article>)}</div>
  </div>
}

export function Skills() {
  return <section id="skills" className="section skills-premium-section"><div className="shell"><Reveal><SectionTitle eyebrow="My Skills" title={<>Creative skills meet<br /><em>modern technology.</em></>} copy="A multidisciplinary toolkit for creating visual stories and building thoughtful digital products." /></Reveal><div className="skills-discipline-note"><Sparkles size={15} /> Two disciplines. One connected approach.</div><div className="skills-groups"><SkillGroup label="MULTIMEDIA" title="Visual & creative craft" skills={multimediaSkills} variant="creative" /><SkillGroup label="FULL STACK DEVELOPMENT" title="Digital product building" skills={developmentSkills} variant="development" /></div></div></section>
}
