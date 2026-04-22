import { useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { MdEventAvailable, MdMovieCreation, MdLocalShipping, MdTrendingUp } from 'react-icons/md'
import '../styles/Home.css'

// Using Unsplash for free event images
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', tag: 'Corporate Events' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', tag: 'Concerts' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80', tag: 'Conferences' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80', tag: 'Galas' },
  { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80', tag: 'Festivals' },
]

const services = [
  { icon: <MdEventAvailable />, title: 'Event Support', desc: 'End-to-end management for premium physical and digital experiences.' },
  { icon: <MdMovieCreation />, title: 'Media Production', desc: 'Cinematic quality content creation tailored for modern platforms.' },
  { icon: <MdLocalShipping />, title: 'Logistics', desc: 'Flawless execution and supply chain management for global campaigns.' },
  { icon: <MdTrendingUp />, title: 'Marketing', desc: 'Data-driven strategies that guarantee ROI and audience growth.' },
]

// 🎬 Replace this URL with your own video file path or hosted video URL.
// Options:
//   - Local file: put your video in /public/hero-video.mp4 and use src="/hero-video.mp4"
//   - Hosted: use a direct .mp4 link from your CDN / cloud storage
//   - Free stock: https://www.pexels.com/videos/ (download & host yourself)
const HERO_VIDEO_SRC = 'https://res.cloudinary.com/dodouazko/video/upload/q_auto/f_auto/v1776627236/13442342_1920_1080_30fps_ijrttr.mp4'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        {/* ── Video Background ── */}
        <div className="hero__video-wrap">
          <video
            className="hero__video"
            src={HERO_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          {/* Dark overlay so text stays readable */}
          <div className="hero__video-overlay" />
        </div>

        <div className="hero__bg" />
        <div className="hero__noise" />
        <div className="hero__grid-line" />

        <div className="hero__inner">
          <div className="hero__content fade-up">
            <div className="hero__eyebrow">Premium Event Agency</div>
            <h1 className="hero__title">
              Built on Trust,<br />
              Bonded by <span className="red">Work,</span><br />
              <span className="outline">Growing Like</span><br />
              a Family.
            </h1>
            <p className="hero__desc">
              We're a group of passionate people who come together like a family to support,
              manage, and bring events to life — with care, energy, and teamwork.
            </p>
            <div className="hero__actions">
              <button className="btn-primary" onClick={() => navigate('/services')}>
                Explore Services <FiArrowRight />
              </button>
              <button className="btn-outline" onClick={() => navigate('/gallery')}>
                View Portfolio
              </button>
            </div>

            <div className="hero__stats fade-up fade-up-3">
              <div>
                <div className="hero__stat-num">200<span>+</span></div>
                <div className="hero__stat-label">Events Done</div>
              </div>
              <div>
                <div className="hero__stat-num">12<span>K</span></div>
                <div className="hero__stat-label">Happy Clients</div>
              </div>
              <div>
                <div className="hero__stat-num">98<span>%</span></div>
                <div className="hero__stat-label">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="hero__visual fade-up fade-up-2">
            <div className="hero__visual-card hero__visual-card--main">
              <img
                src="https://res.cloudinary.com/dodouazko/image/upload/f_auto,q_auto/Pic_0_fhnppk"
                alt="Corporate event stage with dramatic lighting"
              />
            </div>
            {/* <div className="hero__visual-card hero__visual-card--sub">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80"
                alt="Concert crowd and lights"
              />
            </div> */}
            <div className="hero__badge">
              <div className="hero__badge-num">2+</div>
              <div className="hero__badge-text">Years of<br />Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES MINI */}
      <section className="services-preview">
        <div className="services-preview__header fade-up">
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Comprehensive <span>Capabilities</span></h2>
          <p>Everything your event needs, handled with dedication, trust, and the strength of a united crew.</p>
        </div>
        <div className="services-preview__grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card-mini fade-up fade-up-${i + 1}`}
              onClick={() => navigate('/services')}
            >
              <div className="service-card-mini__icon">{s.icon}</div>
              <div className="service-card-mini__title">{s.title}</div>
              <p className="service-card-mini__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="gallery-preview">
        <div className="gallery-preview__header fade-up">
          <div>
            <div className="section-label">Our Work</div>
            <h2 className="section-title">Featured <span>Portfolio</span></h2>
          </div>
        </div>

        <div className="gallery-preview__grid">
          {galleryImages.map((img, i) => (
            <div key={i} className={`gallery-preview__item fade-up fade-up-${i + 1}`}>
              <img src={img.src} alt={img.tag} loading="lazy" />
              <div className="gallery-preview__overlay" />
              <span className="gallery-preview__tag">{img.tag}</span>
            </div>
          ))}
        </div>

        <div className="gallery-preview__footer fade-up">
          <button className="btn-primary" onClick={() => navigate('/gallery')} style={{ marginTop: '32px' }}>
            View Full Gallery <FiArrowRight />
          </button>
        </div>
      </section>

      {/* TESTIMONIAL STRIP */}
      <section className="testimonial-strip">
        <blockquote className="testimonial-strip__quote">
          "At Event Crew, our strength lies in our unity. We work together, support one another, and turn every event into a moment worth remembering."
        </blockquote>
      </section>
    </main>
  )
}
