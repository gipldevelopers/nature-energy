import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Wind, ShieldCheck } from 'lucide-react';

export function EmissionsTech() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#1e2d38] p-8 text-white md:p-14">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
                <Reveal className="order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: 'SOx', val: 'Negligible' },
                            { label: 'NOx', val: '< 150 mg/Nm³' },
                            { label: 'PM', val: '< 50 mg/Nm³' },
                            { label: 'Smoke', val: 'Zero Visible' }
                        ].map((em) => (
                            <div key={em.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                                <p className="text-2xl font-black text-[#66D9E8]">{em.val}</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mt-1">{em.label}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
                <Reveal className="order-1 lg:order-2">
                    <SectionTitle
                        label="Green compliance"
                        title="Pollution Control Board Standards"
                        text="Our dual-stage combustion reduces particulate matter (PM) and Nitrogen Oxides (NOx) to levels far below the mandatory requirements of Indian industrial zones."
                        isDark={true}
                        noReveal={true}
                    />
                    <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#2BB673]/20 px-6 py-3 text-[#2BB673]">
                        <ShieldCheck size={20} />
                        <span className="text-xs font-bold uppercase tracking-widest">Environmentally Certified</span>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
