import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { CheckCircle2 } from 'lucide-react';
import { imageSet } from '../../data/siteData';

export function DesignPhilosophy() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
                <Reveal className="flex flex-col justify-center">
                    <SectionTitle
                        label="Engineering Philosophy"
                        title="Built for the harshest industrial environments"
                    />
                    <p className="mt-4 text-sm leading-relaxed text-[#5B707E] md:text-base">
                        At Nature Energy, our products are not simply assembled; they are engineered from the ground up to solve real-world industrial heating challenges. From continuous 24/7 operating cycles to extreme ambient temperatures, our systems deliver consistent thermal power.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                        {['Heavy-Duty Steel Construction', 'Refractory Chamber', 'Automated PLC logic'].map((item) => (
                            <span key={item} className="inline-flex items-center gap-2 rounded-full border border-[#DCE3E6] bg-[#F2F6F7] px-4 py-2 text-xs font-semibold text-[#354653]">
                                <CheckCircle2 size={14} className="text-[#078DA4]" />
                                {item}
                            </span>
                        ))}
                    </div>
                </Reveal>
                <Reveal className="relative min-h-[300px] overflow-hidden rounded-2xl">
                    <SafeImage src={imageSet.machine1} alt="Burner Engineering" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#354653]/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                        <p className="text-2xl font-bold">100% In-House</p>
                        <p className="text-sm text-white/80">Manufactured in India</p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
