import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function SectionTitle({ eyebrow, title, copy, align = 'left' }) {
  return <div className={`section-title ${align === 'center' ? 'text-center mx-auto' : ''}`}>
    {eyebrow && <p className="eyebrow"><span />{eyebrow}</p>}
    <h2>{title}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </div>
}

export function Button({ children, href = '#contact', outline = false, className = '' }) {
  return <a href={href} className={`button ${outline ? 'button-outline' : ''} ${className}`}>
    {children}<ArrowUpRight size={17} strokeWidth={2.4} />
  </a>
}

export const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: .55, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>
)
