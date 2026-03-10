import React from 'react';
import { Factory, Leaf } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { imageSet } from '../../data/siteData';
import { cardBase } from '../../constants/siteConstants';

export function CompanyOverview() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-4 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className={`${cardBase} flex flex-col justify-center p-6 md:p-10 lg:p-12`}>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#DCE3E6] bg-[#FDFEFD] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#066F82]">
                    <Factory size={12} /> Company Overview
                </span>
                <h2 className="mt-4 text-2xl font-bold leading-tight text-[#354653] md:text-3xl lg:text-4xl">
                    A Catalyst for Industrial Carbon Reduction & Cost Efficiency
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5B707E] md:text-base">
                    Nature Energy works intimately with heavy process industries to design combustion architecture that aligns with continuous runtime patterns, volatile load behaviors, and aggressive operating cost objectives.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#5B707E] md:text-base">
                    By manufacturing high-efficiency biomass systems in-house, we control the quality from raw steel to the final automated PLC interface, ensuring your plant utility team experiences uncompromising reliability.
                </p>
            </Reveal>

            <Reveal className={`${cardBase} relative overflow-hidden p-0 min-h-[360px]`}>
                <SafeImage src={imageSet.steelPlant} alt="Manufacturing facility overview" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1e2d38] to-transparent p-6 pt-24 text-white">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#078DA4] to-[#066F82]">
                            <Leaf size={24} className="text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">100% Renewable</p>
                            <p className="text-xs uppercase tracking-wider text-white/70">Bio-Energy Focus</p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
