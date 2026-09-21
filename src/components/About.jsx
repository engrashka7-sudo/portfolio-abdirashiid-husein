import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, BadgeCheck, MapPin, Sparkles } from 'lucide-react'
import { Reveal, SectionTitle } from './ui'

const profile = [
  ['Name', 'Abdirashiid Husein'],
  ['Role', 'Multimedia Specialist & Full Stack Web Developer'],
  ['Based in', 'Mogadishu, Somalia'],
  ['Focus', 'Creative Design & Digital Products'],
  ['Experience', '2+ Years Creative Experience'],
  ['Education', 'Full Stack Web Development'],
]

const stats = [
  [20, '+', 'Creative Projects'],
  [10, '+', 'Web Projects'],
  [4, '+', 'Core Skills'],
  [100, '%', 'Passion'],
]

function AnimatedNumber({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: .6 })
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!isInView) return undefined
    const startedAt = performance.now()
    const duration = 1150
    let animationFrame
    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) animationFrame = requestAnimationFrame(tick)
    }
    animationFrame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value])
  return <strong ref={ref}>{display}{suffix}</strong>
}

export function About() {
  return <section id="about" className="section shell about-profile-section">
    <Reveal><SectionTitle eyebrow="About Me" title={<>Creative mind.<br /><em>Technical builder.</em></>} /></Reveal>
    <div className="about-profile-layout">
      <Reveal className="about-profile-copy" delay={.08}>
        <p className="about-lead">I&apos;m Abdirashiid Husein, a multimedia specialist and full stack web developer who brings creative thinking and practical technical execution together.</p>
        <p>I work across design, motion, video and web development to shape visual experiences and digital products with clarity and purpose. Whether I&apos;m developing a visual direction or building an interactive interface, I approach each project with care, curiosity and a problem-solving mindset.</p>
        <p>My strength is moving comfortably between creative and technical fields — translating ideas into work that is expressive, functional and made for the people who use it.</p>
        <a href="/contact" className="text-link">Let&apos;s work together <ArrowUpRight size={16} /></a>
      </Reveal>
      <Reveal className="profile-card" delay={.15}>
        <div className="profile-card-head"><div className="profile-monogram">AH<span>.</span></div><div><p><Sparkles size={13} /> PROFILE</p><strong>Creative / Developer</strong></div></div>
        <div className="profile-details">{profile.map(([label, value]) => <div key={label}><span>{label}</span><p>{label === 'Based in' && <MapPin size={13} />}{value}</p></div>)}</div>
        <div className="profile-card-foot"><BadgeCheck size={17} /><span>Available for creative and digital projects</span></div>
      </Reveal>
    </div>
    <div className="about-stats">{stats.map(([value, suffix, label], index) => <motion.div key={label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ delay: index * .08, duration: .45 }}><AnimatedNumber value={value} suffix={suffix} /><p>{label}</p></motion.div>)}</div>
  </section>
}
