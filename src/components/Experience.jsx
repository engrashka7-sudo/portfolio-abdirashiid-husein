import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Reveal, SectionTitle } from './ui'
import { experience } from '../data/experience'

export function Experience() {
  return <section id="experience" className="section journey-section"><div className="shell"><Reveal><SectionTitle eyebrow="Experience" title={<>My <em>Journey.</em></>} copy="A connected path across visual creativity and digital product development." /></Reveal><div className="journey-timeline">{experience.map((item, index) => <motion.article className="journey-item" key={item.focus} initial={{ opacity: 0, x: index % 2 ? 24 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .5, delay: .08 }}><div className="journey-date"><span>{item.year}</span><i>{String(index + 1).padStart(2, '0')}</i></div><div className="journey-line"><b /></div><div className="journey-content"><p>{item.focus}</p><h3>{item.role}</h3><span>{item.description}</span><div className="journey-skills">{item.skills.map((skill) => <i key={skill}>{skill}</i>)}</div></div></motion.article>)}</div><Reveal><div className="journey-end"><ArrowDown size={15} /> Continuing to learn, create and build.</div></Reveal></div></section>
}
