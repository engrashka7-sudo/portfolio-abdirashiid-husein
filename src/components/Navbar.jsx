import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [['/', 'Home'], ['/about', 'About'], ['/skills', 'Skills'], ['/tools', 'Tools'], ['/services', 'Services'], ['/projects', 'Projects'], ['/experience', 'Experience'], ['/contact', 'Contact']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const currentPath = window.location.pathname
  return <header className="nav-wrap"><nav className="nav shell" aria-label="Main navigation"><a href="/" className="logo" aria-label="Abdirashiid Husein home">AH<span>.</span></a><div className="nav-links">{links.map(([path, label]) => <a key={path} className={currentPath === path ? 'active' : ''} href={path}>{label}</a>)}</div><a className="nav-cta" href="/contact">Let&apos;s talk <span>↗</span></a><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button></nav><AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>{links.map(([path, label]) => <a key={path} href={path} onClick={() => setOpen(false)}>{label}</a>)}</motion.div>}</AnimatePresence></header>
}
