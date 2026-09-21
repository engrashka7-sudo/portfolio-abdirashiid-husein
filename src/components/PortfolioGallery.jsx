import { useState } from 'react'
import { Play } from 'lucide-react'
import { portfolioMedia } from '../data/media'

export function PortfolioGallery() {
  const [filter, setFilter] = useState('All')
  const visible = portfolioMedia.filter((item) => filter === 'All' || item.type === filter)
  return <section className="portfolio-library" aria-labelledby="portfolio-library-title"><div className="library-heading"><div><p className="eyebrow"><span /> Full media library</p><h2 id="portfolio-library-title">All uploaded work.</h2></div><p>{portfolioMedia.length} files from your Design, Motion and Video folders.</p></div><div className="project-filters"><button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button><button className={filter === 'Design' ? 'active' : ''} onClick={() => setFilter('Design')}>Design</button><button className={filter === 'Motion / Video' ? 'active' : ''} onClick={() => setFilter('Motion / Video')}>Motion & Video</button></div><div className="portfolio-media-grid">{visible.map((item) => <article className="portfolio-media-item" key={item.id}>{item.type === 'Design' ? <img src={encodeURI(item.src)} alt={item.label} loading="lazy" /> : <video src={encodeURI(item.src)} muted loop playsInline preload="none" onMouseEnter={(event) => event.currentTarget.play()} onMouseLeave={(event) => { event.currentTarget.pause(); event.currentTarget.currentTime = 0 }} aria-label={item.label} />}<div><span>{item.type}</span><p>{item.label}</p>{item.type !== 'Design' && <Play size={14} fill="currentColor" />}</div></article>)}</div></section>
}
