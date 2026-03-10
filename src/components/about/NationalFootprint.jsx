import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';

export function NationalFootprint() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#FDFEFD] p-6 md:p-10">
            <SectionTitle label="National Footprint" title="Proven reliability across critical industries" />
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#DCE3E6] overflow-hidden rounded-2xl border border-[#DCE3E6]">
                {[
                    { label: 'Active Boiler Installations', stat: '280+', sub: 'Running Pan-India' },
                    { label: 'Fuel Cost Savings Delivered', stat: '45-50%', sub: 'Vs Diesel/Gas' },
                    { label: 'Years of Engineering Exp.', stat: '10+', sub: 'In Thermal Systems' },
                    { label: 'System Uptime Average', stat: '99%', sub: 'Highly Reliable' },
                ].map((item, i) => (
                    <Reveal key={i} className="flex flex-col items-center justify-center bg-[#F2F6F7]/50 p-6 text-center">
                        <p className="text-3xl font-black text-[#066F82] md:text-4xl">{item.stat}</p>
                        <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[#354653]">{item.label}</p>
                        <p className="mt-1 text-[10px] uppercase text-[#5B707E]">{item.sub}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
