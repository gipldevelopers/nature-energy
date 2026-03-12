import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { imageSet } from '../../data/siteData';

export function CombustionScience() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-0 overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] md:grid-cols-2">
            <Reveal className="p-8 md:p-12 lg:p-16">
                <SectionTitle
                    label="Thermal Core"
                    title="The Science of Gasification"
                    noReveal={true}
                />
                <p className="mt-4 text-sm leading-relaxed text-[#5B707E] md:text-base">
                    Unlike traditional burners that simply burn fuel on a grate, Nature Energy technology uses a gasification-combustion hybrid. We convert solid biomass into combustible syngas within a primary chamber before injecting high-velocity secondary air.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-[#F2F6F7] p-4 border border-[#DCE3E6]/30">
                        <p className="text-xl font-bold text-[#078DA4]">1200°C+</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#5B707E]">Flame Temperature</p>
                    </div>
                    <div className="rounded-xl bg-[#F2F6F7] p-4 border border-[#DCE3E6]/30">
                        <p className="text-xl font-bold text-[#078DA4]">95%+</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#5B707E]">Burn Efficiency</p>
                    </div>
                </div>
            </Reveal>
            <div className="relative min-h-[400px]">
                <SafeImage src={imageSet.machine1} alt="Combustion Chamber" className="absolute inset-0 h-full w-full object-cover" />
            </div>
        </section>
    );
}
