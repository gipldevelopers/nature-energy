import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { cardBase } from '../../constants/siteConstants';

import { contactInfo } from '../../data/siteData';

export function Footer() {
    const links = [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Products', to: '/products' },
        { label: 'Industries', to: '/industries' },
        { label: 'Technology', to: '/technology' },
        { label: 'Projects', to: '/projects' },
        { label: 'Gallery', to: '/gallery' },
        { label: 'Blog', to: '/blog' },
        { label: 'FAQ', to: '/faq' },
        { label: 'Contact', to: '/contact' },
        { label: 'Dealer', to: '/dealer' },
    ];

    return (
        <footer className="mt-10 border-t border-[#DCE3E6] bg-[#F2F6F7]">
            <div className="mx-auto grid w-[min(1280px,94vw)] gap-8 py-10 sm:grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr]">
                <div>
                    <Link to="/" className="inline-flex items-center gap-3">
                        <img
                            src="/nature organic energy.svg"
                            alt="Nature Organic Energy Logo"
                            className="h-14 w-14 object-contain"
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold leading-tight text-[#354653]">Nature Organic</span>
                            <span className="text-xs uppercase tracking-widest text-[#078DA4]">Energy</span>
                        </div>
                    </Link>

                    <p className="mt-4 max-w-md text-sm leading-relaxed text-[#078DA4] font-semibold">
                        Switch to Smart Biomass Energy.<br />
                        Reduce Fuel Cost.<br />
                        Increase Profitability.<br />
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-[#354653] font-bold">
                        Choose Nature Organic Energy.
                    </p>
                    <div className="mt-5 flex flex-col gap-3 text-sm text-[#5B707E]">
                        <a href={`tel:${contactInfo.mobile}`} className="inline-flex items-start gap-2.5 hover:text-[#066F82] transition-colors">
                            <Phone size={16} className="shrink-0 mt-0.5" /> <span>+91 {contactInfo.mobile}</span>
                        </a>
                        <a href={`mailto:${contactInfo.email}`} className="inline-flex items-start gap-2.5 hover:text-[#066F82] transition-colors">
                            <Mail size={16} className="shrink-0 mt-0.5" /> <span>{contactInfo.email}</span>
                        </a>
                        <a href={contactInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2.5 hover:text-[#066F82] transition-colors leading-relaxed">
                            <MapPin size={16} className="shrink-0 mt-0.5" /> <span>{contactInfo.address}</span>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-[#354653]">Quick Links</h4>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-[#5B707E]">
                        {links.map((item) => (
                            <Link key={item.to} to={item.to} className="transition hover:text-[#066F82]">
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <h4 className="mt-6 text-lg font-semibold text-[#354653]">Sister Concerns</h4>
                    <div className="mt-2 flex gap-4 text-sm text-[#5B707E]">
                        {contactInfo.referenceWebsites.map((site) => (
                            <span key={site.name} className="inline-flex items-center gap-1 font-medium text-[#078DA4]">
                                {site.name}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={`${cardBase} p-5`}>
                    <h4 className="text-lg font-semibold text-[#354653]">Need Technical Consultation?</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#5B707E]">
                        Share your current fuel type, monthly utility cost, and heating load. Our engineering team will suggest the
                        right biomass system with expected savings.
                    </p>
                    <a
                        href={`tel:${contactInfo.mobile}`}
                        className="mt-4 inline-flex rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-4 py-2 text-sm font-semibold text-[#FDFEFD]"
                    >
                        Request Consultation
                    </a>
                </div>
            </div>
            <div className="border-t border-[#DCE3E6] py-6 bg-white">
                <div className="mx-auto flex w-[min(1280px,94vw)] flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
                        <p className="text-sm text-[#5B707E]">
                            © {new Date().getFullYear()} Nature Organic Energy. All rights reserved.
                        </p>
                        <div className="flex gap-4 text-xs font-medium text-[#078DA4]">
                            <Link to="/privacy-policy" className="transition-colors hover:text-[#066F82] hover:underline">
                                Privacy Policy
                            </Link>
                            <Link to="/terms-conditions" className="transition-colors hover:text-[#066F82] hover:underline">
                                Terms and Conditions
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-[#9EABAE]">Powered by</span>
                        <a href="https://greenidea.in/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                            <img 
                                src="/gipl-logo-transparent.png" 
                                alt="GIPL Logo" 
                                className="h-8 md:h-10 object-contain"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
