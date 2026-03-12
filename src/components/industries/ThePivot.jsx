import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Banknote, Wind, ShieldCheck } from 'lucide-react';
import { cardBase } from '../../constants/siteConstants';

export function ThePivot() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-10">
            <SectionTitle label="The Pivot" title="How biomass pellet architecture solves the crisis" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[
                    { title: 'Fixed Fuel Costs', desc: 'Pellet prices are tied to local agricultural waste, remaining highly insulated from crude oil volatility.', icon: Banknote },
                    { title: 'Zero Smoke Compliance', desc: 'Gasifier-style dual-air combustion ensures completely smokeless operation, keeping the PCB happy.', icon: Wind },
                    { title: 'Boiler Compatible', desc: 'Bolt-on retrofit designs mean you keep your expensive boiler and only replace the fuel delivery mechanism.', icon: ShieldCheck }
                ].map((idx) => (
                    <Reveal key={idx.title} className={`${cardBase} bg-[#FDFEFD] p-6 text-center`}>
                        <idx.icon size={32} className="mx-auto text-[#078DA4]" />
                        <h3 className="mt-4 text-lg font-bold text-[#354653]">{idx.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#5B707E]">{idx.desc}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
