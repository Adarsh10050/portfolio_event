import { useState } from 'react'
import { FiSend, FiMail, FiMapPin } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [status, setStatus] = useState(null)

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await emailjs.send(
        'service_tnyevop',           // ✅ your service ID
        'template_ldqf5ya',          // ✅ your template ID
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        'bZyPvqrUgdbsxBstn'    
      )

      setStatus('success')

      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })

    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <main className="page contact-page">
      <div className="page-hero">
        <div className="container fade-up">
          <div className="section-label">Get In Touch</div>
          <h1 className="section-title">Let's Build <span>Together</span></h1>
          <div className="red-line" />
        </div>
      </div>

      <div className="contact-layout">

        {/* Info */}
        <div className="contact-info fade-up">
          <h2>Ready to Build<br /><span style={{ color: 'var(--red)' }}>Memories Together?</span></h2>

          <div className="contact-detail">
            <div className="contact-detail__item">
              <div className="contact-detail__icon"><FiMail /></div>
              <div>
                <div className="contact-detail__label">Email Us</div>
                <div className="contact-detail__value">eventcrewofficial@gmail.com</div>
              </div>
            </div>

            <div className="contact-detail__item">
              <div className="contact-detail__icon"><FiMapPin /></div>
              <div>
                <div className="contact-detail__label">Headquarters</div>
                <div className="contact-detail__value">Chandigarh University</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form fade-up fade-up-2" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>

          <div className="form-row">
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
          </div>

          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />

          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" />

          <select name="service" value={form.service} onChange={handleChange} required>
            <option value="">Select a service...</option>
            <option value="Event Support">Event Support</option>
            <option value="Media Production">Media Production</option>
            <option value="Logistics">Logistics</option>
            <option value="Marketing">Marketing</option>
          </select>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            required
          />

          <button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : <><FiSend /> Send Message</>}
          </button>

          {status === 'success' && <p className="form-success">✅ Message sent successfully!</p>}
          {status === 'error' && <p className="form-error">❌ Something went wrong</p>}
        </form>

      </div>
    </main>
  )
}