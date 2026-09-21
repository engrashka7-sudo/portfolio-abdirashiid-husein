import { motion } from 'framer-motion'
import { ArrowDown, Braces, Download, Facebook, Github, Instagram, Linkedin, Palette, Play, Sparkles } from 'lucide-react'
import { Button } from './ui'
import { contactDetails } from '../data/contact'

const fadeUp = { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 } }

export function Hero() {
  return <section id="home" className="hero shell hero-new">
    <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
    <div className="hero-grid hero-new-grid">
      <div className="hero-content">
        <motion.div className="hero-topline" {...fadeUp} transition={{ duration: .5 }}><span className="availability-dot" /> Available for Projects</motion.div>
        <motion.p className="hero-kicker" {...fadeUp} transition={{ delay: .1, duration: .55 }}><Sparkles size={15} /> Creative technology, thoughtfully made</motion.p>
        <h1 className="intro-title"><motion.span {...fadeUp} transition={{ delay: .16, duration: .6 }}>Hi, I&apos;m <b>Abdirashiid</b></motion.span><motion.strong {...fadeUp} transition={{ delay: .26, duration: .65 }}>Multimedia Specialist<br /><i>&amp; Full Stack Web Developer</i></motion.strong></h1>
        <motion.p className="hero-copy" {...fadeUp} transition={{ delay: .38, duration: .55 }}>I create impactful visual experiences and modern digital products through graphic design, video editing, motion graphics, and full stack web development.</motion.p>
        <motion.div className="hero-actions" {...fadeUp} transition={{ delay: .48, duration: .55 }}><Button href="/projects">View My Work</Button><Button href="/contact" outline>Let&apos;s Work Together</Button></motion.div>
        <motion.div className="hero-utility" {...fadeUp} transition={{ delay: .58, duration: .55 }}>{contactDetails.cvUrl ? <a className="cv-link" href={contactDetails.cvUrl} download><Download size={15} /> Download CV</a> : <a className="cv-link" href="/contact"><Download size={15} /> Request CV</a>}<div className="social-links">{[[Github, 'GitHub'], [Linkedin, 'LinkedIn'], [Facebook, 'Facebook'], [Instagram, 'Instagram']].map(([Icon, label]) => { const social = contactDetails.socials.find((item) => item.label === label); return social?.url ? <a href={social.url} key={label} aria-label={label} target="_blank" rel="noreferrer"><Icon size={16} /></a> : <span key={label} title={`Add your ${label} URL in src/data/contact.js`} aria-label={`${label} link not configured`}><Icon size={16} /></span> })}</div></motion.div>
      </div>
      <motion.div className="creative-visual" initial={{ opacity: 0, scale: .92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: .24, duration: .8, ease: [0.22, 1, 0.36, 1] }}>
        <motion.div className="visual-ring" animate={{ rotate: 360 }} transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}><span>DESIGN · CODE · MOTION · CREATE · </span></motion.div>
        <div className="visual-core"><div className="core-grid" /><div className="core-shape shape-a" /><div className="core-shape shape-b" /><span className="core-name">AH<span>.</span></span><span className="core-caption">Creative<br />Developer</span></div>
        <motion.div className="code-card float-card" animate={{ y: [0, -9, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}><div className="code-dots"><i /><i /><i /></div><code><em>const</em> idea = <br /><span>design</span> + code;</code><Braces size={16} /></motion.div>
        <motion.div className="design-card float-card" animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: .5 }}><Palette size={20}/><div><span>VISUAL</span><strong>CRAFT</strong></div></motion.div>
        <motion.div className="motion-card float-card" animate={{ rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}><Play size={13} fill="currentColor" /><span>Motion</span></motion.div>
        <div className="tech-pills"><span>React</span><span>UI/UX</span><span>After Effects</span></div>
      </motion.div>
    </div>
    <div className="hero-footer hero-new-footer"><div className="scroll-note"><ArrowDown size={16} /> Scroll to explore</div><span>DESIGN <i /> DEVELOPMENT <i /> MOTION</span><span className="hero-number">01 / 07</span></div>
  </section>
}
