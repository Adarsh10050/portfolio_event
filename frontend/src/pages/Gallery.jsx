import { useState } from 'react'
import { FiX, FiZoomIn } from 'react-icons/fi'
import '../styles/Gallery.css'

const allImages = [
  { src: 'https://res.cloudinary.com/dodouazko/image/upload/q_auto/f_auto/v1777835256/event_2_accuow.jpg' },
  { src: 'https://res.cloudinary.com/dodouazko/image/upload/q_auto/f_auto/v1777835256/event_3_x9xaeq.jpg' },
  { src: 'https://res.cloudinary.com/dodouazko/image/upload/q_auto/f_auto/v1777835255/event_1_vlez1u.jpg' },
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
        <div className="container">
          <div className="section-label">Our Work</div>

          <h1 className="section-title">
            Our <span>Events</span>
          </h1>

          <div className="red-line" />

          <p className="gallery-subtext">
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
            onClick={() => setModal(img.src)}
          >
            <img
              src={img.src}
              alt={`event-${i}`}
              loading="lazy"
            />

            <div className="gallery-grid__overlay">
              <FiZoomIn />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="gallery-modal"
          onClick={() => setModal(null)}
        >
          <div className="gallery-modal__backdrop" />

          <div
            className="gallery-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modal} alt="event-preview" />

            <button
              className="gallery-modal__close"
              onClick={() => setModal(null)}
            >
              <FiX />
            </button>
          </div>
        </div>
      )}

    </main>
  )
}