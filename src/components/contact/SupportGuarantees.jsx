import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Phone, ShieldCheck, Zap } from 'lucide-react';

export function SupportGuarantees() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#354653] p-6 text-white md:p-10">
            <div className="text-center">
                <SectionTitle label="Client Support" title="We don't just sell. We sustain." isDark={true} isCentered={true} />
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                    { title: '24/7 Phone Assistance', desc: 'Boilers run all night. So does our support desk. Reach an engineer instantly during emergencies.', icon: Phone },
                    { title: 'Ready Spare Parts', desc: 'Because we manufacture in-house, we hold deep inventory of every single motor, screw, and PLC board.', icon: ShieldCheck },
                    { title: 'Rapid Deployment', desc: 'Our technicians catch the first flight or train out for critical hardware failures anywhere in India.', icon: Zap },
                ].map((idx) => (
                    <Reveal key={idx.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm text-center">
                        <idx.icon size={28} className="mx-auto text-[#66D9E8]" />
                        <h3 className="mt-4 text-base font-bold">{idx.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-white/70">{idx.desc}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
