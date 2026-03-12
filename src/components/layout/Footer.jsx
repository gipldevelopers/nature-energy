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
                            alt="Nature Energy Logo"
                            className="h-14 w-14 object-contain"
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold leading-tight text-[#354653]">Nature Energy</span>
                            <span className="text-xs uppercase tracking-widest text-[#078DA4]">Organic</span>
                        </div>
                    </Link>

                    <p className="mt-4 max-w-md text-sm leading-relaxed text-[#078DA4] font-semibold">
                        Switch to Smart Biomass Energy.<br/>
                        Reduce Fuel Cost.<br/>
                        Increase Profitability.<br/>
                    </p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-[#354653] font-bold">
                        Choose Nature Organic Energy.
                    </p>
                    <div className="mt-5 grid gap-2 text-sm text-[#5B707E]">
                        <p className="inline-flex items-center gap-2">
                            <Phone size={15} /> +91 {contactInfo.mobile}
                        </p>
                        <p className="inline-flex items-center gap-2">
                            <Mail size={15} /> {contactInfo.email}
                        </p>
                        <p className="inline-flex items-center gap-2">
                            <MapPin size={15} /> {contactInfo.address}
                        </p>
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
                    <Link
                        to="/contact"
                        className="mt-4 inline-flex rounded-full border border-[#078DA4] bg-gradient-to-r from-[#078DA4] to-[#066F82] px-4 py-2 text-sm font-semibold text-[#FDFEFD]"
                    >
                        Request Consultation
                    </Link>
                </div>
            </div>
            <div className="border-t border-[#DCE3E6] py-4 text-center text-xs text-[#9EABAE]">
                © {new Date().getFullYear()} Nature Energy. All rights reserved.
            </div>
        </footer>
    );
}
