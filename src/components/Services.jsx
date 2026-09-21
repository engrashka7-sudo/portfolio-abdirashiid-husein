import { motion } from 'framer-motion'
import { ArrowUpRight, Clapperboard, Globe2, Layers3, Palette, Sparkles, WandSparkles } from 'lucide-react'
import { Reveal, SectionTitle } from './ui'

const services = [
  [Palette, 'Graphic Design', 'Modern visual designs for brands, businesses and digital platforms.'],
  [Clapperboard, 'Video Editing', 'Professional video editing with engaging transitions, storytelling and visual effects.'],
  [WandSparkles, 'Motion Graphics', 'Dynamic animations, typography and motion graphics for digital content.'],
  [Globe2, 'Web Design', 'Modern responsive interfaces focused on usability and visual quality.'],
  [Layers3, 'Full Stack Development', 'Complete web applications with modern frontend and backend technologies.'],
  [Sparkles, 'Creative Digital Solutions', 'Combining design, motion and technology to create complete digital experiences.'],
]

export function Services() {
  return <section id="services" className="section services-premium-section"><div className="shell"><Reveal><SectionTitle eyebrow="Services" title={<>What <em>I Do.</em></>} copy="From a single visual asset to a complete digital experience, I bring creative direction and technical execution into one focused process." /></Reveal><div className="services-premium-grid">{services.map(([Icon, title, description], index) => <motion.article key={title} className="service-premium-card" initial={{ opacity: 0, y: 23 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: index * .07, duration: .45 }} whileHover={{ y: -7 }}><div className="service-card-top"><div className="service-premium-icon"><Icon size={24} /></div><span>{String(index + 1).padStart(2, '0')}</span></div><h3>{title}</h3><p>{description}</p><a href="/contact" aria-label={`Discuss ${title}`} className="service-arrow"><span>Explore service</span><ArrowUpRight size={20} /></a></motion.article>)}</div></div></section>
}
