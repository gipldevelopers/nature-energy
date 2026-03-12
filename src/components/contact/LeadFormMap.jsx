import React, { useState } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { MapPin, ArrowRight, Phone, Mail, MessageCircle, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../../data/siteData';

export function LeadFormMap() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        product: 'Industrial Pellet Burner',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({
                name: '',
                company: '',
                phone: '',
                email: '',
                product: 'Industrial Pellet Burner',
                message: ''
            });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-0 overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] lg:grid-cols-[1.1fr_0.9fr]" id='contact_form'>
            {/* Complex Form */}
            <div className="p-6 md:p-10">
                <SectionTitle label="Inquiry Form" title="Send Inquiry" />
                <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">
                    Reach out to us to learn more about our biomass pellet burners.
                </p>
                
                {status === 'success' ? (
                    <div className="mt-8 flex flex-col items-center justify-center py-10 text-center border-2 border-dashed border-[#27AE60]/30 bg-[#27AE60]/5 rounded-2xl">
                        <CheckCircle2 size={48} className="text-[#27AE60]" />
                        <h4 className="mt-4 text-xl font-bold text-[#354653]">Inquiry Sent Successfully!</h4>
                        <p className="mt-2 text-sm text-[#5B707E]">Our team will get back to you within 24 hours.</p>
                        <button 
                            onClick={() => setStatus('idle')}
                            className="mt-6 text-sm font-bold text-[#078DA4] hover:underline"
                        >
                            Send another inquiry
                        </button>
                    </div>
                ) : (
                    <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
                        <label className="text-xs font-bold text-[#354653]">
                            Name <span className="text-[#E74C3C]">*</span>
                            <input 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none" 
                                type="text" 
                                placeholder="John Doe" 
                            />
                        </label>
                        <label className="text-xs font-bold text-[#354653]">
                            Company Name <span className="text-[#E74C3C]">*</span>
                            <input 
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none" 
                                type="text" 
                                placeholder="Acme Textiles Ltd." 
                            />
                        </label>
                        <label className="text-xs font-bold text-[#354653]">
                            Phone <span className="text-[#E74C3C]">*</span>
                            <input 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none" 
                                type="tel" 
                                placeholder="+91" 
                            />
                        </label>
                        <label className="text-xs font-bold text-[#354653]">
                            Email
                            <input 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none" 
                                type="email" 
                                placeholder="john@acme.com" 
                            />
                        </label>
                        <label className="text-xs font-bold text-[#354653] md:col-span-2">
                            Product Requirement
                            <select 
                                name="product"
                                value={formData.product}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none"
                            >
                                <option>Industrial Pellet Burner</option>
                                <option>Boiler Pellet Burner</option>
                                <option>Bakery Oven Pellet Burner</option>
                                <option>Custom Biomass System</option>
                                <option>Other / Not Sure</option>
                            </select>
                        </label>
                        <label className="text-xs font-bold text-[#354653] md:col-span-2">
                            Message
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none" 
                                rows="4" 
                                placeholder="Tell us about any specific temperature requirements or space constraints..." 
                            />
                        </label>
                        <button 
                            type="submit" 
                            disabled={status === 'sending'}
                            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#078DA4] to-[#066F82] px-6 py-4 text-sm font-bold text-[#FDFEFD] md:col-span-2 hover:opacity-90 transition-opacity disabled:opacity-70"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send'} <ArrowRight size={16} />
                        </button>
                    </form>
                )}
            </div>

            {/* Map & Office */}
            <div className="flex flex-col border-t border-[#DCE3E6] lg:border-l lg:border-t-0 bg-[#F2F6F7]">
                <div className="h-[300px] w-full lg:h-[400px]">
                    <iframe 
                        src={contactInfo.mapEmbedUrl}
                        className="h-full w-full grayscale contrast-125"
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="p-8">
                    <h3 className="text-xl font-bold text-[#354653]">Contact Us</h3>
                    <div className="mt-6 flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <MapPin size={24} className="text-[#078DA4] flex-none" />
                            <div>
                                <p className="text-sm font-bold text-[#354653]">Manufacturing Unit Address</p>
                                <p className="mt-1 text-xs text-[#5B707E] leading-relaxed">
                                    {contactInfo.address}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone size={24} className="text-[#078DA4] flex-none" />
                            <div>
                                <p className="text-sm font-bold text-[#354653]">Phone Number</p>
                                <a href={`tel:${contactInfo.mobile}`} className="mt-1 text-xs text-[#5B707E] leading-relaxed hover:text-[#078DA4] transition-colors">+91 {contactInfo.mobile}</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail size={24} className="text-[#078DA4] flex-none" />
                            <div>
                                <p className="text-sm font-bold text-[#354653]">Email</p>
                                <a href={`mailto:${contactInfo.email}`} className="mt-1 text-xs text-[#5B707E] leading-relaxed hover:text-[#078DA4] transition-colors">{contactInfo.email}</a>
                            </div>
                        </div>
                        <a href={`https://wa.me/91${contactInfo.whatsapp}`} className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 shadow-sm shadow-[#25D366]/20" target="_blank" rel="noopener noreferrer">
                            <MessageCircle size={18} /> Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
