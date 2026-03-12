import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';

export function ComponentBreakdown() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-10">
            <SectionTitle label="Inside the Machine" title="Anatomy of a Nature Organic Energy Burner" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[
                    { title: 'Fuel Hopper', desc: 'Stores bulk pellets. Features anti-jamming vibrating screens.', num: '01' },
                    { title: 'Screw Conveyor', desc: 'Metered auger ensures smooth, consistent fuel delivery.', num: '02' },
                    { title: 'Refractory Chamber', desc: 'High-alumina castable lining handles 1200°C+ continuously.', num: '03' },
                    { title: 'Ash Discharge', desc: 'Automated or easy-access manual ash removal ports.', num: '04' }
                ].map((comp) => (
                    <Reveal key={comp.num} className="relative rounded-2xl bg-[#FDFEFD] border border-[#DCE3E6] p-6">
                        <span className="absolute right-4 top-4 text-3xl font-black text-[#F2F6F7]">{comp.num}</span>
                        <h3 className="text-base font-bold text-[#354653]">{comp.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-[#5B707E]">{comp.desc}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
