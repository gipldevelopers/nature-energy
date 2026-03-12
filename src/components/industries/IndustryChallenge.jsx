import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { imageSet } from '../../data/siteData';

export function IndustryChallenge() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-0 overflow-hidden rounded-[24px] border border-[#DCE3E6] md:grid-cols-[1.2fr_0.8fr]">
            <Reveal className="flex flex-col justify-center bg-[#FDFEFD] p-6 lg:p-12">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#DCE3E6] bg-[#F2F6F7] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#E74C3C]">
                    <AlertTriangle size={12} /> The Industry Challenge
                </span>
                <h2 className="mt-4 text-2xl font-bold leading-tight text-[#354653] md:text-3xl lg:text-4xl">
                    Fluctuating Fossil Fuel Costs Destroy Manufacturing Margins
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5B707E] md:text-base">
                    Indian industrial sectors rely heavily on thermal processes (boilers, steam generators, dryers, ovens). When running on diesel (HSD) or furnace oil (FO), a single spike in international crude oil slices right through your monthly profit margin.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">
                    On top of severe financial bleed, mounting pressure from pollution control boards is forcing older, smoke-emitting combustion equipment out of operation.
                </p>
            </Reveal>
            <div className="relative min-h-[320px] bg-[#1e2d38]">
                <SafeImage src={imageSet.machine1} alt="Industrial Exhaust" className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1e2d38]/80" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
                        <p className="text-xl font-bold text-white">Up to 60%</p>
                        <p className="mt-1 text-xs text-white/70">Of an average plant's thermal operational cost is spent on fuel alone.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
