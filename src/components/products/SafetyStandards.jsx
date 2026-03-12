import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { ShieldCheck } from 'lucide-react';

export function SafetyStandards() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#1e2d38] p-6 text-white md:p-10">
            <div className="flex flex-col items-center text-center mb-8">
                <ShieldCheck size={48} className="text-[#2BB673] mb-4" />
                <SectionTitle
                    label="Safety First"
                    title="Comprehensive Equipment Safety"
                    text="Operating at extreme temperatures requires uncompromising safety protocols. Every Nature Energy burner is equipped with multi-layered mechanical and electronic safety overrides."
                    isDark={true}
                />
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
                {[
                    { title: 'Back-fire Protection', desc: 'Rotary air-lock valves and temperature sensors prevent flame traveling back to the hopper.' },
                    { title: 'Over-heat Cutoff', desc: 'Emergency shutoff activates instantly if internal chamber temperatures exceed safe thresholds.' },
                    { title: 'Power-fail Safe', desc: 'Safe residual heat dissipation mechanisms engaged during sudden electricity blackouts.' },
                    { title: 'Flame Sensor', desc: 'Optical flame monitoring prevents unburnt fuel piling if combustion is lost.' }
                ].map((s) => (
                    <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <h3 className="text-sm font-bold text-[#66D9E8]">{s.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-white/70">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
