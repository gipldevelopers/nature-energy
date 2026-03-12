import React from 'react';
import { Cpu, Activity } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { cardBase } from '../../constants/siteConstants';

export function ResearchAndDevelopment() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
                <Reveal>
                    <SectionTitle label="Innovation Focus" title="Research & Development Labs" />
                    <p className="mt-4 text-sm leading-relaxed text-[#5B707E]">
                        Our in-house R&D wing continuously analyzes thermal dynamics, testing new refractory composites and automated control mechanisms to ensure Nature Energy burners remain at the cutting edge of industrial efficiency.
                    </p>
                </Reveal>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Reveal className={`${cardBase} p-5`}>
                        <Cpu size={20} className="text-[#066F82]" />
                        <h3 className="mt-3 text-sm font-bold text-[#354653]">Smart Automation</h3>
                        <p className="mt-1 text-xs text-[#5B707E]">Developing IoT connectivity for remote boiler monitoring and zero-human-error predictive maintenance.</p>
                    </Reveal>
                    <Reveal className={`${cardBase} p-5`}>
                        <Activity size={20} className="text-[#066F82]" />
                        <h3 className="mt-3 text-sm font-bold text-[#354653]">Thermal Optimization</h3>
                        <p className="mt-1 text-xs text-[#5B707E]">Fluid dynamics research to stretch pellet burn duration while preventing toxic slag formation.</p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
