import { useState } from 'react'
import { FiX, FiZoomIn } from 'react-icons/fi'
import '../styles/Family.css'

const familyImages = [
  { src: "https://res.cloudinary.com/dodouazko/image/upload/q_auto/f_auto/v1776626743/pic_6_fbny2y.jpg" },
  { src: "https://res.cloudinary.com/dodouazko/image/upload/q_auto/f_auto/v1776626745/pic_5_jdor0w.jpg" },
]

export default function Family() {
  const [modal, setModal] = useState(null)

  return (
    <main className="page family-page">

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Our Family</div>
          <h1 className="section-title">
            Meet <span>The Crew</span>
          </h1>
          <div className="red-line" />
          <p style={{ color: 'var(--gray)' }}>
            Moments with the people who make everything possible.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="family-grid">
        {familyImages.map((img, i) => (
          <div
            key={i}
            className="family-item"
            onClick={() => setModal(img)}
          >
            <img src={img.src} alt="family" loading="lazy" />
            <div className="family-overlay">
              <FiZoomIn />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div className="family-modal" onClick={() => setModal(null)}>
          <div className="family-modal__content" onClick={(e) => e.stopPropagation()}>
            <img src={modal.src} alt="family" />
            <button onClick={() => setModal(null)}>
              <FiX />
            </button>
          </div>
        </div>
      )}
    </main>
  )
}