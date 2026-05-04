'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contacts').insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || null,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const labelClasses = "block text-xs font-semibold tracking-widest text-[var(--text-secondary)] uppercase mb-3";
  const inputClasses = "w-full px-5 py-4 rounded-lg bg-[var(--bg-primary)] border-2 border-transparent text-[var(--text-primary)] transition-all duration-300 outline-none focus:border-[var(--accent)] shadow-inner";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>YOUR NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            style={{ 
              boxShadow: 'var(--shadow-inner)',
            }}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>EMAIL ADDRESS</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            style={{ 
              boxShadow: 'var(--shadow-inner)',
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClasses}>SUBJECT</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClasses}
          style={{ 
            boxShadow: 'var(--shadow-inner)',
          }}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>YOUR MESSAGE</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`${inputClasses} resize-none`}
          style={{ 
            boxShadow: 'var(--shadow-inner)',
          }}
        />
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
          <CheckCircle size={16} />
          Message sent successfully!
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm bg-rose-500/10 text-rose-500 border border-rose-500/20">
          <AlertCircle size={16} />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inbio-button w-full flex items-center justify-center gap-3 py-4 text-sm font-bold uppercase tracking-widest"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            SENDING...
          </>
        ) : (
          <>
            SEND MESSAGE
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
