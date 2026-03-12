import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Settings, Zap, ShieldCheck } from 'lucide-react';

export function TechnologyFeatures() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#354653] p-6 text-white md:p-10">
            <div className="text-center">
                <SectionTitle
                    label="Product Technology"
                    title="What makes Nature Organic Energy burners superior?"
                    isDark={true}
                />
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                    { title: 'Intelligent VFD Control', desc: 'Variable Frequency Drives (VFD) strictly control blower speeds and fuel feeding rates to maintain precise oxygen-to-fuel ratios, preventing heat loss.', icon: Settings },
                    { title: 'Dual Air-Stage Combustion', desc: 'Primary air gasifies the pellet, while secondary air creates a swirling combustion effect. This ensures zero unburnt carbon and completely smokeless exhaust.', icon: Zap },
                    { title: 'Anti-Slagging Architecture', desc: 'Specialized thermal geometry prevents ash fusion at high temperatures, significantly reducing the "clinker" buildup that plagues cheaper burners.', icon: ShieldCheck },
                ].map((item, i) => (
                    <Reveal key={i} className="rounded-2xl border border-white/10 bg-[#1e2d38]/50 p-6 backdrop-blur-md">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#078DA4] to-[#066F82]">
                            <item.icon size={22} className="text-white" />
                        </div>
                        <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
