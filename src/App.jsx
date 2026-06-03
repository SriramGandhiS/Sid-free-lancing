// [🌊 EMIL MOTION] App.jsx
import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function App() {
  const containerRef = useRef(null)

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

  const socialMediaImages = [
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

  const printMediaImages = [
    '/images/Blogs/Syngrid/syngrid-infographic-poster.jpg',
    '/images/Blogs/Syngrid/syngrid blog 4.3 copy.webp',
    '/images/Blogs/Syngrid/syngrid blog 6.3 copy.webp',
    '/images/Blogs/Syngrid/syngrid blog copy (1).webp',
    '/images/Blogs/Syngrid/syngrid vlog 30.3 copy.webp',
    '/images/Social Media Design/sai albumpost.jpg',
    '/images/Social Media Design/sprite.jpg'
  ];

  const illustrationsImages = [
    '/images/Social Media Design/paperboat final.png',
    '/images/Social Media Design/tuf.jpg',
    '/images/Blogs/Mak Logistics/mak blog 11.5 copy.webp',
    '/images/Blogs/Mak Logistics/mak blog 14.5 copy2.webp',
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
      {/* Hero Section */}
      <section className="section hero">
        <div className="hero-top-text">
          <span>Graphic Designer Portfolio</span>
          <span>Siddhu R.S</span>
        </div>
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
          <h1 className="section-title">SKILLS & TOOLS</h1>
          <h2 className="section-subtitle">Siddhu</h2>
          <div className="squiggle squiggle-5"></div>
        </div>
        <div className="skills-paper-container">
          <div className="skills-grid">
            <div className="skills-col">
              <h3>Designing Skills</h3>
              <ul>
                <li>Branding & Identity</li>
                <li>Social Media Design</li>
                <li>Typography & Color Theory</li>
                <li>Video Editing</li>
              </ul>
            </div>
            <div className="skills-col">
              <h3>Softwares</h3>
              <div className="software-icons">
                <span className="soft-icon ps">Ps</span>
                <span className="soft-icon ai">Ai</span>
                <span className="soft-icon fg">Fg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Designs */}
      <section className="section portfolio-grid-section">
        <div className="section-header right-align">
          <h1 className="section-title">SOCIAL MEDIA</h1>
          <h2 className="section-subtitle">Designs</h2>
        </div>
        <div className="grid-container masonry-ish">
          {socialMediaImages.map((src, idx) => (
            <div key={idx} className="grid-item">
              <img src={src} className="portfolio-image" alt="Social Media Design" />
            </div>
          ))}
        </div>
      </section>

      {/* Print Media Designs */}
      <section className="section portfolio-grid-section">
        <div className="section-header left-align">
          <h1 className="section-title">PRINT MEDIA</h1>
          <h2 className="section-subtitle">Designs</h2>
        </div>
        <div className="grid-container structured-grid">
          {printMediaImages.map((src, idx) => (
            <div key={idx} className="grid-item">
              <img src={src} className="portfolio-image" alt="Print Media Design" />
            </div>
          ))}
        </div>
      </section>

      {/* Illustrations Designs */}
      <section className="section portfolio-grid-section">
        <div className="section-header right-align">
          <h1 className="section-title">ILLUSTRATIONS</h1>
          <h2 className="section-subtitle">Designs</h2>
        </div>
        <div className="grid-container illustration-grid">
          {illustrationsImages.map((src, idx) => (
            <div key={idx} className="grid-item">
              <img src={src} className="portfolio-image" alt="Illustration" />
            </div>
          ))}
        </div>
      </section>
      
      {/* Branding Designs */}
      <section className="section portfolio-grid-section">
        <div className="section-header left-align">
          <h1 className="section-title">BRANDING</h1>
          <h2 className="section-subtitle">Designs</h2>
        </div>
        <div className="grid-container branding-grid">
          {brandingImages.map((src, idx) => (
            <div key={idx} className="grid-item">
              <img src={src} className="portfolio-image" alt="Branding Design" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="section footer">
        <div className="footer-content">
          <div className="section-header center footer-header">
            <h1 className="section-title">THANK YOU</h1>
            <h2 className="section-subtitle">For Attention</h2>
          </div>
          <div className="contact-button">CONTACT</div>
        </div>
        <div className="footer-bottom-tear">
          <div className="contact-links">
            <span>📞 +91 9361338723</span>
            <span>🌐 behance.net/rssiddhu</span>
            <span>✉️ rssiddhuram@gmail.com</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
