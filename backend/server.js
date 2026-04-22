require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 5000

// ── Middleware ──────────────────────────────────────────────
app.use(express.json())
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}))

// Rate limiter: max 5 contact submissions per IP per 15 min
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
})

// ── Nodemailer transporter ──────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

// ── Validation helper ───────────────────────────────────────
function validate({ firstName, lastName, email, service, message }) {
  const errors = []
  if (!firstName?.trim()) errors.push('First name is required')
  if (!lastName?.trim()) errors.push('Last name is required')
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required')
  if (!service?.trim()) errors.push('Please select a service')
  if (!message?.trim() || message.trim().length < 10) errors.push('Message must be at least 10 characters')
  return errors
}

// ── Routes ──────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { firstName, lastName, email, phone, service, message } = req.body

  // Validate
  const errors = validate({ firstName, lastName, email, service, message })
  if (errors.length > 0) {
    return res.status(400).json({ error: 'Validation failed', details: errors })
  }

  // Sanitise basic spam signals
  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message too long' })
  }

  try {
    // Email to the business
    await transporter.sendMail({
      from: `"EventCrew Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Enquiry: ${service} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#111;color:#fff;padding:32px;border-radius:8px;">
          <div style="background:#e50000;padding:12px 20px;border-radius:4px;margin-bottom:24px;">
            <h2 style="margin:0;font-size:1.2rem;letter-spacing:0.1em;">NEW CONTACT ENQUIRY</h2>
          </div>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#e50000;">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Service:</strong> ${service}</p>
          <hr style="border-color:#333;margin:20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="color:#ccc;line-height:1.7;">${message.replace(/\n/g, '<br>')}</p>
          <hr style="border-color:#333;margin:20px 0;" />
          <p style="font-size:0.75rem;color:#555;">Submitted via evencrew.com contact form</p>
        </div>
      `,
    })

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"EventCrew" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your message, ${firstName}!`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#111;color:#fff;padding:32px;border-radius:8px;">
          <div style="background:#e50000;padding:12px 20px;border-radius:4px;margin-bottom:24px;">
            <h2 style="margin:0;font-size:1.2rem;letter-spacing:0.1em;">EVENTCREW</h2>
          </div>
          <p>Hi ${firstName},</p>
          <p>Thanks for reaching out! We've received your enquiry about <strong>${service}</strong> and will get back to you within 24 hours.</p>
          <p style="color:#888;font-size:0.875rem;">Your message: <em>"${message.substring(0, 120)}${message.length > 120 ? '...' : ''}"</em></p>
          <hr style="border-color:#333;margin:20px 0;" />
          <p>— The EventCrew Team</p>
          <p style="color:#555;font-size:0.75rem;">hello@evencrew.com</p>
        </div>
      `,
    })

    res.json({ success: true, message: 'Message sent successfully' })
  } catch (err) {
    console.error('Email error:', err)
    res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
})

// ── Start ───────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  EventCrew API running on http://localhost:${PORT}`)
})
