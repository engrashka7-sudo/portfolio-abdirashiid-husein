import { useState } from 'react'
import { AlertCircle, CheckCircle2, Facebook, Github, Instagram, Linkedin, LoaderCircle, Mail, MapPin, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, SectionTitle } from './ui'
import { contactDetails } from '../data/contact'

const fields = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'subject', label: 'Subject', type: 'text', required: true },
]
const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Facebook: Facebook, Instagram: Instagram }

export function Contact({ sendMessage }) {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const hasEmail = !contactDetails.email.includes('your-email@')
  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter a valid email address.'
    if (!values.subject.trim()) next.subject = 'Please add a subject.'
    if (!values.message.trim()) next.message = 'Please add a message.'
    return next
  }
  const submit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) { setStatus('error'); setMessage('Please review the highlighted fields and try again.'); return }
    setStatus('loading'); setMessage('')
    // Pass a sendMessage handler when connecting EmailJS, Formspree, or your own API.
    if (!sendMessage) { await new Promise((resolve) => setTimeout(resolve, 650)); setStatus('error'); setMessage('This contact form is ready to connect, but no delivery service has been configured yet. Please use the email contact details instead.'); return }
    try { await sendMessage(values); setStatus('success'); setMessage('Thank you — your message has been sent.'); setValues({ name: '', email: '', subject: '', message: '' }) } catch { setStatus('error'); setMessage('Your message could not be sent. Please try again or use the email contact details.') }
  }
  return <section id="contact" className="section contact-premium-section"><div className="shell"><Reveal><SectionTitle eyebrow="Contact" title={<>Let&apos;s Create<br /><em>Something Great.</em></>} copy="Have a project, idea, or opportunity? Let&apos;s talk." /></Reveal><div className="contact-layout"><Reveal className="contact-info" delay={.1}><p className="contact-cta">Available for freelance projects and creative collaborations.</p><div className="contact-info-list">{hasEmail ? <a href={`mailto:${contactDetails.email}`}><Mail size={18}/><div><span>Email</span><strong>{contactDetails.email}</strong></div></a> : <div title="Add your email in src/data/contact.js"><Mail size={18}/><div><span>Email</span><strong>{contactDetails.email}</strong></div></div>}<div><Phone size={18}/><div><span>Phone</span><strong>{contactDetails.phone}</strong></div></div><div><MapPin size={18}/><div><span>Location</span><strong>{contactDetails.location}</strong></div></div></div><div className="contact-socials"><span>Social links</span><div>{contactDetails.socials.map(({ label, url }) => { const Icon = socialIcons[label]; return url ? <a href={url} key={label} aria-label={label} target="_blank" rel="noreferrer">{Icon && <Icon size={17}/>} {label}</a> : <span className="social-unavailable" key={label} title={`Add your ${label} URL in src/data/contact.js`}>{Icon && <Icon size={17}/>} {label}</span> })}</div></div></Reveal><Reveal delay={.16}><form className="contact-form" onSubmit={submit} noValidate>{fields.map((field) => <label key={field.name}>{field.label}<input type={field.type} name={field.name} value={values[field.name]} onChange={(event) => { setValues({ ...values, [field.name]: event.target.value }); setErrors({ ...errors, [field.name]: '' }) }} className={errors[field.name] ? 'invalid' : ''} aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined} />{errors[field.name] && <small id={`${field.name}-error`}>{errors[field.name]}</small>}</label>)}<label>Message<textarea name="message" rows="5" value={values.message} onChange={(event) => { setValues({ ...values, message: event.target.value }); setErrors({ ...errors, message: '' }) }} className={errors.message ? 'invalid' : ''} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />{errors.message && <small id="message-error">{errors.message}</small>}</label>{status !== 'idle' && <motion.p className={`form-status ${status}`} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} role="status" aria-live="polite">{status === 'loading' ? <LoaderCircle className="spin" size={16}/> : status === 'success' ? <CheckCircle2 size={16}/> : <AlertCircle size={16}/>} {status === 'loading' ? 'Sending your message…' : message}</motion.p>}<button className="button contact-submit" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send Message'} <Send size={16}/></button></form></Reveal></div></div></section>
}
