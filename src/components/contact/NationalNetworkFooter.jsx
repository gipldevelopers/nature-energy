import React from 'react';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imageSet, contactInfo } from '../../data/siteData';
import { cardBase } from '../../constants/siteConstants';

export function NationalNetworkFooter() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-2">
            <Reveal className={`${cardBase} p-8 lg:p-12 border-none bg-gradient-to-br from-[#066F82] to-[#354653] text-white`}>
                <Globe size={40} className="text-[#66D9E8]" />
                <h3 className="mt-6 text-2xl font-bold">Pan-India Installation Network</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                    While our high-tech manufacturing facility is proudly based in Gujarat, our commissioning teams and service networks operate strongly across Maharashtra, Tamil Nadu, Punjab, and beyond. We are also rapidly expanding to international exports.
                </p>
            </Reveal>
            <Reveal className={`${cardBase} p-8 lg:p-12 bg-black text-white overflow-hidden relative`}>
                <div className="absolute inset-0 opacity-40">
                    <SafeImage src={imageSet.factoryHall} alt="Industrial Hall" className="h-full w-full object-cover" />
                </div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-[#FDFEFD]">Partner With Us</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#FDFEFD]/80">
                        Are you a boiler manufacturer looking for a reliable biomass burner OEM? Or a pellet supplier wanting to build a network? We are always looking for strategic industrial partnerships.
                    </p>
                    <a href={`mailto:${contactInfo.email}`} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20">
                        Email Our Directors <ArrowRight size={16} />
                    </a>
                </div>
            </Reveal>
        </section>
    );
}
