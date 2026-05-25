import React, { useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const contactConfig = {
  whatsappNumber: '',
  email: '',
};

const packages = [
  {
    name: 'Smart Start',
    price: '$150',
    audience: 'Small shops, salons, startups, local businesses and individual professionals.',
    timeline: '3–5 working days',
    features: [
      '1-page website',
      'Mobile responsive design',
      'WhatsApp integration',
      'Contact form',
      'Google Maps integration',
      'Basic SEO setup',
      'Social media links',
      'Basic speed optimization',
    ],
  },
  {
    name: 'Growth Presence',
    price: '$200',
    audience: 'Clinics, restaurants, schools, SMEs and retail businesses.',
    timeline: '5–7 working days',
    features: [
      'Up to 5 pages',
      'Services section',
      'SEO optimization',
      'Google Analytics setup',
      'Facebook Pixel setup',
      'Blog setup',
      'Security setup',
      '2 revision rounds',
    ],
  },
  {
    name: 'Business Growth Stack',
    price: '$300',
    audience: 'Growing businesses requiring lead generation and stronger systems.',
    timeline: '7–10 working days',
    featured: true,
    features: [
      'Custom premium design',
      'Lead capture system',
      'Quote request forms',
      'CRM integration',
      'Email automation setup',
      'Google Business Profile optimization',
      'Performance dashboard',
      'Basic cybersecurity audit',
      '1 month support',
    ],
  },
  {
    name: 'Enterprise Infrastructure',
    price: '$500',
    audience: 'Schools, healthcare facilities, manufacturers and medium enterprises.',
    timeline: '10–14 working days',
    features: [
      'Infrastructure consultation',
      'Network planning',
      'Cybersecurity assessment',
      'Advanced UI/UX design',
      'CMS training',
      'Staff onboarding',
      'Cloud integration planning',
      'Analytics reporting system',
      'Priority support',
    ],
  },
];

const services = [
  ['Web Systems', 'Responsive websites, landing pages, portals and deployment-ready digital platforms.'],
  ['Cybersecurity', 'Security setup, risk review, hardening guidance and staff awareness.'],
  ['Digital Growth', 'SEO, analytics, conversion tracking, Google Business Profile and campaign support.'],
  ['Infrastructure', 'Cloud planning, network strategy, business email and operational systems.'],
];

const quickReplies = {
  Services: 'Cyber Lynx provides web systems, cybersecurity, digital growth, AI automation and infrastructure planning for businesses in Zimbabwe and South Africa.',
  Packages: 'Packages start at $150 for Smart Start, $200 for Growth Presence, $300 for Business Growth Stack and $500 for Enterprise Infrastructure.',
  Infrastructure: 'Infrastructure support includes consultation, network planning, cloud integration planning, analytics reporting systems and operational support.',
  Security: 'Security support includes website security setup, cybersecurity assessment, basic audits, hardening guidance and staff onboarding.',
  Contact: 'Use the contact section or the WhatsApp icon to start a project discussion. Add the official WhatsApp number in src/main.jsx before final deployment.',
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="wa-svg">
      <path d="M16.04 3.2A12.75 12.75 0 0 0 5.15 22.6L3.5 28.8l6.35-1.62A12.75 12.75 0 1 0 16.04 3.2Zm0 23.26a10.45 10.45 0 0 1-5.33-1.46l-.38-.23-3.76.96 1-3.65-.25-.39A10.45 10.45 0 1 1 16.04 26.46Zm5.72-7.82c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.7.16-.21.31-.81 1.01-.99 1.22-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.69-.96-2.32-.25-.6-.51-.52-.7-.53h-.6c-.21 0-.54.08-.83.39-.29.31-1.09 1.07-1.09 2.61s1.12 3.03 1.27 3.24c.16.21 2.2 3.36 5.33 4.71.75.32 1.33.51 1.78.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.36Z" />
    </svg>
  );
}

function BackgroundSystem() {
  const nodes = useMemo(() => Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${8 + ((i * 19) % 84)}%`,
    top: `${10 + ((i * 29) % 76)}%`,
    delay: `${(i % 6) * 0.6}s`,
  })), []);

  return (
    <div className="background-system" aria-hidden="true">
      <div className="gradient-base" />
      <div className="grid-layer" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <div className="node-field">
        {nodes.map((node) => <span key={node.id} style={{ left: node.left, top: node.top, animationDelay: node.delay }} />)}
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Cyber Lynx home">
        <span className="brand-mark">CL</span>
        <span>
          <strong>Cyber Lynx</strong>
          <small>Digital Smart Network</small>
        </span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#services">Services</a>
        <a href="#packages">Packages</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content reveal">
        <p className="eyebrow">Zimbabwe • South Africa • Remote-ready</p>
        <h1>Digital Infrastructure For Modern Business</h1>
        <p className="hero-subtitle">Cybersecurity, web systems, AI automation and scalable digital infrastructure.</p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">Start Project</a>
          <a className="button secondary" href="#services">View Services</a>
        </div>
        <div className="trust-row" aria-label="Key capabilities">
          <span>Secure Web Systems</span>
          <span>Analytics Ready</span>
          <span>Lead Capture</span>
        </div>
      </div>
      <div className="hero-visual reveal delay-1" aria-label="Digital infrastructure dashboard preview">
        <div className="dashboard-card main-dashboard">
          <div className="dashboard-header">
            <span>Network Status</span>
            <strong>Operational</strong>
          </div>
          <div className="signal-map">
            <span className="hub" />
            <span className="orbit orbit-a" />
            <span className="orbit orbit-b" />
            <span className="orbit orbit-c" />
          </div>
          <div className="metrics-row">
            <span><strong>SEO</strong> Ready</span>
            <span><strong>SSL</strong> Active</span>
            <span><strong>CRM</strong> Enabled</span>
          </div>
        </div>
        <div className="mini-card card-a">Security Review</div>
        <div className="mini-card card-b">Lead System</div>
        <div className="mini-card card-c">Cloud Planning</div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-head">
        <p className="eyebrow">Core capabilities</p>
        <h2>Systems Built For Visibility, Security And Growth</h2>
      </div>
      <div className="service-grid">
        {services.map(([title, text], index) => (
          <article className="service-card reveal" style={{ animationDelay: `${index * 0.08}s` }} key={title}>
            <div className="card-icon" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="section" id="packages">
      <div className="section-head">
        <p className="eyebrow">Service packages</p>
        <h2>Clear Packages For Different Business Stages</h2>
      </div>
      <div className="package-grid">
        {packages.map((item) => (
          <article className={`package-card ${item.featured ? 'featured' : ''}`} key={item.name}>
            {item.featured && <span className="badge">Most Popular</span>}
            <div className="package-top">
              <h3>{item.name}</h3>
              <strong>{item.price}</strong>
            </div>
            <p className="audience">{item.audience}</p>
            <p className="timeline">Delivery: {item.timeline}</p>
            <ul>
              {item.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <a className="package-link" href="#contact">Request package</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = ['Consultation', 'Strategy', 'Design', 'Development', 'Deployment', 'Support'];
  return (
    <section className="section process" id="process">
      <div className="section-head">
        <p className="eyebrow">Delivery process</p>
        <h2>Structured From First Call To Launch</h2>
      </div>
      <div className="process-line">
        {steps.map((step, index) => (
          <div className="process-step" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Select a service category.' },
  ]);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef(null);

  const sendQuickReply = (label) => {
    setMessages((prev) => [...prev, { from: 'user', text: label }]);
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: 'bot', text: quickReplies[label] }]);
      window.setTimeout(() => chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' }), 20);
    }, 450);
  };

  return (
    <div className="assistant-wrap">
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Cyber Lynx Assistant">
          <div className="chat-header">
            <div>
              <strong>Cyber Lynx Assistant</strong>
              <small>Service guidance</small>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </div>
          <div className="chat-body" ref={chatRef}>
            {messages.map((message, index) => (
              <p className={`message ${message.from}`} key={`${message.text}-${index}`}>{message.text}</p>
            ))}
            {typing && <p className="message bot typing"><span /><span /><span /></p>}
          </div>
          <div className="quick-actions">
            {Object.keys(quickReplies).map((label) => (
              <button key={label} onClick={() => sendQuickReply(label)}>{label}</button>
            ))}
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setOpen((value) => !value)} aria-label="Open Cyber Lynx Assistant">
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}

function WhatsAppButton() {
  const href = contactConfig.whatsappNumber ? `https://wa.me/${contactConfig.whatsappNumber}` : '#contact';
  return (
    <a className="whatsapp-float" href={href} aria-label="Contact Cyber Lynx on WhatsApp">
      <WhatsAppIcon />
    </a>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Start With A Clear Project Brief</h2>
          <p>Share the business goal, required service, timeline and preferred package.</p>
        </div>
        <a className="button primary" href={contactConfig.whatsappNumber ? `https://wa.me/${contactConfig.whatsappNumber}` : 'mailto:' + contactConfig.email}>Begin consultation</a>
      </div>
    </section>
  );
}

function App() {
  return (
    <main>
      <BackgroundSystem />
      <Header />
      <Hero />
      <Services />
      <Packages />
      <Process />
      <Contact />
      <Chatbot />
      <WhatsAppButton />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
