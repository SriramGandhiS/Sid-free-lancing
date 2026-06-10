// [🌊 EMIL MOTION] App.jsx
import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// Helper component for dynamic row-first masonry layout
function MasonryGrid({ images, renderItem }) {
  const [columns, setColumns] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setColumns(2)
      } else {
        setColumns(4)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cols = Array.from({ length: columns }, () => [])
  images.forEach((img, idx) => {
    cols[idx % columns].push({ img, idx })
  });

  return (
    <div className="masonry-grid">
      {cols.map((colItems, colIdx) => (
        <div key={colIdx} className="masonry-col">
          {colItems.map(({ img, idx }) => renderItem(img, idx))}
        </div>
      ))}
    </div>
  )
}

function App() {
  const containerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const scrollToSection = (e, selector) => {
    e.preventDefault()
    const element = document.querySelector(selector)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useGSAP(() => {
    // Reveal animations for sections
    const sections = gsap.utils.toArray('.section')
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Floating icons animation
    gsap.to('.floating-icon', {
      y: '-20px',
      rotation: 5,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      stagger: {
        each: 0.2,
        from: 'random'
      }
    })
  }, { scope: containerRef })

  const posterDesigns = [
    '/images/Social Media Design/Artboard 1.png',
    '/images/Social Media Design/Vizhi Veekura2.png',
    '/images/Social Media Design/ajith colr grade.png',
    '/images/Social Media Design/barc vs rm 2.jpg',
    '/images/Social Media Design/charles.png',
    '/images/Social Media Design/firangpani.png',
    '/images/Social Media Design/lamine yamal.jpg',
    '/images/Social Media Design/messi india 3.jpg',
    '/images/Social Media Design/paal dabba final.jpg'
  ];

  const socialMediaDesigns = [
    '/images/Social Media Design/sai albumpost.jpg',
    '/images/Social Media Design/sprite.jpg',
    '/images/Social Media Design/paperboat final.png',
    '/images/Social Media Design/tuf.jpg'
  ];

  const horizontalLayouts = [
    '/images/Blogs/Syngrid/syngrid-infographic-poster.jpg',
    '/images/Blogs/Syngrid/syngrid blog 4.3 copy.webp',
    '/images/Blogs/Syngrid/syngrid blog 6.3 copy.webp',
    '/images/Blogs/Syngrid/syngrid blog copy (1).webp',
    '/images/Blogs/Mak Logistics/mak blog 11.5 copy.webp',
    '/images/Blogs/Mak Logistics/mak blog 18.2 blog 2 copy.webp',
    '/images/Blogs/Mak Logistics/mak-blog-18 (2).jpg',
    '/images/Blogs/Mak Logistics/mak blog 2.3 2 copy.webp'
  ];

  const brandingImages = [
    '/images/Brand Design/Natoma Cleaning Company/687838093_17975878011042322_1590309337650273754_n.jpg',
    '/images/Brand Design/Natoma Cleaning Company/690993784_17976167178042322_1504832319170355888_n.jpg',
    '/images/Brand Design/Natoma Cleaning Company/natoma-blog-6.jpg',
    '/images/Brand Design/Natoma Cleaning Company/natoma-poster-16 (3).jpg',
    '/images/Brand Design/Natoma Cleaning Company/natoma-poster-17.jpg',
    '/images/Brand Design/Natoma Cleaning Company/natoma-poster-293.jpg',
    '/images/Brand Design/syngrid poster5.jpg',
    '/images/Brand Design/syngrid-poster2 (1).png'
  ];

  return (
    <div className="portfolio-container" ref={containerRef}>
      {/* Floating Navigation Menu */}
      <nav className="navbar">
        <div className="navbar-logo">SIDDHU</div>
        <div className="navbar-links">
          <a href="#about" onClick={(e) => scrollToSection(e, '.about')}>ABOUT</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, '.skills')}>SKILLS</a>
          <a href="#works" onClick={(e) => scrollToSection(e, '.portfolio-grid-section')}>WORKS</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, '.contact-section')}>CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section hero">
        <div className="hero-title-container">
          <h1 className="hero-title">PORTFOLIO</h1>
          <h2 className="hero-subtitle">Graphic Design</h2>
        </div>
        
        {/* Floating elements */}
        <div className="floating-icon icon-ai">Ai</div>
        <div className="floating-icon icon-ps">Ps</div>
        <div className="floating-icon icon-pr">Pr</div>
        <div className="floating-icon icon-id">Id</div>
        <div className="floating-icon icon-pen">🖋️</div>
        <div className="squiggle squiggle-1"></div>
        <div className="squiggle squiggle-2"></div>
      </section>

      {/* About Section */}
      <section className="section about">
        <div className="about-content">
          <div className="about-text-area">
            <div className="section-header about-header">
              <h1 className="section-title">HELLO I'AM</h1>
              <h2 className="section-subtitle">Siddhu</h2>
            </div>
            <p className="about-desc">
              Creative and detail-oriented Graphic Designer with hands-on freelance experience and a strong academic foundation in Electrical and Electronics Engineering. Proficient in Adobe tools, branding, and Design principles.
              <br/><br/>
              Passionate about visual storytelling, user-centered design, and exploring new creative challenges. Seeking to apply my skills in a professional and collaborative environment.
            </p>
            <div className="floating-icon icon-pen-bottom">🖋️</div>
            <div className="squiggle squiggle-3"></div>
          </div>
          <div className="about-image-area">
            <img src="/images/me.png" className="image-placeholder with-outline profile-img" alt="Siddhu" />
            <div className="squiggle squiggle-4"></div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="section skills">
        <div className="section-header center">
          <h1 className="section-title">SKILLS</h1>
          <div className="squiggle squiggle-5"></div>
        </div>
        <div className="skills-paper-container">
          <div className="skills-grid">
            <div className="skills-col">
              <h3>Skills</h3>
              <ul>
                <li>Graphic Design</li>
                <li>Typography</li>
                <li>Color Theory</li>
                <li>Video Editing</li>
                <li>Motion Design</li>
                <li>UI / UX</li>
              </ul>
            </div>
            <div className="skills-col">
              <h3>Softwares</h3>
              <div className="software-icons">
                <span className="soft-icon ps" title="Photoshop">Ps</span>
                <span className="soft-icon ai" title="Illustrator">Ai</span>
                <span className="soft-icon fg" title="Figma">
                  <svg viewBox="0 0 120 180" style={{ width: '28px', height: '42px' }} xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 180c16.57 0 30-13.43 30-30V120H30c-16.57 0-30 13.43-30 30s13.43 30 30 30z" fill="#0ACF83"/>
                    <path d="M30 120c16.57 0 30-13.43 30-30V60H30C13.43 60 0 73.43 0 90s13.43 30 30 30z" fill="#A259FF"/>
                    <path d="M30 60c16.57 0 30-13.43 30-30S46.57 0 30 0 0 13.43 0 30s13.43 30 30 30z" fill="#F24E1E"/>
                    <path d="M90 60c16.57 0 30-13.43 30-30S106.57 0 90 0 60 13.43 60 30s13.43 30 30 30z" fill="#FF7262"/>
                    <path d="M60 120h30c16.57 0 30-13.43 30-30s-13.43-30-30-30H60v60z" fill="#1ABCFE"/>
                  </svg>
                </span>
                <span className="soft-icon ae" title="After Effects">Ae</span>
                <span className="soft-icon pr" title="Premiere Pro">Pr</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poster Designs */}
      <section className="section portfolio-grid-section">
        <div className="section-header right-align">
          <h1 className="section-title">POSTER DESIGNS</h1>
        </div>
        <MasonryGrid 
          images={posterDesigns} 
          renderItem={(src, idx) => (
            <div key={idx} className="grid-item">
              <img src={src} className="portfolio-image" alt="Poster Design" onClick={() => setSelectedImage(src)} />
            </div>
          )}
        />
      </section>

      {/* Social Media Design */}
      <section className="section portfolio-grid-section">
        <div className="section-header center">
          <h1 className="section-title">SOCIAL MEDIA DESIGN</h1>
        </div>
        <MasonryGrid 
          images={socialMediaDesigns} 
          renderItem={(src, idx) => (
            <div key={idx} className="grid-item">
              <img src={src} className="portfolio-image" alt="Social Media Design" onClick={() => setSelectedImage(src)} />
            </div>
          )}
        />
      </section>

      {/* Blog & Web Layouts */}
      <section className="section portfolio-grid-section">
        <div className="section-header left-align">
          <h1 className="section-title">BLOG & WEB LAYOUTS</h1>
        </div>
        <div className="grid-container">
          {horizontalLayouts.map((src, idx) => (
            <div key={idx} className="grid-item">
              <img src={src} className="portfolio-image" alt="Blog & Web Layout" onClick={() => setSelectedImage(src)} />
            </div>
          ))}
        </div>
      </section>
      
      {/* Branding Designs */}
      <section className="section portfolio-grid-section">
        <div className="section-header left-align">
          <h1 className="section-title">BRANDING & IDENTITY</h1>
        </div>
        <MasonryGrid 
          images={brandingImages} 
          renderItem={(src, idx) => (
            <div key={idx} className="grid-item">
              <img src={src} className="portfolio-image" alt="Branding Design" onClick={() => setSelectedImage(src)} />
            </div>
          )}
        />
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <div className="section-header left-align" style={{ marginBottom: '64px' }}>
          <h1 className="section-title">CONNECT</h1>
          <h2 className="section-subtitle">In Touch</h2>
        </div>

        <div className="contact-container">
          {/* Left Side: Creative Brief / Form inside Artboard Canvas */}
          <div className="contact-form-card design-canvas">
            <div className="crop-mark top-left"></div>
            <div className="crop-mark top-right"></div>
            <div className="crop-mark bottom-left"></div>
            <div className="crop-mark bottom-right"></div>
            
            <span className="contact-tag">— START A BRIEF</span>
            <h1 className="contact-title">DESIGN INQUIRY.</h1>
            
            <form className="contact-form" onSubmit={async (e) => {
              e.preventDefault()
              const form = e.target
              const btn = form.querySelector('.contact-submit-btn')
              const origText = btn.textContent
              btn.textContent = 'SENDING...'
              btn.disabled = true
              try {
                const res = await fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
                    name: form.querySelector('[name="name"]').value,
                    email: form.querySelector('[name="email"]').value,
                    message: form.querySelector('[name="message"]').value,
                    subject: 'New Design Inquiry from Portfolio',
                  })
                })
                const data = await res.json()
                if (data.success) {
                  btn.textContent = 'SENT ✓'
                  form.reset()
                  setTimeout(() => { btn.textContent = origText; btn.disabled = false }, 3000)
                } else {
                  btn.textContent = 'ERROR — RETRY'
                  setTimeout(() => { btn.textContent = origText; btn.disabled = false }, 3000)
                }
              } catch {
                btn.textContent = 'ERROR — RETRY'
                setTimeout(() => { btn.textContent = origText; btn.disabled = false }, 3000)
              }
            }}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="What's your name?" required />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" name="email" placeholder="What's your email?" required />
              </div>
              <div className="form-group">
                <label>Your Message / Project Details</label>
                <textarea name="message" placeholder="What do you want to design?" rows="4" required></textarea>
              </div>
              <button type="submit" className="contact-submit-btn">SEND BRIEF</button>
          </div>
        </div>

        {/* Contact Info Row — minimal floating */}
        <div className="contact-info-row">
          <a href="mailto:rssiddhuram@gmail.com" className="contact-info-item">
            <div className="contact-info-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="contact-info-text">
              <span className="contact-info-label">EMAIL</span>
              <span className="contact-info-value">rssiddhuram@gmail.com</span>
            </div>
          </a>
          <div className="contact-info-divider"></div>
          <a href="https://behance.net/rssiddhu" target="_blank" rel="noreferrer" className="contact-info-item">
            <div className="contact-info-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.720-4h4.854c-.08-1.169-.7-1.998-1.939-1.998-1.230 0-2.58.86-2.915 1.998zM8.216 14.4H5.127v2.4h3.089c1.197 0 2.023-.466 2.023-1.224 0-.783-.826-1.176-2.023-1.176zM5.127 9.6v2.16h2.716c1.005 0 1.716-.408 1.716-1.08 0-.672-.711-1.08-1.716-1.08H5.127zM0 6h8.432c2.754 0 4.568 1.241 4.568 3.36 0 1.296-.648 2.215-1.727 2.815 1.404.528 2.295 1.585 2.295 3.105C13.568 17.594 11.393 18 8.792 18H0V6z"/>
              </svg>
            </div>
            <div className="contact-info-text">
              <span className="contact-info-label">BEHANCE</span>
              <span className="contact-info-value">behance.net/rssiddhu</span>
            </div>
          </a>
          <div className="contact-info-divider"></div>
          <a href="tel:+919361338723" className="contact-info-item">
            <div className="contact-info-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="contact-info-text">
              <span className="contact-info-label">PHONE</span>
              <span className="contact-info-value">+91 9361338723</span>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="section footer" style={{ minHeight: 'auto', paddingTop: 0 }}>
        <div className="footer-bottom-tear">
          <div className="contact-links">
            <span>📞 +91 9361338723</span>
            <span>🌐 behance.net/rssiddhu</span>
            <span>✉️ rssiddhuram@gmail.com</span>
          </div>
        </div>
      </footer>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
          <img src={selectedImage} className="lightbox-image" alt="Full Size Preview" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  )
}

export default App
