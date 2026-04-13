import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Anchor,
  Wifi,
  Cpu,
  Shield,
  Navigation,
  Zap,
  Battery,
  Thermometer,
  MapPin,
  Lightbulb,
  Brain,
  Smartphone,
  CheckCircle,
  Star,
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  TrendingDown,
  Eye,
  HeartPulse,
  Globe,
  Compass,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: OceaniqHome,
})

function OceaniqHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0f1e', color: '#e2e8f0' }}>
      <Nav mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <HeroSection />
      <WhatWeDoSection />
      <BoatBuilderSection />
      <PackagesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

/* ─── Navigation ─────────────────────────────────────────── */

function Nav({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (v: boolean) => void
}) {
  return (
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
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}
            >
              <Anchor size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Ocean<span style={{ color: '#0ea5e9' }}>iq</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Build Your System', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium transition-colors"
                style={{ color: '#94a3b8' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#38bdf8')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#94a3b8')}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold text-white"
            >
              Get a Consultation
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-slate-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden px-4 pb-4 pt-2"
          style={{ background: 'rgba(4, 8, 16, 0.95)' }}
        >
          {['Home', 'Services', 'Build Your System', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="block py-3 text-sm font-medium border-b"
              style={{ color: '#94a3b8', borderColor: 'rgba(14, 165, 233, 0.1)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-4 block text-center px-5 py-2 rounded-lg text-sm font-semibold text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Consultation
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─── Hero ───────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #020509 0%, #0a0f1e 35%, #0d1a3a 65%, #060e20 100%)',
      }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(14, 165, 233, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(14,165,233,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 pt-32 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
          style={{
            background: 'rgba(14, 165, 233, 0.1)',
            border: '1px solid rgba(14, 165, 233, 0.3)',
            color: '#38bdf8',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#0ea5e9', boxShadow: '0 0 6px #0ea5e9' }}
          />
          AI-Powered Marine Technology
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          Turn Your Boat Into a{' '}
          <span className="text-gradient">Smart Vessel</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: '#94a3b8' }}
        >
          AI-powered monitoring, automation, and intelligent control systems for
          modern boating. Stay connected, stay safe, stay in command.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#build-your-system"
            className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white"
          >
            Build Your System <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold"
          >
            Get a Consultation
          </a>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 animate-float">
          <div
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(13, 22, 50, 0.8)',
              border: '1px solid rgba(14, 165, 233, 0.25)',
              boxShadow: '0 0 80px rgba(14, 165, 233, 0.1), 0 40px 80px rgba(0,0,0,0.4)',
            }}
          >
            {/* Mock titlebar */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{ borderColor: 'rgba(14, 165, 233, 0.15)', background: 'rgba(4, 8, 16, 0.5)' }}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ef4444' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f59e0b' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#10b981' }} />
              <span className="ml-3 text-xs font-medium" style={{ color: '#475569' }}>
                Oceaniq Dashboard — M/V Horizon
              </span>
            </div>
            {/* Mock dashboard content */}
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Battery size={16} />, label: 'Battery', value: '94%', status: 'good' },
                { icon: <Thermometer size={16} />, label: 'Engine Temp', value: '82°C', status: 'good' },
                { icon: <MapPin size={16} />, label: 'GPS', value: 'Active', status: 'good' },
                { icon: <Wifi size={16} />, label: 'Connectivity', value: 'Online', status: 'good' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl p-3 text-left"
                  style={{ background: 'rgba(14, 165, 233, 0.06)', border: '1px solid rgba(14, 165, 233, 0.15)' }}
                >
                  <div className="flex items-center gap-1.5 mb-2" style={{ color: '#0ea5e9' }}>
                    {item.icon}
                    <span className="text-xs" style={{ color: '#64748b' }}>{item.label}</span>
                  </div>
                  <div className="text-lg font-bold text-white">{item.value}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10b981' }} />
                    <span className="text-xs" style={{ color: '#10b981' }}>Normal</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Mock chart bar */}
            <div
              className="px-6 pb-5"
              style={{ borderTop: '1px solid rgba(14, 165, 233, 0.1)' }}
            >
              <p className="text-xs mt-4 mb-3" style={{ color: '#475569' }}>
                Fuel Efficiency — Last 7 Days
              </p>
              <div className="flex items-end gap-2 h-12">
                {[60, 75, 55, 80, 70, 88, 72].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 5
                          ? 'linear-gradient(180deg, #38bdf8, #0ea5e9)'
                          : 'rgba(14, 165, 233, 0.2)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div
          className="mt-12 flex flex-wrap justify-center gap-8 text-sm"
          style={{ color: '#475569' }}
        >
          {['500+ Vessels Connected', '99.9% Uptime', '24/7 AI Monitoring'].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle size={14} style={{ color: '#0ea5e9' }} />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── What We Do ─────────────────────────────────────────── */

function WhatWeDoSection() {
  const features = [
    {
      icon: <Wifi size={24} />,
      title: 'Smart Monitoring',
      description:
        'Real-time visibility into battery levels, bilge activity, engine temperature, and GPS position. Know the status of every critical system before you board.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Automation',
      description:
        'Automate lights, bilge pumps, ventilation, and onboard systems with intelligent rules. Set it once and let your vessel manage itself.',
    },
    {
      icon: <Brain size={24} />,
      title: 'Predictive AI',
      description:
        'Our AI engine analyzes patterns to predict failures before they happen. Receive proactive alerts, diagnostics, and maintenance schedules tailored to your boat.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Remote Access',
      description:
        'Control and monitor your vessel from anywhere in the world via our mobile app. Check in, take action, or respond to alerts — all from your phone.',
    },
  ]

  return (
    <section
      id="services"
      className="py-24 px-4"
      style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #070d1c 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#0ea5e9' }}
          >
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Intelligence Built for the Water
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748b' }}>
            Four core pillars that transform any vessel into a connected,
            self-aware, AI-powered system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-hover p-6 rounded-2xl glow-border"
              style={{ background: 'rgba(13, 22, 50, 0.6)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(14, 165, 233, 0.12)', color: '#0ea5e9' }}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Boat Builder ───────────────────────────────────────── */

type BoatType = 'small' | 'fishing' | 'cruiser' | 'yacht' | 'commercial' | null
type Feature = 'monitoring' | 'automation' | 'security' | 'ai' | 'navigation'

function BoatBuilderSection() {
  const [step, setStep] = useState(1)
  const [boatType, setBoatType] = useState<BoatType>(null)
  const [features, setFeatures] = useState<Set<Feature>>(new Set())

  const boatTypes: { id: BoatType; label: string; icon: string; desc: string }[] = [
    { id: 'small', label: 'Small Boat', icon: '⛵', desc: 'Under 20ft' },
    { id: 'fishing', label: 'Fishing Boat', icon: '🎣', desc: '20–30ft' },
    { id: 'cruiser', label: 'Cruiser', icon: '🚢', desc: '30–45ft' },
    { id: 'yacht', label: 'Yacht', icon: '⚓', desc: '45ft+' },
    { id: 'commercial', label: 'Commercial', icon: '🏭', desc: 'Work Vessels' },
  ]

  const availableFeatures: { id: Feature; label: string; icon: React.ReactNode; desc: string }[] = [
    { id: 'monitoring', label: 'Smart Monitoring', icon: <Battery size={18} />, desc: 'Battery, bilge, temp, GPS' },
    { id: 'automation', label: 'Automation', icon: <Zap size={18} />, desc: 'Lights, pumps, systems' },
    { id: 'security', label: 'Security & Alerts', icon: <Shield size={18} />, desc: 'Motion, intrusion, alarms' },
    { id: 'ai', label: 'AI Diagnostics', icon: <Brain size={18} />, desc: 'Predictive maintenance' },
    { id: 'navigation', label: 'Navigation Assist', icon: <Compass size={18} />, desc: 'Weather & route intel' },
  ]

  const toggleFeature = (id: Feature) => {
    setFeatures((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const getRecommendedPackage = () => {
    const count = features.size
    if (features.has('ai') || features.has('navigation') || count >= 4)
      return { name: 'Captain Package', tier: 'premium', color: '#f59e0b' }
    if (features.has('automation') || features.has('security') || count >= 2)
      return { name: 'Smart Control', tier: 'mid', color: '#0ea5e9' }
    return { name: 'Smart Start', tier: 'entry', color: '#10b981' }
  }

  const pkg = getRecommendedPackage()

  return (
    <section
      id="build-your-system"
      className="py-24 px-4"
      style={{
        background: 'linear-gradient(180deg, #070d1c 0%, #0a0f1e 100%)',
        borderTop: '1px solid rgba(14, 165, 233, 0.1)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0ea5e9' }}>
            Interactive Builder
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Build Your Boat System</h2>
          <p className="text-lg" style={{ color: '#64748b' }}>
            Tell us about your vessel. We'll recommend the perfect Oceaniq package.
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                style={{
                  background: step >= s ? 'linear-gradient(135deg, #0ea5e9, #0284c7)' : 'rgba(14, 165, 233, 0.1)',
                  color: step >= s ? 'white' : '#475569',
                  border: step >= s ? 'none' : '1px solid rgba(14, 165, 233, 0.2)',
                }}
              >
                {step > s ? <CheckCircle size={16} /> : s}
              </div>
              {s < 3 && (
                <div
                  className="w-16 h-0.5 transition-all duration-500"
                  style={{ background: step > s ? '#0ea5e9' : 'rgba(14, 165, 233, 0.15)' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step labels */}
        <div className="flex justify-center gap-12 mb-10 text-xs font-medium" style={{ color: '#64748b' }}>
          <span style={{ color: step === 1 ? '#38bdf8' : undefined }}>Boat Type</span>
          <span style={{ color: step === 2 ? '#38bdf8' : undefined }}>Features</span>
          <span style={{ color: step === 3 ? '#38bdf8' : undefined }}>Your Package</span>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: 'rgba(13, 22, 50, 0.7)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            boxShadow: '0 0 60px rgba(14, 165, 233, 0.05)',
          }}
        >
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-2">What type of vessel do you have?</h3>
              <p className="text-sm mb-6" style={{ color: '#64748b' }}>
                Select the option that best describes your boat.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {boatTypes.map((bt) => (
                  <button
                    key={bt.id}
                    onClick={() => setBoatType(bt.id)}
                    className="p-4 rounded-xl text-center transition-all duration-200"
                    style={{
                      background:
                        boatType === bt.id
                          ? 'rgba(14, 165, 233, 0.2)'
                          : 'rgba(14, 165, 233, 0.05)',
                      border:
                        boatType === bt.id
                          ? '2px solid #0ea5e9'
                          : '1px solid rgba(14, 165, 233, 0.15)',
                      transform: boatType === bt.id ? 'scale(1.03)' : 'scale(1)',
                    }}
                  >
                    <div className="text-2xl mb-2">{bt.icon}</div>
                    <div className="text-xs font-semibold text-white">{bt.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{bt.desc}</div>
                  </button>
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <button
                  onClick={() => setStep(2)}
                  disabled={!boatType}
                  className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next Step <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Which features matter most to you?</h3>
              <p className="text-sm mb-6" style={{ color: '#64748b' }}>
                Select all that apply. We'll use this to build your recommendation.
              </p>
              <div className="space-y-3">
                {availableFeatures.map((feat) => {
                  const selected = features.has(feat.id)
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className="w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200"
                      style={{
                        background: selected ? 'rgba(14, 165, 233, 0.15)' : 'rgba(14, 165, 233, 0.04)',
                        border: selected ? '1px solid rgba(14, 165, 233, 0.5)' : '1px solid rgba(14, 165, 233, 0.12)',
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: selected ? 'rgba(14, 165, 233, 0.25)' : 'rgba(14, 165, 233, 0.08)',
                          color: selected ? '#38bdf8' : '#64748b',
                        }}
                      >
                        {feat.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-white">{feat.label}</div>
                        <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{feat.desc}</div>
                      </div>
                      <div
                        className="w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all duration-200"
                        style={{
                          background: selected ? '#0ea5e9' : 'transparent',
                          borderColor: selected ? '#0ea5e9' : '#334155',
                        }}
                      >
                        {selected && <CheckCircle size={12} className="text-white" />}
                      </div>
                    </button>
                  )
                })}
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="btn-secondary px-5 py-2.5 rounded-xl font-semibold text-sm"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={features.size === 0}
                  className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  See My Package <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Your Recommended Package</h3>
              <p className="text-sm mb-6" style={{ color: '#64748b' }}>
                Based on your selections, here's what we recommend.
              </p>

              <div
                className="rounded-xl p-6 mb-6"
                style={{
                  background: `rgba(${pkg.color === '#f59e0b' ? '245, 158, 11' : pkg.color === '#0ea5e9' ? '14, 165, 233' : '16, 185, 129'}, 0.08)`,
                  border: `1px solid ${pkg.color}40`,
                }}
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: pkg.color }}
                    >
                      Recommended for you
                    </div>
                    <div className="text-2xl font-black text-white">{pkg.name}</div>
                    <div className="text-sm mt-1" style={{ color: '#64748b' }}>
                      {boatTypes.find((b) => b.id === boatType)?.label} •{' '}
                      {features.size} feature{features.size !== 1 ? 's' : ''} selected
                    </div>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: `${pkg.color}20`, color: pkg.color, border: `1px solid ${pkg.color}40` }}
                  >
                    {pkg.tier === 'premium' ? '⭐ Premium' : pkg.tier === 'mid' ? '🔵 Most Popular' : '🟢 Entry'}
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t" style={{ borderColor: `${pkg.color}20` }}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#475569' }}>
                    Selected Features
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[...features].map((f) => {
                      const feat = availableFeatures.find((x) => x.id === f)!
                      return (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: 'rgba(14, 165, 233, 0.1)',
                            color: '#38bdf8',
                            border: '1px solid rgba(14, 165, 233, 0.2)',
                          }}
                        >
                          {feat.icon}
                          {feat.label}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/boat-builder"
                  className="btn-primary flex-1 text-center py-3 rounded-xl font-semibold text-white"
                >
                  Get a Custom Quote
                </Link>
                <button
                  onClick={() => { setStep(1); setBoatType(null); setFeatures(new Set()) }}
                  className="btn-secondary px-5 py-3 rounded-xl font-semibold text-sm"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─── Packages ───────────────────────────────────────────── */

function PackagesSection() {
  const packages = [
    {
      const packages = [
  {
    emoji: '🟢',
    name: 'Starter',
    tagline: 'Smart Monitoring for Your Vessel',
    price: 'Contact for pricing',
    tier: 'entry',
    color: '#10b981',
    features: [
      'Battery & power monitoring',
      'Bilge / water alerts',
      'GPS tracking & geofencing',
      'Mobile app access',
      'Basic setup & support',
    ],
    highlight: false,
  },
  {
    emoji: '🔵',
    name: 'Pro',
    tagline: 'Full Control & Automation',
    price: 'Contact for pricing',
    tier: 'mid',
    color: '#0ea5e9',
    features: [
      'Everything in Starter',
      'Remote system control (lights, pumps)',
      'Multiple sensor integrations',
      'Custom alerts & automation',
      'Advanced dashboard',
    ],
    highlight: true,
  },
  {
    emoji: '⚡',
    name: 'AI Premium',
    tagline: 'Voice-Controlled Smart Vessel',
    price: 'Contact for pricing',
    tier: 'top',
    color: '#8b5cf6',
    features: [
      'Everything in Pro',
      'AI voice command system',
      'Voice status updates',
      'Hands-free system control',
      'Protected commands with safety confirmations',
    ],
    highlight: false,
  },
]
    },
  ]

  return (
    <section
      id="services"
      className="py-24 px-4"
      style={{
        background: 'linear-gradient(180deg, #0a0f1e 0%, #070d1c 100%)',
        borderTop: '1px solid rgba(14, 165, 233, 0.1)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0ea5e9' }}>
            Service Packages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Level of Intelligence
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748b' }}>
            From essential monitoring to a fully autonomous AI-powered vessel — we
            have the right package for every captain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="card-hover relative rounded-2xl p-7 flex flex-col"
              style={{
                background: pkg.highlight ? 'rgba(14, 165, 233, 0.08)' : 'rgba(13, 22, 50, 0.6)',
                border: pkg.highlight
                  ? '2px solid rgba(14, 165, 233, 0.5)'
                  : '1px solid rgba(14, 165, 233, 0.15)',
                boxShadow: pkg.highlight ? '0 0 40px rgba(14, 165, 233, 0.12)' : 'none',
              }}
            >
              {pkg.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}
                >
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{pkg.emoji}</span>
                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
              </div>
              <p className="text-sm font-medium mb-1" style={{ color: pkg.color }}>
                {pkg.tagline}
              </p>
              <p className="text-xs mb-6" style={{ color: '#475569' }}>
                {pkg.price}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: pkg.color }} />
                    <span style={{ color: '#94a3b8' }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={
                  pkg.highlight
                    ? {
                        background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                        color: 'white',
                      }
                    : {
                        background: 'transparent',
                        border: `1px solid ${pkg.color}60`,
                        color: pkg.color,
                      }
                }
                onMouseEnter={(e) => {
                  if (!pkg.highlight) {
                    ;(e.target as HTMLElement).style.background = `${pkg.color}15`
                  }
                }}
                onMouseLeave={(e) => {
                  if (!pkg.highlight) {
                    ;(e.target as HTMLElement).style.background = 'transparent'
                  }
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Benefits ───────────────────────────────────────────── */

function BenefitsSection() {
  const benefits = [
    {
      icon: <HeartPulse size={22} />,
      title: 'Peace of Mind',
      desc: 'Know your boat is safe 24/7, even when you\'re hundreds of miles away. Sleep soundly, every night.',
    },
    {
      icon: <Shield size={22} />,
      title: 'Increased Safety',
      desc: 'Real-time alerts notify you before problems escalate into costly — or dangerous — emergencies.',
    },
    {
      icon: <TrendingDown size={22} />,
      title: 'Lower Maintenance Costs',
      desc: 'Catch issues before they compound. Predictive AI identifies wear patterns weeks before failure.',
    },
    {
      icon: <Globe size={22} />,
      title: 'Full Remote Awareness',
      desc: 'Monitor and control your vessel from anywhere in the world with a single tap on your phone.',
    },
    {
      icon: <Eye size={22} />,
      title: 'Smarter Boating Decisions',
      desc: 'AI-powered insights give you a full operational picture for every journey, not just when things go wrong.',
    },
  ]

  return (
    <section
      className="py-24 px-4"
      style={{
        background: 'linear-gradient(180deg, #070d1c 0%, #0a0f1e 100%)',
        borderTop: '1px solid rgba(14, 165, 233, 0.1)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0ea5e9' }}>
            Why Oceaniq
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Outcomes for Real Captains
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="card-hover p-6 rounded-2xl"
              style={{
                background: 'rgba(13, 22, 50, 0.5)',
                border: '1px solid rgba(14, 165, 233, 0.12)',
                gridColumn: i === 4 ? 'span 1' : 'auto',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9' }}
              >
                {b.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{b.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works ───────────────────────────────────────── */

function HowItWorksSection() {
  const steps = [
    {
      num: 1,
      title: 'Build Your System',
      desc: 'Use our interactive builder to configure the perfect system for your boat type and needs.',
    },
    {
      num: 2,
      title: 'Consultation & Planning',
      desc: 'Our marine technology experts design a custom solution tailored to your vessel and goals.',
    },
    {
      num: 3,
      title: 'Professional Installation',
      desc: 'Certified technicians handle seamless setup with zero disruption to your boating schedule.',
    },
    {
      num: 4,
      title: 'Ongoing Monitoring & Support',
      desc: '24/7 AI monitoring, continuous optimization, and a dedicated support team — always in your corner.',
    },
  ]

  return (
    <section
      className="py-24 px-4"
      style={{
        background: 'linear-gradient(180deg, #0a0f1e 0%, #070d1c 100%)',
        borderTop: '1px solid rgba(14, 165, 233, 0.1)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0ea5e9' }}>
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748b' }}>
            From first consultation to live monitoring — we handle everything.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-6 left-full w-full h-px -translate-x-1/2 z-0"
                  style={{ background: 'linear-gradient(90deg, rgba(14,165,233,0.4), rgba(14,165,233,0.1))' }}
                />
              )}
              <div
                className="card-hover relative z-10 p-6 rounded-2xl h-full"
                style={{
                  background: 'rgba(13, 22, 50, 0.6)',
                  border: '1px solid rgba(14, 165, 233, 0.15)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black mb-5"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', color: 'white' }}
                >
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ───────────────────────────────────────── */

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Captain James Whitfield',
      boat: '42ft Beneteau Cruiser',
      stars: 5,
      text: "Oceaniq has completely changed how I maintain my boat. The predictive alerts caught a bilge pump issue before I even noticed anything wrong. I can't imagine owning a boat without this system now.",
    },
    {
      name: 'Marina DeLuca',
      boat: '36ft Hunting Motorboat',
      stars: 5,
      text: "I travel internationally for work and my boat sits in the marina for weeks at a time. With Oceaniq's remote monitoring, I have total peace of mind. The app is clean, intuitive, and genuinely useful.",
    },
    {
      name: 'Thomas Bergmann',
      boat: '68ft Commercial Vessel',
      stars: 5,
      text: 'We run three commercial vessels and Oceaniq manages all of them from a single dashboard. The AI diagnostics have reduced our maintenance spend by over 30%. The ROI was immediate.',
    },
  ]

  return (
    <section
      className="py-24 px-4"
      style={{
        background: 'linear-gradient(180deg, #070d1c 0%, #0a0f1e 100%)',
        borderTop: '1px solid rgba(14, 165, 233, 0.1)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0ea5e9' }}>
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Captains Worldwide
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover p-7 rounded-2xl flex flex-col"
              style={{
                background: 'rgba(13, 22, 50, 0.6)',
                border: '1px solid rgba(14, 165, 233, 0.15)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#94a3b8' }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(14, 165, 233, 0.1)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs" style={{ color: '#475569' }}>{t.boat}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Contact ────────────────────────────────────────────── */

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    boatType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-24 px-4"
      style={{
        background: 'linear-gradient(160deg, #040810 0%, #071428 50%, #0a0f1e 100%)',
        borderTop: '1px solid rgba(14, 165, 233, 0.1)',
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#0ea5e9' }}>
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Building Your Boat System
          </h2>
          <p className="text-lg" style={{ color: '#64748b' }}>
            Tell us about your vessel and goals. Our team will craft a custom
            solution and get back to you within one business day.
          </p>
        </div>

        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: 'rgba(13, 22, 50, 0.7)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            boxShadow: '0 0 80px rgba(14, 165, 233, 0.06)',
          }}
        >
          {submitted ? (
            <div className="text-center py-10">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: 'rgba(16, 185, 129, 0.15)' }}
              >
                <CheckCircle size={32} style={{ color: '#10b981' }} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
              <p style={{ color: '#64748b' }}>
                Thanks for reaching out. A member of the Oceaniq team will be in
                touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Captain James"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(14, 165, 233, 0.05)',
                      border: '1px solid rgba(14, 165, 233, 0.2)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0ea5e9')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(14, 165, 233, 0.2)')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(14, 165, 233, 0.05)',
                      border: '1px solid rgba(14, 165, 233, 0.2)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0ea5e9')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(14, 165, 233, 0.2)')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>
                  Boat Type
                </label>
                <select
                  required
                  value={formData.boatType}
                  onChange={(e) => setFormData({ ...formData, boatType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: 'rgba(14, 165, 233, 0.05)',
                    border: '1px solid rgba(14, 165, 233, 0.2)',
                    color: formData.boatType ? 'white' : '#475569',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#0ea5e9')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(14, 165, 233, 0.2)')}
                >
                  <option value="" style={{ background: '#0a0f1e' }}>Select your boat type</option>
                  {['Small Boat (Under 20ft)', 'Fishing Boat (20–30ft)', 'Cruiser (30–45ft)', 'Yacht (45ft+)', 'Commercial Vessel'].map((o) => (
                    <option key={o} value={o} style={{ background: '#0a0f1e' }}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#94a3b8' }}>
                  What are you looking for?
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your vessel, current challenges, and what you'd like to achieve with Oceaniq..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    background: 'rgba(14, 165, 233, 0.05)',
                    border: '1px solid rgba(14, 165, 233, 0.2)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#0ea5e9')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(14, 165, 233, 0.2)')}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
              >
                Send My Request <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─────────────────────────────────────────────── */

function Footer() {
  return (
    <footer
      className="py-10 px-4"
      style={{
        background: '#040810',
        borderTop: '1px solid rgba(14, 165, 233, 0.1)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}
            >
              <Anchor size={15} className="text-white" />
            </div>
            <span className="text-lg font-bold text-white">
              Ocean<span style={{ color: '#0ea5e9' }}>iq</span>
            </span>
          </div>

          <p className="text-sm" style={{ color: '#334155' }}>
            &copy; 2026 Oceaniq. All rights reserved. Smart boating technology.
          </p>

          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Support'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-sm transition-colors"
                style={{ color: '#334155' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#0ea5e9')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#334155')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
