import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contactRef, { threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>(
    {
      message: '',
      type: null,
    }
  );
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill out all required fields.',
        type: 'error',
      });
      return;
    }
    
    setFormStatus({ message: 'Sending...', type: null });
    
    setTimeout(() => {
      setFormStatus({
        message: 'Your message has been sent successfully! We\'ll get back to you soon.',
        type: 'success',
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };
  
  const contactInfo = [
    { icon: <Mail size={24} />, title: 'Email', content: 'Siddharthatimalsin@gmail.com', link: 'mailto:Siddharthatimalsin@gmail.com' },
    { icon: <Phone size={24} />, title: 'Phone', content: '+977 9840923187', link: 'tel:+9779840923187' },
    { icon: <MapPin size={24} />, title: 'Location', content: 'Kathmandu, Nepal', link: 'https://maps.google.com' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: <Github size={20} />, url: 'https://github.com/', label: 'GitHub' },
    { icon: <Facebook size={20} />, url: 'https://facebook.com/', label: 'Facebook' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/', label: 'Twitter' },
  ];

  return (
    <section 
      id="contact" 
      ref={contactRef}
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
            Have a project in mind or want to learn more about my works? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          <div className={`lg:col-span-2 transition-all duration-700 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-md h-full">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map(item => (
                  <a 
                    key={item.title}
                    href={item.link}
                    className="flex items-start hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-500 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-slate-700 dark:text-slate-300">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map(link => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-amber-500 dark:hover:bg-amber-500 hover:text-white dark:hover:text-white transition-colors duration-300"
                    >
                      <span className="sr-only">{link.label}</span>
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className={`lg:col-span-3 transition-all duration-700 ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Project Quote">Project Quote</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 transition-all duration-300"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              {formStatus.message && (
                <div 
                  className={`mb-6 p-4 rounded-lg ${
                    formStatus.type === 'success' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                      : formStatus.type === 'error'
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Message <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;