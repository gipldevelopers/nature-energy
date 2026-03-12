import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Factory, Construction, ShieldCheck } from 'lucide-react';
import { cardBase } from '../../constants/siteConstants';

export function CapacityHighlights() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#354653] p-8 md:p-14 text-white">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] items-center">
                <Reveal>
                    <SectionTitle isDark={true} label="Project Scope" title="Handling Massive Thermal Multi-Loads" />
                    <p className="mt-4 text-sm leading-relaxed opacity-70">
                        Our engineering team isn't limited to standard burners. we have successfully implemented tandem systems—linking multiple burners to a single heating chamber for heavy industries.
                    </p>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                        <Factory size={28} className="text-[#66D9E8]" />
                        <h4 className="mt-4 font-bold">5M+ Kcal/hr</h4>
                        <p className="mt-1 text-xs opacity-60">Custom integrated multi-unit project capacity.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                        <Construction size={28} className="text-[#66D9E8]" />
                        <h4 className="mt-4 font-bold">48-Hr Retrofit</h4>
                        <p className="mt-1 text-xs opacity-60">Maximum site downtime during installation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
