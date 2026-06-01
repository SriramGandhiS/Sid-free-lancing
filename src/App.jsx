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

  return (
    <div className="portfolio-container" ref={containerRef}>
      {/* Hero Section */}
      <section className="section hero">
        <div className="hero-top-text">
          <span>Graphic Designer Portfolio</span>
          <span>Sid</span>
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
              <h2 className="section-subtitle">Sid</h2>
            </div>
            <p className="about-desc">
              My name is Sid. This presentation is a collection of some of my most significant works and projects that reflect my skills, creativity, and professional growth.
              <br/><br/>
              Throughout this portfolio, Turning ideas into visuals that speak clean, bold, and designed to leave a lasting impression.
            </p>
            <div className="floating-icon icon-pen-bottom">🖋️</div>
            <div className="squiggle squiggle-3"></div>
          </div>
          <div className="about-image-area">
            <div className="image-placeholder with-outline"></div>
            <div className="squiggle squiggle-4"></div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="section skills">
        <div className="section-header center">
          <h1 className="section-title">SKILLS & TOOLS</h1>
          <h2 className="section-subtitle">Sid</h2>
          <div className="squiggle squiggle-5"></div>
        </div>
        <div className="skills-paper-container">
          <div className="skills-grid">
            <div className="skills-col">
              <h3>Designing Skills</h3>
              <ul>
                <li>Branding</li>
                <li>Social Media Posts</li>
                <li>Print Media Designs</li>
                <li>Video Editing</li>
              </ul>
            </div>
            <div className="skills-col">
              <h3>Softwares</h3>
              <div className="software-icons">
                <span className="soft-icon ps">Ps</span>
                <span className="soft-icon ai">Ai</span>
                <span className="soft-icon pr">Pr</span>
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
          {[1,2,3,4,5,6,7,8,9].map(i => (
            <div key={i} className={`grid-item item-${i}`}></div>
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
          {[1,2,3,4,5,6,7].map(i => (
            <div key={i} className={`grid-item print-item-${i}`}></div>
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
          {[1,2,3,4,5,6,7].map(i => (
            <div key={i} className={`grid-item ill-item-${i}`}></div>
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
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className={`grid-item brand-item-${i}`}></div>
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
            <span>📞 +919000000000</span>
            <span>📷 @sid_art</span>
            <span>✉️ sid@example.com</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
