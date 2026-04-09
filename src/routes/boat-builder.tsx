import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Anchor,
  CheckCircle,
  ChevronDown,
  Send,
  Battery,
  Zap,
  Shield,
  Brain,
  Compass,
} from 'lucide-react'

export const Route = createFileRoute('/boat-builder')({
  component: BoatBuilderForm,
})

const boatTypes = [
  'Small Boat (Under 20ft)',
  'Fishing Boat (20–30ft)',
  'Cruiser (30–45ft)',
  'Yacht (45ft+)',
  'Commercial / Work Vessel',
]

const featureOptions = [
  { id: 'monitoring', label: 'Smart Monitoring', icon: <Battery size={16} /> },
  { id: 'automation', label: 'Automation', icon: <Zap size={16} /> },
  { id: 'security', label: 'Security & Alerts', icon: <Shield size={16} /> },
  { id: 'ai-diagnostics', label: 'AI Diagnostics', icon: <Brain size={16} /> },
  { id: 'navigation', label: 'Navigation Assist', icon: <Compass size={16} /> },
]

const packageTiers = ['Smart Start', 'Smart Control', 'AI Captain']

function BoatBuilderForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set())
  const [selectedTier, setSelectedTier] = useState<string>('')

  const toggleFeature = (label: string) => {
    setSelectedFeatures((prev) => {
      const next = new Set(prev)
      next.has(label) ? next.delete(label) : next.add(label)
      return next
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0f1e', color: '#e2e8f0' }}>
      {/* Header */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(4, 8, 16, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(14, 165, 233, 0.15)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}
              >
                <Anchor size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Ocean<span style={{ color: '#0ea5e9' }}>iq</span>
              </span>
            </Link>
            <Link
              to="/"
              className="text-sm font-medium transition-colors"
              style={{ color: '#94a3b8' }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-28 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-10">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#0ea5e9' }}
            >
              Custom Build Inquiry
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Your <span className="text-gradient">Custom Build</span>
            </h1>
            <p className="text-lg" style={{ color: '#64748b' }}>
              Tell us about your vessel and goals. Our team will design a tailored smart boating package for you.
            </p>
          </div>

          {/* Confirmation State */}
          {submitted ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                background: 'rgba(13, 22, 50, 0.7)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                boxShadow: '0 0 60px rgba(16, 185, 129, 0.08)',
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(16, 185, 129, 0.15)' }}
              >
                <CheckCircle size={32} style={{ color: '#10b981' }} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Request Received</h2>
              <p className="text-lg" style={{ color: '#94a3b8' }}>
                Thanks, we'll contact you shortly about your custom build.
              </p>
              <Link
                to="/"
                className="btn-primary inline-block mt-8 px-8 py-3 rounded-xl font-semibold text-white"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            /* Form */
            <form
              name="boat-builder-lead"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 md:p-10 space-y-6"
              style={{
                background: 'rgba(13, 22, 50, 0.7)',
                border: '1px solid rgba(14, 165, 233, 0.2)',
                boxShadow: '0 0 60px rgba(14, 165, 233, 0.05)',
              }}
            >
              <input type="hidden" name="form-name" value="boat-builder-lead" />
              <p style={{ display: 'none' }}>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Captain Jane Doe"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none transition-all duration-200 focus:ring-2"
                  style={{
                    background: 'rgba(14, 165, 233, 0.06)',
                    border: '1px solid rgba(14, 165, 233, 0.2)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#0ea5e9')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.2)')}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="captain@example.com"
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none transition-all duration-200 focus:ring-2"
                  style={{
                    background: 'rgba(14, 165, 233, 0.06)',
                    border: '1px solid rgba(14, 165, 233, 0.2)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#0ea5e9')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.2)')}
                />
              </div>

              {/* Boat Type Dropdown */}
              <div>
                <label htmlFor="boat-type" className="block text-sm font-semibold text-white mb-2">
                  Boat Type
                </label>
                <div className="relative">
                  <select
                    id="boat-type"
                    name="boat-type"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all duration-200 appearance-none cursor-pointer focus:ring-2"
                    style={{
                      background: 'rgba(14, 165, 233, 0.06)',
                      border: '1px solid rgba(14, 165, 233, 0.2)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#0ea5e9')}
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.2)')
                    }
                  >
                    <option value="" disabled style={{ background: '#0d1632' }}>
                      Select your vessel type
                    </option>
                    {boatTypes.map((type) => (
                      <option key={type} value={type} style={{ background: '#0d1632' }}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={18}
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ color: '#64748b' }}
                  />
                </div>
              </div>

              {/* Features Checkboxes */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Selected Features
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featureOptions.map((feat) => {
                    const checked = selectedFeatures.has(feat.label)
                    return (
                      <label
                        key={feat.id}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200"
                        style={{
                          background: checked ? 'rgba(14, 165, 233, 0.15)' : 'rgba(14, 165, 233, 0.04)',
                          border: checked ? '1px solid rgba(14, 165, 233, 0.5)' : '1px solid rgba(14, 165, 233, 0.12)',
                        }}
                      >
                        <input
                          type="checkbox"
                          name="features"
                          value={feat.label}
                          checked={checked}
                          onChange={() => toggleFeature(feat.label)}
                          className="sr-only"
                        />
                        <div
                          className="w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center transition-all duration-200"
                          style={{
                            background: checked ? '#0ea5e9' : 'transparent',
                            border: checked ? '1px solid #0ea5e9' : '1px solid #334155',
                          }}
                        >
                          {checked && <CheckCircle size={12} className="text-white" />}
                        </div>
                        <span className="flex items-center gap-2 text-sm" style={{ color: checked ? '#e2e8f0' : '#94a3b8' }}>
                          <span style={{ color: '#38bdf8' }}>{feat.icon}</span>
                          {feat.label}
                        </span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* Package Tier */}
              <div>
                <label className="block text-sm font-semibold text-white mb-3">
                  Package Tier
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {packageTiers.map((tier) => {
                    const checked = selectedTier === tier
                    return (
                      <label
                        key={tier}
                        className="relative flex items-center justify-center px-4 py-3 rounded-xl cursor-pointer text-center transition-all duration-200"
                        style={{
                          background: checked ? 'rgba(14, 165, 233, 0.12)' : 'rgba(14, 165, 233, 0.04)',
                          border: checked ? '2px solid #0ea5e9' : '1px solid rgba(14, 165, 233, 0.12)',
                        }}
                      >
                        <input
                          type="radio"
                          name="package-tier"
                          value={tier}
                          required
                          checked={checked}
                          onChange={() => setSelectedTier(tier)}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium" style={{ color: checked ? '#38bdf8' : '#94a3b8' }}>
                          {tier}
                        </span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-white mb-2">
                  Notes / Additional Details
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Tell us about your boating goals, current setup, or any specific requirements..."
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-slate-500 outline-none transition-all duration-200 resize-none focus:ring-2"
                  style={{
                    background: 'rgba(14, 165, 233, 0.06)',
                    border: '1px solid rgba(14, 165, 233, 0.2)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#0ea5e9')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.2)')}
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-sm text-red-400 text-center">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send size={18} />
                    Submit Build Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="py-8 text-center text-sm"
        style={{ color: '#475569', borderTop: '1px solid rgba(14, 165, 233, 0.1)' }}
      >
        &copy; {new Date().getFullYear()} Oceaniq. All rights reserved.
      </footer>
    </div>
  )
}
