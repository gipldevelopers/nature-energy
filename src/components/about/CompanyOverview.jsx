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
                    <Factory size={12} /> About the Company
                </span>
                <h2 className="mt-4 text-2xl font-bold leading-tight text-[#354653] md:text-3xl lg:text-4xl">
                    About Nature Organic Energy
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5B707E] md:text-base">
                    Nature Organic Energy is a leading manufacturer of high-performance Biomass Pellet Burners designed for industrial heating applications.
                </p>
                <div className="mt-4 text-sm leading-relaxed text-[#5B707E] md:text-base">
                    <p className="mb-2 font-semibold">With years of engineering expertise, we focus on:</p>
                    <ul className="ml-4 list-outside list-disc space-y-1">
                        <li>Energy efficiency</li>
                        <li>Cost reduction</li>
                        <li>Environmental sustainability</li>
                        <li>Automation technology</li>
                    </ul>
                </div>
                <p className="mt-5 text-sm font-medium leading-relaxed text-[#066F82] md:text-base bg-[#066F82]/5 p-4 rounded-lg border border-[#066F82]/10">
                    Our mission is to provide industries with an eco-friendly alternative to traditional fossil fuel burners.
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
