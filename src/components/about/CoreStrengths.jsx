import React from 'react';
import { Hammer, Zap, Truck } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';

export function CoreStrengths() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7]">
            <div className="border-b border-[#DCE3E6] p-6 md:px-10 md:py-8">
                <SectionTitle label="Why Partner With Us" title="Built for industrial resilience and longevity" />
            </div>
            <div className="grid divide-y divide-[#DCE3E6] md:grid-cols-3 md:divide-x md:divide-y-0">
                {[
                    { title: 'In-House Fabrication', desc: 'Every burner component is precision laser-cut, welded, and assembled in our own advanced facility, preventing mid-supply chain quality drops.', icon: Hammer },
                    { title: 'Advanced Combustion', desc: 'Our dual-air injection technology ensures complete pellet gasification, eliminating unburnt fuel waste and crushing emission levels.', icon: Zap },
                    { title: 'Nationwide Service', desc: 'Rapid response maintenance teams and ready-to-ship spare parts networks keep your factory running 24/7 without costly downtime.', icon: Truck },
                ].map((item, idx) => (
                    <Reveal key={item.title} className="p-6 md:p-8 bg-[#FDFEFD]">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#078DA4]/10">
                            <item.icon size={22} className="text-[#078DA4]" />
                        </div>
                        <h3 className="text-lg font-bold text-[#354653]">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#5B707E]">{item.desc}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
