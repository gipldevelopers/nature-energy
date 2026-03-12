import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { SafeImage } from '../common/SafeImage';
import { imageSet } from '../../data/siteData';

export function ExpertSeries() {
    return (
        <section className="mx-auto mt-6 grid w-[min(1280px,94vw)] gap-0 overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] md:grid-cols-2">
            <Reveal className="p-8 md:p-14 flex flex-col justify-center">
                <SectionTitle label="Interviews" title="Inside the Engineering Lab" />
                <p className="mt-4 text-sm leading-relaxed text-[#5B707E]">
                    Meet the minds behind the machines. In our "Expert Series," our lead mechanical and software engineers discuss the challenges of Indian industrial thermal loads and the future of green energy.
                </p>
                <div className="mt-8 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#078DA4] flex items-center justify-center text-white font-bold">R.K.</div>
                    <div>
                        <p className="text-sm font-bold text-[#354653]">Rajesh Kumar</p>
                        <p className="text-[10px] uppercase font-bold text-[#078DA4]">Chief Combustion Scientist</p>
                    </div>
                </div>
            </Reveal>
            <div className="relative min-h-[300px] overflow-hidden">
                <SafeImage src={imageSet.factoryHall} alt="Lab" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#FDFEFD] to-transparent h-1/2 md:hidden" />
            </div>
        </section>
    );
}
