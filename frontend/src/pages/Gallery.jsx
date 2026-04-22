import { useState } from 'react'
import { FiX, FiZoomIn } from 'react-icons/fi'
import '../styles/Gallery.css'

const allImages = [
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80' },
  { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80' },
  { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80' },
]

export default function Gallery() {
  const [modal, setModal] = useState(null)

  return (
    <main className="page gallery-page">
      
      {/* Hero */}
      <div className="page-hero">
        <div className="container fade-up">
          <div className="section-label">Our Work</div>
          <h1 className="section-title">
            Chandigarh University <span>Events</span>
          </h1>
          <div className="red-line" />
          <p style={{ color: 'var(--gray)', maxWidth: 460 }}>
            Moments captured from events hosted at Chandigarh University.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {allImages.map((img, i) => (
          <div
            key={i}
            className="gallery-grid__item"
            onClick={() => setModal(img)}
          >
            <img src={img.src} alt="event" loading="lazy" />
            <div className="gallery-grid__overlay">
              <FiZoomIn className="gallery-grid__overlay-icon" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div className="gallery-modal" onClick={() => setModal(null)}>
          <div className="gallery-modal__backdrop" />
          <div className="gallery-modal__content" onClick={e => e.stopPropagation()}>
            <img src={modal.src} alt="event" />
            <button className="gallery-modal__close" onClick={() => setModal(null)}>
              <FiX />
            </button>
          </div>
        </div>
      )}
    </main>
  )
}