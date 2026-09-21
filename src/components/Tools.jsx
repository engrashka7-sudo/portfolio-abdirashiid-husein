import { motion } from 'framer-motion'
import { Box, Code2, Database, Figma, FileCode2, Film, GitBranch, Image, Layers3, Palette, Server, TerminalSquare, Type } from 'lucide-react'
import { Reveal, SectionTitle } from './ui'

const creativeTools = [
  [Layers3, 'Adobe After Effects', 'Ae'],
  [Film, 'Adobe Premiere Pro', 'Pr'],
  [Image, 'Adobe Photoshop', 'Ps'],
  [Palette, 'Adobe Illustrator', 'Ai'],
  [Figma, 'Figma', 'Fg'],
]
const developmentTools = [
  [FileCode2, 'HTML', 'HTML'],
  [Type, 'CSS', 'CSS'],
  [Code2, 'JavaScript', 'JS'],
  [Box, 'React', 'R'],
  [Server, 'Node.js', 'N'],
  [TerminalSquare, 'Express', 'Ex'],
  [Database, 'MongoDB', 'DB'],
  [GitBranch, 'Git', 'Git'],
  [GitBranch, 'GitHub', 'GH'],
]
function ToolGroup({ title, tools, variant }) { return <div className={`tool-group tool-group-${variant}`}><div className="tool-group-label"><span />{title}</div><div className="tools-grid">{tools.map(([Icon, name, mark], index) => <motion.article className="tool-card" key={name} initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .35, delay: Math.min(index * .04, .25) }} whileHover={{ y: -4 }}><div className="tool-icon"><Icon size={20} /><b>{mark}</b></div><p>{name}</p></motion.article>)}</div></div> }
export function Tools() { return <section className="section tools-section"><div className="shell"><Reveal><SectionTitle eyebrow="Toolkit" title={<>Tools I <em>Work With.</em></>} copy="The creative applications and development technologies I use across visual and digital work." /></Reveal><div className="tools-layout"><ToolGroup title="Creative Tools" tools={creativeTools} variant="creative" /><ToolGroup title="Development Tools" tools={developmentTools} variant="development" /></div></div></section> }
