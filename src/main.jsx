import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BarChart3, Building2, Check, ChevronRight, Cpu, Globe2, LockKeyhole, Mail, MapPin, Menu, MessageCircle, Network, Phone, ShieldCheck, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';
import logo from './assets/cyber-lynx-logo.png';

const contact = {
  phone: '+263 771 977 041',
  whatsapp: '263771977041',
  email: 'cmo@cyberlynx.net',
  headquarters: 'Mutare, Zimbabwe',
  branch: 'KwaZulu-Natal, South Africa',
  leader: 'Cliff Kai, Chief Marketing Officer',
};

const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hello Cyber Lynx, I would like to request a free audit.')}`;
const emailUrl = `mailto:${contact.email}`;

const packages = [
  {
    name: 'Smart Start',
    price: '$150',
    label: 'For local businesses',
    timeline: '3–5 working days',
    description: 'A responsive one-page website for businesses that need a credible online presence.',
    features: ['1-page website', 'Mobile responsive design', 'WhatsApp integration', 'Contact form', 'Google Maps integration', 'Basic SEO setup', 'Social media links', 'Basic speed optimization'],
  },
  {
    name: 'Growth Presence',
    price: '$200',
    label: 'For SMEs',
    timeline: '5–7 working days',
    description: 'A stronger website structure for businesses that need visibility, tracking, and growth tools.',
    features: ['Up to 5 pages', 'Services section', 'SEO optimization', 'Google Analytics setup', 'Facebook Pixel setup', 'Blog setup', 'Security setup', '2 revision rounds'],
  },
  {
    name: 'Business Growth Stack',
    price: '$300',
    label: 'Most Popular',
    timeline: '7–10 working days',
    featured: true,
    description: 'A conversion-focused system for businesses that need leads, automation, and measurable growth.',
    features: ['Custom premium design', 'Lead capture system', 'Quote request forms', 'CRM integration', 'Email automation setup', 'Google Business Profile optimization', 'Performance dashboard', 'Basic cybersecurity audit', '1 month support'],
  },
  {
    name: 'Enterprise Infrastructure',
    price: '$500',
    label: 'For organizations',
    timeline: '10–14 working days',
    description: 'Digital infrastructure planning for schools, healthcare facilities, manufacturers, and medium enterprises.',
    features: ['Infrastructure consultation', 'Network planning', 'Cybersecurity assessment', 'Advanced UI/UX design', 'CMS training', 'Staff onboarding', 'Cloud integration planning', 'Analytics reporting system', 'Priority support'],
  },
];

const services = [
  { icon: Network, title: 'Smart Network Architecture', text: 'Private 5G, SD-WAN, fibre, Wi-Fi 6, and business connectivity planning.' },
  { icon: ShieldCheck, title: 'Cyber Defense Operations', text: 'SOC readiness, NDR planning, penetration testing, and zero-trust guidance.' },
  { icon: Cpu, title: 'IT Solutions', text: 'Cloud migration, Microsoft 365, helpdesk support, servers, and procurement.' },
  { icon: Building2, title: 'Digital Transformation', text: 'OT/IT integration, data centre modernization, and operational systems.' },
  { icon: BarChart3, title: 'Managed Intelligence', text: 'Dashboards, analytics, AI operations, and performance visibility.' },
  { icon: Globe2, title: 'Digital Marketing', text: 'Websites, SEO, Google/Meta Ads, content, social media, and email automation.' },
];

const industries = ['Retail & Hospitality', 'Education', 'Healthcare', 'Manufacturing', 'SMEs', 'NGOs'];

const quickReplies = {
  Services: 'We build IT infrastructure, secure systems, and grow businesses through web, cybersecurity, analytics, and digital marketing.',
  Packages: 'Website packages: Smart Start $150, Growth Presence $200, Business Growth Stack $300, Enterprise Infrastructure $500.',
  Infrastructure: 'Infrastructure services include smart network architecture, SD-WAN planning, Wi-Fi 6, fibre, private 5G, cloud planning, and operational systems.',
  Security: 'Security services include cyber defense operations, website hardening, risk review, penetration testing guidance, and zero-trust planning.',
  Contact: `Contact Cyber Lynx: ${contact.phone} or ${contact.email}. Headquarters: ${contact.headquarters}. Main branch: ${contact.branch}.`,
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="wa-svg">
      <path d="M16.04 3.2A12.75 12.75 0 0 0 5.15 22.6L3.5 28.8l6.35-1.62A12.75 12.75 0 1 0 16.04 3.2Zm0 23.26a10.45 10.45 0 0 1-5.33-1.46l-.38-.23-3.76.96 1-3.65-.25-.39A10.45 10.45 0 1 1 16.04 26.46Zm5.72-7.82c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.7.16-.21.31-.81 1.01-.99 1.22-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.69-.96-2.32-.25-.6-.51-.52-.7-.53h-.6c-.21 0-.54.08-.83.39-.29.31-1.09 1.07-1.09 2.61s1.12 3.03 1.27 3.24c.16.21 2.2 3.36 5.33 4.71.75.32 1.33.51 1.78.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.36Z" />
    </svg>
  );
}

function BackgroundSystem() {
  const nodes = useMemo(() => Array.from({ length: 22 }, (_, i) => ({ id: i, left: `${6 + ((i * 17) % 86)}%`, top: `${10 + ((i * 23) % 72)}%`, delay: `${(i % 7) * 0.7}s` })), []);
  return (
    <div className="background-system" aria-hidden="true">
      <div className="gradient-base" />
      <div className="grid-layer" />
      <div className="circuit-lines" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <div className="node-field">{nodes.map((n) => <span key={n.id} style={{ left: n.left, top: n.top, animationDelay: n.delay }} />)}</div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = ['Services', 'Packages', 'Industries', 'Contact'];
  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Cyber Lynx home">
        <img src={logo} alt="Cyber Lynx Digital Smart Network" />
        <span>Cyber Lynx</span>
      </a>
      <nav className={open ? 'nav open' : 'nav'}>
        {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
        <a href={emailUrl} className="nav-contact">{contact.email}</a>
      </nav>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-dark">
      <BackgroundSystem />
      <div className="hero-inner">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <img src={logo} alt="Cyber Lynx Digital Smart Network" className="hero-logo" />
          <p className="eyebrow">Connecting Intelligence. Securing Tomorrow. Amplifying Growth.</p>
          <h1>Your Business Deserves a Smart Network</h1>
          <p className="hero-sub">We build IT infrastructure, secure it, and grow your customers on top of it.</p>
          <div className="hero-actions">
            <a href={whatsappUrl} className="btn primary">Get Free Audit <ArrowRight size={18} /></a>
            <a href="#services" className="btn secondary">View Services</a>
          </div>
          <div className="trust-strip" aria-label="Locations and contact">
            <span><MapPin size={16} /> {contact.headquarters}</span>
            <span><MapPin size={16} /> {contact.branch}</span>
            <span><Phone size={16} /> {contact.phone}</span>
          </div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.15 }}>
          <div className="dashboard-shell">
            <div className="dashboard-top"><span></span><span></span><span></span></div>
            <div className="status-card large"><LockKeyhole /><div><strong>Secure Network Layer</strong><small>Infrastructure | Web | Growth</small></div></div>
            <div className="metrics-grid">
              <div><strong>BUILD</strong><span>Networks</span></div>
              <div><strong>SECURE</strong><span>Systems</span></div>
              <div><strong>GROW</strong><span>Business</span></div>
            </div>
            <div className="signal-map"><span></span><span></span><span></span><span></span></div>
          </div>
          <div className="floating-card card-a"><ShieldCheck size={18} /> Security-first</div>
          <div className="floating-card card-b"><BarChart3 size={18} /> Measurable ROI</div>
        </motion.div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="pillars section-light">
      {['BUILD', 'SECURE', 'GROW'].map((item, i) => <motion.div key={item} className="pillar" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><span>0{i + 1}</span><strong>{item}</strong></motion.div>)}
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section section-light">
      <div className="section-heading"><p className="eyebrow dark">Services</p><h2>One partner for infrastructure, security, and growth.</h2></div>
      <div className="service-grid">
        {services.map(({ icon: Icon, title, text }) => <article key={title} className="service-card"><Icon /><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="packages" className="section packages section-dark-alt">
      <div className="section-heading"><p className="eyebrow">Website Packages</p><h2>Clear packages. Scalable delivery.</h2></div>
      <div className="package-grid">
        {packages.map((p) => <article key={p.name} className={p.featured ? 'package-card featured' : 'package-card'}>
          <div className="package-label">{p.label}</div>
          <h3>{p.name}</h3>
          <div className="price">{p.price}</div>
          <p>{p.description}</p>
          <div className="timeline">Delivery: {p.timeline}</div>
          <ul>{p.features.map((f) => <li key={f}><Check size={16} /> {f}</li>)}</ul>
          <a href={whatsappUrl} className="package-cta">Request Package <ChevronRight size={16} /></a>
        </article>)}
      </div>
    </section>
  );
}

function Why() {
  const items = [
    ['One Partner', 'Infrastructure, cybersecurity, web systems, and digital growth under one accountable team.'],
    ['Local Teams', 'Zimbabwe headquarters with South African branch presence.'],
    ['Security-First', 'Websites and systems planned with protection, continuity, and reliability in mind.'],
    ['Measurable ROI', 'Analytics, tracking, and performance dashboards built into delivery.'],
  ];
  return <section className="section section-light"><div className="section-heading"><p className="eyebrow dark">Why Cyber Lynx</p><h2>Built for businesses tired of fragmented vendors.</h2></div><div className="why-grid">{items.map(([t, d]) => <div key={t} className="why-card"><h3>{t}</h3><p>{d}</p></div>)}</div></section>;
}

function Industries() {
  return <section id="industries" className="section industries"><div className="section-heading compact"><p className="eyebrow dark">Industries</p><h2>Solutions by industry.</h2></div><div className="industry-list">{industries.map((x) => <span key={x}>{x}</span>)}</div></section>;
}

function ContactSection() {
  return (
    <section id="contact" className="section contact-section section-dark-alt">
      <div className="contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Talk to Cliff Kai.</h2>
          <p className="contact-intro">Request a free audit or discuss infrastructure, security, web systems, and digital growth.</p>
          <div className="contact-list">
            <a href={whatsappUrl}><Phone /> {contact.phone}</a>
            <a href={emailUrl}><Mail /> {contact.email}</a>
            <span><MapPin /> Headquarters: {contact.headquarters}</span>
            <span><MapPin /> Main Branch: {contact.branch}</span>
          </div>
        </div>
        <form className="lead-form" onSubmit={(e) => { e.preventDefault(); window.location.href = whatsappUrl; }}>
          <label>Name<input type="text" name="name" placeholder="Your name" /></label>
          <label>Company<input type="text" name="company" placeholder="Company name" /></label>
          <label>Service Interested<select name="service"><option>Smart Network Architecture</option><option>Cyber Defense Operations</option><option>IT Solutions</option><option>Digital Marketing Full Package</option><option>Website Package</option></select></label>
          <label>Message<textarea name="message" placeholder="Briefly describe the need"></textarea></label>
          <button type="submit" className="btn primary full">Send Request <ArrowRight size={18} /></button>
        </form>
      </div>
    </section>
  );
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Select a service category.' }]);
  const send = (key) => setMessages((m) => [...m, { from: 'user', text: key }, { from: 'bot', text: quickReplies[key] }]);
  return (
    <div className="chatbot">
      {open && <div className="chat-window">
        <div className="chat-head"><div><strong>Cyber Lynx Assistant</strong><span>Digital support & consultation</span></div><button onClick={() => setOpen(false)}><X size={18} /></button></div>
        <div className="chat-body">{messages.map((m, i) => <div key={i} className={`message ${m.from}`}>{m.text}</div>)}</div>
        <div className="quick-actions">{Object.keys(quickReplies).map((k) => <button key={k} onClick={() => send(k)}>{k}</button>)}</div>
        <a className="chat-whatsapp" href={whatsappUrl}><WhatsAppIcon /> Start WhatsApp Consultation</a>
      </div>}
      <button className="chat-toggle" onClick={() => setOpen(!open)} aria-label="Open Cyber Lynx assistant"><MessageCircle /></button>
    </div>
  );
}

function FloatingWhatsApp() { return <a href={whatsappUrl} className="floating-wa" aria-label="Contact Cyber Lynx on WhatsApp"><WhatsAppIcon /></a>; }

function Footer() {
  return <footer className="footer"><div><img src={logo} alt="Cyber Lynx" /><p>Connecting Intelligence. Securing Tomorrow. Amplifying Growth.</p></div><div><strong>Cyber Lynx Digital Smart Network</strong><span>{contact.phone}</span><span>{contact.email}</span><span>{contact.headquarters} | {contact.branch}</span></div></footer>;
}

function App() {
  return <><Header /><main><Hero /><Pillars /><Services /><Why /><Packages /><Industries /><ContactSection /></main><Footer /><Chatbot /><FloatingWhatsApp /></>;
}

createRoot(document.getElementById('root')).render(<App />);
