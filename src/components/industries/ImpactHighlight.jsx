import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { TrendingUp, Leaf } from 'lucide-react';
import { imageSet } from '../../data/siteData';

export function ImpactHighlight() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-4 sm:p-6 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div className="order-2 lg:order-1 relative h-[220px] sm:h-64 lg:h-full min-h-[300px] overflow-hidden rounded-2xl">
                    <SafeImage src={imageSet.textile} alt="Textile Plant Retrofit" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 border-[6px] border-white/20 mix-blend-overlay" />
                </div>
                <Reveal className="order-1 lg:order-2 flex flex-col justify-center">
                    <SectionTitle label="Impact Highlight" title="Textile Dyeing Plant Saves ₹1.2L Monthly" />
                    <p className="mt-4 text-sm leading-relaxed text-[#5B707E]">
                        A major cotton spinning and dyeing plant was burning 80 Litres of diesel per hour on their Thermic Fluid Heater. Within 48 hours, Nature Organic Energy completely retrofitted their system with a 10L Kcal Biomass Burner.
                    </p>
                    <ul className="mt-5 space-y-3">
                        <li className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2BB673]/20 text-[#2BB673]">
                                <TrendingUp size={12} />
                            </span>
                            <span className="text-sm font-medium text-[#354653]">Fuel cost dropped by roughly 48%</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#078DA4]/20 text-[#078DA4]">
                                <Leaf size={12} />
                            </span>
                            <span className="text-sm font-medium text-[#354653]">Carbon footprint virtually eliminated</span>
                        </li>
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}
