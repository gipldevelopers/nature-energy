import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { CheckCircle2 } from 'lucide-react';
import { imageSet } from '../../data/siteData';

export function CaseStudyOne() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-0 overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] md:grid-cols-2">
            <div className="relative min-h-[350px]">
                <SafeImage src={imageSet.machine1} alt="Mega Project" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#66D9E8]">Case Study 01</p>
                    <h3 className="mt-2 text-2xl font-bold">Textile Processing Giant</h3>
                </div>
            </div>
            <Reveal className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <SectionTitle label="Project Spotlight" title="₹15 Lakhs Saved in 6 Months" />
                <p className="mt-4 text-sm leading-relaxed text-[#5B707E]">
                    Retrofitting three 1.5M Kcal burners on a single thermal oil heater circuit. We synchronized the PLC units to handle varying steam loads during the dyeing process.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#078DA4]" />
                        <span className="text-xs font-bold text-[#354653]">99% Uptime</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#078DA4]" />
                        <span className="text-xs font-bold text-[#354653]">Payback: 8 Months</span>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
