import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { Reveal } from '../common/Reveal';
import { Clock, Truck, Hammer, Zap } from 'lucide-react';

export function ProjectLifecycle() {
    const steps = [
        { title: 'Site Survey', desc: 'Detailed measurement of existing boiler flanges and thermal load.', icon: Clock },
        { title: 'Custom Fab', desc: 'In-house assembly and PLC programming tailored to the plant.', icon: Hammer },
        { title: 'Deployment', desc: 'Heavy-machinery logistics and secure site placement.', icon: Truck },
        { title: 'Ignition', desc: 'Live commissioning and staff training within 48 hours.', icon: Zap },
    ];

    return (
        <section className="mx-auto mt-6 w-[min(1280px,94vw)] rounded-[24px] border border-[#DCE3E6] bg-[#F2F6F7] p-8 md:p-12">
            <div className="text-center">
                <SectionTitle label="The Pipeline" title="From Inquiry to Live Ignition" />
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
                {steps.map((step, idx) => (
                    <Reveal key={step.title} className="relative flex flex-col items-center text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm border border-[#DCE3E6] text-[#078DA4]">
                            <step.icon size={28} />
                        </div>
                        <h4 className="mt-4 font-bold text-[#354653]">{step.title}</h4>
                        <p className="mt-2 text-xs leading-relaxed text-[#5B707E]">{step.desc}</p>
                        {idx < steps.length - 1 && (
                            <div className="absolute top-8 left-[60%] hidden w-full h-[1px] border-t border-dashed border-[#DCE3E6] md:block" />
                        )}
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
