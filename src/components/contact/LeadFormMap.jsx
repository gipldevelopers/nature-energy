import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { MapPin, ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { contactInfo } from '../../data/siteData';

export function LeadFormMap() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-0 overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] lg:grid-cols-[1.1fr_0.9fr]" id='contact_form'>
            {/* Complex Form */}
            <div className="p-6 md:p-10">
                <SectionTitle label="Inquiry Form" title="Send Inquiry" />
                <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">
                    Reach out to us to learn more about our biomass pellet burners.
                </p>
                <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
                    <label className="text-xs font-bold text-[#354653]">
                        Name <span className="text-[#E74C3C]">*</span>
                        <input className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none" type="text" placeholder="John Doe" />
                    </label>
                    <label className="text-xs font-bold text-[#354653]">
                        Company Name <span className="text-[#E74C3C]">*</span>
                        <input className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none" type="text" placeholder="Acme Textiles Ltd." />
                    </label>
                    <label className="text-xs font-bold text-[#354653]">
                        Phone <span className="text-[#E74C3C]">*</span>
                        <input className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none" type="tel" placeholder="+91" />
                    </label>
                    <label className="text-xs font-bold text-[#354653]">
                        Email
                        <input className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none" type="email" placeholder="john@acme.com" />
                    </label>
                    <label className="text-xs font-bold text-[#354653] md:col-span-2">
                        Product Requirement
                        <select className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none">
                            <option>Industrial Pellet Burner</option>
                            <option>Boiler Pellet Burner</option>
                            <option>Bakery Oven Pellet Burner</option>
                            <option>Custom Biomass System</option>
                            <option>Other / Not Sure</option>
                        </select>
                    </label>
                    <label className="text-xs font-bold text-[#354653] md:col-span-2">
                        Message
                        <textarea className="mt-2 w-full rounded-xl border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-3 text-sm focus:border-[#078DA4] focus:outline-none" rows="4" placeholder="Tell us about any specific temperature requirements or space constraints..." />
                    </label>
                    <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#078DA4] to-[#066F82] px-6 py-4 text-sm font-bold text-[#FDFEFD] md:col-span-2 hover:opacity-90 transition-opacity">
                        Send <ArrowRight size={16} />
                    </button>
                </form>
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
                                <p className="mt-1 text-xs text-[#5B707E] leading-relaxed">+91 {contactInfo.mobile}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail size={24} className="text-[#078DA4] flex-none" />
                            <div>
                                <p className="text-sm font-bold text-[#354653]">Email</p>
                                <p className="mt-1 text-xs text-[#5B707E] leading-relaxed">{contactInfo.email}</p>
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
