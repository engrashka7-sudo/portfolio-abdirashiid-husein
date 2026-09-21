import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Tools } from './components/Tools'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const routes = { '/about': About, '/skills': Skills, '/tools': Tools, '/services': Services, '/projects': Projects, '/experience': Experience, '/contact': Contact }

export default function App() {
  const Page = routes[window.location.pathname] || Hero
  return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content" className="overflow-x-clip page-main"><Page /></main><Footer /></MotionConfig>
}
