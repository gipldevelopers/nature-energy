import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';

export function RapidDeployment() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#354653] p-8 text-white md:p-12">
            <div className="text-center">
                <SectionTitle label="Logistics" title="Pan-India Logistics & Commissioning Teams" isDark={true} />
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                    { num: '01', title: 'Site Inspection', desc: 'Our engineers visit your plant to measure boiler geometry and confirm thermal calculations.' },
                    { num: '02', title: 'Secure Dispatch', desc: 'The customized burner is securely transported via flatbed directly to your manufacturing site.' },
                    { num: '03', title: '48-Hour Live', desc: 'Flange-matching, wiring, and PLC calibration. Most factories are running on pellet power within 48 hours of drop-off.' }
                ].map((step) => (
                    <Reveal key={step.num} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                        <span className="text-4xl font-black text-white/10">{step.num}</span>
                        <h3 className="mt-2 text-lg font-bold text-[#66D9E8]">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">{step.desc}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
