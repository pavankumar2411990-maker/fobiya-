import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle, Building2 } from 'lucide-react';
import { Property } from '../types/property';

interface ScheduleConsultationModalProps {
  property?: Property | null;
  mode?: 'viewing' | 'consultation' | 'list-property';
  onClose: () => void;
}

export const ScheduleConsultationModal: React.FC<ScheduleConsultationModalProps> = ({
  property,
  mode = 'consultation',
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const titles = {
    viewing: property ? `Schedule Tour: ${property.title}` : 'Schedule Property Tour',
    consultation: 'Private Real Estate Consultation',
    'list-property': 'List Your Property With Nexora',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg bg-[#080808] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#171717] text-white hover:text-[#E50914] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-red flex items-center justify-center mx-auto text-white shadow-xl shadow-[#E50914]/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              {mode === 'list-property' ? 'Property Valuation Submitted' : 'Appointment Confirmed'}
            </h3>
            <p className="text-sm text-[#A7A7A7] leading-relaxed">
              Thank you, <span className="text-white font-semibold">{fullName}</span>. Our senior real estate advisor will confirm details at <span className="text-white font-semibold">{email}</span> within 2 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-8 py-3 rounded-full bg-gradient-red text-white text-xs font-bold transition-all shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E50914]">
                {mode === 'list-property' ? 'Bespoke Valuation' : 'VIP Consultation'}
              </span>
              <h2 className="font-display text-2xl font-bold text-white mt-1">
                {titles[mode]}
              </h2>
              <p className="text-xs text-[#A7A7A7] mt-1">
                Direct access to Nexora's top advisory desk.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#A7A7A7] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-500" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-[#111111] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#A7A7A7] mb-1">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full bg-[#111111] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[#A7A7A7] mb-1">
                    Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-500" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#111111] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914]"
                    />
                  </div>
                </div>
              </div>

              {mode !== 'list-property' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#A7A7A7] mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-500" />
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#111111] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E50914]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#A7A7A7] mb-1">
                      Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 absolute left-3.5 top-3.5 text-gray-500" />
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-[#111111] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E50914]"
                      >
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold uppercase text-[#A7A7A7] mb-1">
                  {mode === 'list-property' ? 'Property Address & Overview' : 'Additional Notes / Preferences'}
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={mode === 'list-property' ? 'Address, property specs, expected price...' : 'Specific requirements or questions...'}
                  className="w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-gradient-red hover:bg-gradient-red-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-[#E50914]/25 mt-2"
              >
                {mode === 'list-property' ? 'Submit Property For Valuation' : 'Confirm Appointment'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
