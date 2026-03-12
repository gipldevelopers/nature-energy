import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Database, Layers } from 'lucide-react';
import { cardBase } from '../../constants/siteConstants';

export function RobustEngineering() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] overflow-hidden rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7]">
            <div className="grid lg:grid-cols-3">
                <div className="flex flex-col justify-center p-8 bg-[#1e2d38] text-white">
                    <SectionTitle label="Robust Engineering" title="Zero Downtime Priority" isDark={true} />
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                        Whether you operate a sanitized pharma lab or a dusty steel forge, our systems are IP-rated and built to shrug off harsh ambient conditions.
                    </p>
                </div>
                <div className="lg:col-span-2 p-8">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            { title: 'Food & Pharma Grade', desc: 'No smoke, no soot, clean heat delivery perfect for sensitive FDA-regulated food processing environments.', icon: Database },
                            { title: 'Heavy Metal Forging', desc: 'High-alumina castable refractories handle sustained 1200+ Degree Celsius blasts safely.', icon: Layers },
                        ].map((feat) => (
                            <Reveal key={feat.title} className={`${cardBase} p-6 bg-[#FDFEFD]`}>
                                <feat.icon size={28} className="text-[#078DA4]" />
                                <h3 className="mt-4 text-base font-bold text-[#354653]">{feat.title}</h3>
                                <p className="mt-2 text-sm text-[#5B707E]">{feat.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
