import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: 'Buying',
    preferredLocation: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const interestOptions = ['Buying', 'Selling', 'Renting', 'Investing'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#FF3B3B] font-mono font-bold">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-2">
            LET'S TALK <span className="text-gradient-red">REAL ESTATE</span>
          </h2>
          <p className="text-sm text-[#A7A7A7] mt-3">
            Schedule a private consultation or send us your inquiry. Our senior team responds within 2 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office Details & Embedded Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="border-b border-white/10 pb-6">
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  NEXORA REALTY HQ
                </h3>
                <p className="text-xs text-[#A7A7A7]">Global Flagship Advisory Office</p>
              </div>

              <div className="space-y-5 text-sm text-gray-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#E50914]" />
                  </div>
                  <div>
                    <strong className="block text-white">Address</strong>
                    <span className="text-xs text-[#A7A7A7]">123 Madison Avenue, New York, NY 10016</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#E50914]" />
                  </div>
                  <div>
                    <strong className="block text-white">Phone</strong>
                    <a href="tel:8265849875" className="text-xs text-[#A7A7A7] hover:text-[#E50914] transition-colors">
                      8265849875
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#E50914]" />
                  </div>
                  <div>
                    <strong className="block text-white">Email</strong>
                    <a href="mailto:hello@nexorarealty.com" className="text-xs text-[#A7A7A7] hover:text-[#E50914] transition-colors">
                      hello@nexorarealty.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#E50914]" />
                  </div>
                  <div>
                    <strong className="block text-white">Office Hours</strong>
                    <span className="text-xs text-[#A7A7A7]">Mon–Fri: 9:00 AM – 6:00 PM (EST)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Dark Map Graphic Section */}
            <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
                alt="Map Graphic"
                className="w-full h-full object-cover filter brightness-50 contrast-125 saturate-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#080808]/40" />

              {/* Map Marker Pin Visualizer */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-[#E50914] opacity-75" />
                  <div className="relative w-10 h-10 rounded-full bg-[#E50914] flex items-center justify-center text-white shadow-xl shadow-[#E50914]/50">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#080808]/80 backdrop-blur-md rounded-xl border border-white/10 text-xs text-center text-gray-300 font-mono">
                Madison Avenue Flagship • Manhattan, NY
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-gradient-red flex items-center justify-center mx-auto text-white shadow-xl shadow-[#E50914]/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-sm text-[#A7A7A7] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. A senior Nexora advisor will contact you shortly regarding your {formData.interest.toLowerCase()} request.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        interest: 'Buying',
                        preferredLocation: '',
                        budget: '',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#171717] hover:bg-[#222] border border-white/15 text-xs text-white font-semibold transition-colors mt-4"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Interest Option Buttons */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A7A7] mb-2 font-mono">
                      I'm Interested In:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {interestOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, interest: opt })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                            formData.interest === opt
                              ? 'bg-[#E50914] text-white border-[#E50914] shadow-md shadow-[#E50914]/20'
                              : 'bg-[#111111] text-[#A7A7A7] border-white/10 hover:border-white/20'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A7A7] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A7A7] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A7A7] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A7A7] mb-1.5">
                        Preferred Location
                      </label>
                      <input
                        type="text"
                        value={formData.preferredLocation}
                        onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                        placeholder="Beverly Hills, Manhattan, Miami..."
                        className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A7A7] mb-1.5">
                      Target Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914] transition-colors"
                    >
                      <option value="">Select Target Budget</option>
                      <option value="1m-3m">$1,000,000 – $3,000,000</option>
                      <option value="3m-5m">$3,000,000 – $5,000,000</option>
                      <option value="5m-10m">$5,000,000 – $10,000,000</option>
                      <option value="10m+">$10,000,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A7A7] mb-1.5">
                      Your Message or Specific Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your property goals, timeline, or requested viewing dates..."
                      className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 bg-gradient-red hover:bg-gradient-red-hover text-white font-bold rounded-xl transition-all shadow-xl shadow-[#E50914]/25 flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    {loading ? (
                      <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Confidential Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
