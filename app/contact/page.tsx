'use client';
import React, { useState } from 'react';
import Input from '@/app/components/Input';
import Button from '@/app/components/Button';

interface FormData { name: string; email: string; message: string; }
interface FormErrors { name?: string; email?: string; message?: string; }

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Have a project in mind? Send me a message.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Info</h2>
            <div className="space-y-4">
              <div><span className="text-2xl mr-3">📧</span> Arewhonls@portfolio.com</div>
              <div><span className="text-2xl mr-3">📱</span> +1 (647) 100-1000</div>
              <div><span className="text-2xl mr-3">📍</span> Toronto, Ontario</div>
            </div>
          </div>

           {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <Input label="Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} required />
              <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} required />
              <Input label="Message" name="message" value={formData.message} onChange={handleChange} error={errors.message} required textarea rows={5} />
              {status === 'success' && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">Message sent!</div>}
              {status === 'error' && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">Error. Please try again.</div>}
              <Button type="submit" variant="primary" disabled={status === 'submitting'} className="w-full">
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
);
}