import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Cpu, Smartphone, Activity } from 'lucide-react';
import { cardBase } from '../../constants/siteConstants';

export function SmartPLC() {
    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#1e2d38] p-8 text-white md:p-14">
            <SectionTitle
                label="Automation"
                title="Full Stack PLC Software Architecture"
                text="Nature Organic Energy burners are 'set and forget.' Our proprietary PLC logic handles the complexity of fuel feeding, draft sync, and PID temperature control automatically."
                isDark={true}
                isCentered={true}
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
                {[
                    { title: 'PID Temperature Loop', desc: 'Maintains heat within +/- 2°C by predicting thermal inertia and adjusting fuel feeding accordingly.', icon: Activity },
                    { title: 'HMI Touch Interface', desc: 'Real-time visualization of flame status, motor RPMs, and thermocouple data on a rugged 7" display.', icon: Smartphone },
                    { title: 'Proprietary Logic', desc: 'Developed in-house to handle specific Indian biomass types which vary in density and moisture.', icon: Cpu },
                ].map((item) => (
                    <Reveal key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                        <item.icon size={32} className="text-[#66D9E8]" />
                        <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed opacity-60">{item.desc}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
