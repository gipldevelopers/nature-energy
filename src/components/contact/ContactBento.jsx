import React from 'react';
import { Briefcase, HelpCircle, Factory } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { cardBase } from '../../constants/siteConstants';
import { contactInfo } from '../../data/siteData';

export function ContactBento() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-3">
            {[
                { title: 'Technical Sales', desc: 'Get a custom quotation or arrange a plant audit.', icon: Briefcase, contact: `+91 ${contactInfo.mobile}`, link: contactInfo.email },
                { title: 'Customer Support', desc: 'Parts, maintenance, and machine troubleshooting.', icon: HelpCircle, contact: '+91 99048 88070', link: 'support@natureenergy.in' },
                { title: 'Main Headquarters', desc: 'Corporate office and manufacturing facility.', icon: Factory, contact: 'Ahmedabad, Gujarat', link: 'View on Maps', url: contactInfo.googleMapsUrl },
            ].map((dept) => (
                <Reveal key={dept.title} className={`${cardBase} p-6 bg-[#FDFEFD]`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#078DA4]/10">
                        <dept.icon size={24} className="text-[#078DA4]" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-[#354653]">{dept.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#5B707E]">{dept.desc}</p>
                    <div className="mt-4 pt-4 border-t border-[#DCE3E6]">
                        {dept.url ? (
                             <a href={dept.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#066F82] hover:underline block">{dept.contact}</a>
                        ) : (
                            <a href={`tel:${dept.contact.replace(/\s+/g, '')}`} className="text-sm font-bold text-[#066F82] hover:underline block">{dept.contact}</a>
                        )}
                        
                        {dept.link.includes('@') ? (
                            <a href={`mailto:${dept.link}`} className="mt-1 text-xs text-[#5B707E] hover:underline block">{dept.link}</a>
                        ) : dept.url ? (
                            <a href={dept.url} target="_blank" rel="noopener noreferrer" className="mt-1 text-xs text-[#5B707E] hover:underline block">{dept.link}</a>
                        ) : (
                            <p className="mt-1 text-xs text-[#5B707E]">{dept.link}</p>
                        )}
                    </div>
                </Reveal>
            ))}
        </section>
    );
}
